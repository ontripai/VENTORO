const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'gallery');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const galleryItems = [
  // Oil & Gas
  { url: 'https://perdac.ro/wp-content/uploads/2021/01/slack-wax1.jpg', name: 'oil-slack-wax.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2021/01/parafin1.jpg', name: 'oil-paraffin.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2021/01/ruberp1.jpg', name: 'oil-rubber.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2021/01/base-oil-500-1.jpg', name: 'oil-base-oil.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2021/01/oili1.jpg', name: 'oil-fuel.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2021/01/lpg1.jpg', name: 'oil-lpg.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2021/01/ghir1.jpg', name: 'oil-bitumen.jpg' },

  // Construction
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/1-1.jpg', name: 'const-1.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/2.jpg', name: 'const-2.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/4.jpg', name: 'const-3.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/6.jpg', name: 'const-4.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/k1.jpg', name: 'const-5.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/k2.jpg', name: 'const-6.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/k3.jpg', name: 'const-7.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/k4.jpg', name: 'const-8.jpg' },

  // Food Products
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/ajil2.jpg', name: 'food-nuts.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/sofran.jpg', name: 'food-saffron.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/ghuti.jpg', name: 'food-spices.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/robe.jpg', name: 'food-paste.jpg' },

  // Natural Stone
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/d1.jpg', name: 'stone-1.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/d2.jpg', name: 'stone-2.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/d3.jpg', name: 'stone-3.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/d4.jpg', name: 'stone-4.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/d5.jpg', name: 'stone-5.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/d6.jpg', name: 'stone-6.jpg' },

  // Mining
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/1g.jpg', name: 'mining-1.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/2g.jpg', name: 'mining-2.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/3g.jpg', name: 'mining-3.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/4g.jpg', name: 'mining-4.jpg' },

  // Medical
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/x.jpg', name: 'medical-1.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/c.jpg', name: 'medical-2.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/v.jpg', name: 'medical-3.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/za.jpg', name: 'medical-4.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/azm.jpg', name: 'medical-5.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/medicamen.jpg', name: 'medical-6.jpg' },

  // Consulting & Management
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/cons1.jpg', name: 'consulting-1.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/3333.jpg', name: 'consulting-2.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/444.jpg', name: 'consulting-3.jpg' },
  { url: 'https://perdac.ro/wp-content/uploads/2020/12/555.jpg', name: 'consulting-4.jpg' }
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
        console.log(`[DOWNLOADED GALLERY] ${filename}`);
        resolve(dest);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Downloading ${galleryItems.length} subpage gallery assets from perdac.ro...`);
  for (const item of galleryItems) {
    try {
      await download(item.url, item.name);
    } catch (err) {
      console.error(`[ERROR] ${item.name} (${item.url}):`, err.message);
    }
  }
  console.log('All gallery assets processed.');
}

run();
