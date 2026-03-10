import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, '../src/SpellManager.jsx');

let content = fs.readFileSync(filePath, 'utf8');

const spellImages = [
  { id: '1', filename: 'schauriger-strahl.png' },
  { id: '2', filename: 'magierhand.png' },
  { id: '3', filename: 'ruestung-von-agathys.png' },
  { id: '4', filename: 'schild.png' },
  { id: '5', filename: 'segen.png' },
  { id: '6', filename: 'schild-des-glaubens.png' },
  { id: '7', filename: 'wunden-heilen.png' },
  { id: '8', filename: 'goettliche-niederstreckung.png' },
  { id: '9', filename: 'fluch.png' },
  { id: '10', filename: 'mal-des-jaegers.png' },
];

for (const { id, filename } of spellImages) {
  // Replace imageUrl:"" in the line containing id:"N"
  // Each spell is on a single line, so we can do a line-by-line replacement
  const lines = content.split('\n');
  let replaced = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`id:"${id}",`) && lines[i].includes('imageUrl:""')) {
      lines[i] = lines[i].replace('imageUrl:""', `imageUrl:"/images/spells/${filename}"`);
      replaced = true;
      console.log(`✅ Spell ${id}: ${filename}`);
      break;
    }
  }
  if (!replaced) console.log(`❌ Kein Match für Spell ${id}`);
  content = lines.join('\n');
}

fs.writeFileSync(filePath, content);
console.log('\n✨ SpellManager.jsx aktualisiert!');
