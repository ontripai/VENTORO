const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../public/images');

async function optimizeImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (!stat.isFile()) continue;
    if (!/\.(jpg|jpeg|png)$/i.test(file)) continue;

    const originalSize = stat.size;
    try {
      const buffer = fs.readFileSync(fullPath);
      const metadata = await sharp(buffer).metadata();
      
      let pipeline = sharp(buffer);
      if (metadata.width && metadata.width > 1200) {
        pipeline = pipeline.resize(1200, null, { withoutEnlargement: true });
      }
      
      let optimizedBuffer;
      if (/\.(jpg|jpeg)$/i.test(file)) {
        optimizedBuffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      } else if (/\.png$/i.test(file)) {
        optimizedBuffer = await pipeline.png({ quality: 80, compressionLevel: 8 }).toBuffer();
      }

      if (optimizedBuffer && optimizedBuffer.length < originalSize) {
        fs.writeFileSync(fullPath, optimizedBuffer);
        console.log(`Optimized ${file}: ${(originalSize / 1024).toFixed(1)}KB -> ${(optimizedBuffer.length / 1024).toFixed(1)}KB (-${Math.round((1 - optimizedBuffer.length / originalSize) * 100)}%)`);
      } else {
        console.log(`Kept ${file}: ${(originalSize / 1024).toFixed(1)}KB (already optimal)`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }
}

optimizeImages();
