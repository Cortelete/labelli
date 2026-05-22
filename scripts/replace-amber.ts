import fs from 'fs';
import path from 'path';

function walk(dir: string) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.css')) {
      let content = fs.readFileSync(p, 'utf8');
      content = content.replace(/amber-/g, 'yellow-');
      content = content.replace(/rgba\(251,191,36/g, 'rgba(234,179,8'); // switch rgba from amber to yellow-500
      content = content.replace(/#fbbf24/g, '#eab308'); // switch hex
      content = content.replace(/#d97706/g, '#ca8a04'); // switch hex
      fs.writeFileSync(p, content);
    }
  });
}

walk('src');
console.log('Replaced all amber with yellow');
