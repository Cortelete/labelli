import fs from 'fs';
import path from 'path';
import https from 'https';

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const download = (url: string, dest: string) => {
  return new Promise<void>((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function setup() {
  console.log('Downloading elegant placeholder assets...');
  try {
    // Fictional logo placeholders (dark and light setup with gold text)
    await download('https://placehold.co/400x400/111111/d4af37/png?text=LA+BELLI', path.join(publicDir, 'logo.png'));
    await download('https://placehold.co/400x400/ffffff/d4af37/png?text=LA+BELLI', path.join(publicDir, 'logo2.png'));
    await download('https://placehold.co/800x1200/111111/d4af37/png?text=FUNDO', path.join(publicDir, 'fundo.png'));
    await download('https://placehold.co/800x1200/ffffff/d4af37/png?text=FUNDO', path.join(publicDir, 'fundo2.png'));
    await download('https://placehold.co/400x400/111111/d4af37/png?text=LBMH', path.join(publicDir, 'iniciais.png'));
    await download('https://placehold.co/600x150/transparent/d4af37/png?text=LA+BELLI+MASTER+HALL', path.join(publicDir, 'fonte.png'));
    await download('https://placehold.co/600x150/transparent/d4af37/png?text=LA+BELLI+MASTER+HALL+BLACK', path.join(publicDir, 'fonte2.png'));
    console.log('Successfully setup placeholder images in /public.');
  } catch (error) {
    console.error('Error downloading files:', error);
  }
}

setup();
