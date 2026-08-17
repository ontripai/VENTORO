const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchText(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(targetDir, filename);
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`[DOWNLOADED] ${filename} from ${url}`);
        resolve(dest);
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching perdac.ro pages to extract exact images...');

  const pages = {
    home: 'https://perdac.ro/',
    about: 'https://perdac.ro/despre-noi/',
    projects: 'https://perdac.ro/proiecte/',
    collaboration: 'https://perdac.ro/colaborare/',
    contact: 'https://perdac.ro/contact/',
    energy: 'https://perdac.ro/industria-energetica/',
    cement: 'https://perdac.ro/industria-cimentului/',
    oilGas: 'https://perdac.ro/petrol-si-gaze/',
    construction: 'https://perdac.ro/constructii/',
    agriculture: 'https://perdac.ro/irigatii-si-agricultura/',
    logistics: 'https://perdac.ro/servicii-logistice/',
    food: 'https://perdac.ro/produse-alimentare/',
    naturalStone: 'https://perdac.ro/piatra-naturala/',
    mining: 'https://perdac.ro/minerit/',
    medical: 'https://perdac.ro/medical/',
    consulting: 'https://perdac.ro/consultanta-si-management/'
  };

  const results = {};

  for (const [key, url] of Object.entries(pages)) {
    try {
      const html = await fetchText(url);
      // match all wp-content/uploads/ images
      const matches = html.match(/https:\/\/perdac\.ro\/wp-content\/uploads\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi) || [];
      const uniqueImages = [...new Set(matches)];
      results[key] = uniqueImages;
      console.log(`Page [${key}]: found ${uniqueImages.length} image URLs`);
    } catch (e) {
      console.error(`Error fetching page ${key}:`, e.message);
    }
  }

  // Save the mapping for inspection
  fs.writeFileSync(path.join(__dirname, 'extracted-images.json'), JSON.stringify(results, null, 2));
  console.log('Saved extracted-images.json');
}

main();
