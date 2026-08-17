const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assetsToDownload = [
  // Services
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/managment.jpg', name: 'service-consulting.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/energy.jpg', name: 'service-energy.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/gasoil.jpg', name: 'service-oil-gas.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/cement.jpg', name: 'service-cement.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/const.jpg', name: 'service-construction.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/irigat.jpg', name: 'service-irrigation.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/logesticii.jpg', name: 'service-logistics.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/foodi.jpg', name: 'service-food.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/carp-900x600.jpg', name: 'service-handicrafts.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/piatra.jpg', name: 'service-natural-stone.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/miningi.jpg', name: 'service-mining.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/icu-900x600.jpg', name: 'service-medical.jpg' },

  // Hero backgrounds
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/comert-1-scaled.jpg', name: 'hero-industrial.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/energy.jpg', name: 'hero-energy.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/managment.jpg', name: 'hero-management.jpg' },

  // About, Contact, Collaboration
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/about-900x450.jpg', name: 'about-presentation.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/732220.jpg', name: 'about-team.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/contactus.jpg', name: 'contact-header.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/emailll.jpg', name: 'collaboration-partner.jpg' },

  // Projects
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/uae-300x300.jpg', name: 'project-uae.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/ciman-300x300.jpg', name: 'project-cement.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/jar-300x300.jpg', name: 'project-agriculture.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/elec-300x300.jpg', name: 'project-energy.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/paraf-300x300.jpg', name: 'project-paraffin.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/taj-300x300.jpg', name: 'project-stone.jpg' }
];

function download(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(targetDir, filename);
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filename).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`[SUCCESS] Saved ${filename}`);
        resolve(dest);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Downloading ${assetsToDownload.length} image assets from perdac.ro...`);
  for (const item of assetsToDownload) {
    try {
      await download(item.url, item.name);
    } catch (err) {
      console.error(`[ERROR] ${item.name} (${item.url}):`, err.message);
    }
  }
  console.log('All image assets processed.');
}

run();
