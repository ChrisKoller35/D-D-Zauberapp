/**
 * Generiert neue Zauber-Bilder (Aid, Find Steed) via Google Imagen API
 * Aufruf: node scripts/generate-new-spells.js
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../public/images/spells');

// API Key direkt aus .env lesen (ohne dotenv dependency)
const envPath = path.join(__dirname, '../.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const API_KEY = envContent.match(/GOOGLE_AI_API_KEY=(.+)/)?.[1]?.trim();

if (!API_KEY) {
  console.error('GOOGLE_AI_API_KEY nicht in .env gefunden');
  process.exit(1);
}

const SPELLS = [
  {
    filename: 'aid.png',
    prompt: 'Dark fantasy D&D spell art, Aid spell, divine golden-white celestial light bathing three allied warriors in radiant blessing, glowing health auras around the figures, holy magic strengthening life force, warm protective golden glow, religious abjuration magic, spell card illustration style, dark atmospheric background, no text, no borders, painterly digital art, cinematic dramatic lighting',
  },
  {
    filename: 'find-steed.png',
    prompt: "Dark fantasy D&D spell art, Find Steed spell, majestic spectral celestial warhorse materializing from swirling golden magical light, ethereal divine steed with glowing eyes and luminous mane, summoning conjuration magic ritual circle on the ground, paladin's noble mount appearing from radiant portal, holy summoning ceremony, spell card illustration style, dark mystical background with golden particles, no text, no borders, painterly digital art, cinematic dramatic lighting",
  },
];

async function generateImage(spell) {
  const outputPath = path.join(OUTPUT_DIR, spell.filename);

  console.log(`Generiere: ${spell.filename}...`);

  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instances: [{ prompt: spell.prompt }],
        parameters: {
          sampleCount: 1,
          aspectRatio: '4:3',
          safetyFilterLevel: 'block_only_high',
          personGeneration: 'allow_adult',
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`API Fehler fuer ${spell.filename}: ${response.status} ${error}`);
      return false;
    }

    const data = await response.json();
    const base64 = data?.predictions?.[0]?.bytesBase64Encoded;

    if (!base64) {
      console.error(`Kein Bild in der Antwort fuer ${spell.filename}:`, JSON.stringify(data));
      return false;
    }

    const buffer = Buffer.from(base64, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`Gespeichert: ${spell.filename} (${Math.round(buffer.length / 1024)} KB)`);
    return true;

  } catch (err) {
    console.error(`Fehler bei ${spell.filename}:`, err.message);
    return false;
  }
}

async function main() {
  console.log('SpellManager - Bildgenerierung fuer neue Zauber\n');
  console.log(`Output: ${OUTPUT_DIR}\n`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let success = 0;
  let failed = 0;

  for (const spell of SPELLS) {
    const ok = await generateImage(spell);
    if (ok) success++;
    else failed++;
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\nFertig! ${success} Bilder generiert, ${failed} fehlgeschlagen.`);
}

main();
