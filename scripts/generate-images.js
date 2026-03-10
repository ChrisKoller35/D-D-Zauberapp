/**
 * Generiert Zauber-Bilder via Google Imagen 3 API
 * Aufruf: npm run generate-images
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
  console.error('❌ GOOGLE_AI_API_KEY nicht in .env gefunden');
  process.exit(1);
}

const SPELLS = [
  {
    id: '1',
    filename: 'schauriger-strahl.png',
    prompt: 'Dark fantasy D&D spell art, eldritch blast purple crackling energy beam shooting from a warlock\'s hand, dark void tendrils, cosmic horror tentacles in background, dramatic purple-violet magical lightning, spell card illustration style, dark background, highly detailed, cinematic lighting',
  },
  {
    id: '2',
    filename: 'magierhand.png',
    prompt: 'Dark fantasy D&D spell art, mage hand spell, translucent spectral glowing blue ghost hand floating in darkness, ethereal magical hand reaching for objects, soft blue magical glow, mystical atmosphere, spell card illustration style, dark background',
  },
  {
    id: '3',
    filename: 'ruestung-von-agathys.png',
    prompt: 'Dark fantasy D&D spell art, armor of Agathys spell, spectral icy frost armor forming around a figure, blue-white ice crystals and magical frost, temporary hit points visualization, cold magic aura, spell card illustration style, dark blue background, dramatic lighting',
  },
  {
    id: '4',
    filename: 'schild.png',
    prompt: 'Dark fantasy D&D spell art, shield spell, shimmering golden invisible force barrier appearing in front of a warrior, magical protective ward glowing golden, arcane energy ripples, reactive magic shield, spell card illustration style, dark background',
  },
  {
    id: '5',
    filename: 'segen.png',
    prompt: 'Dark fantasy D&D spell art, bless spell, divine golden celestial light rays descending on three warriors, holy blessing aura glowing, golden divine energy particles floating upward, religious ritual magic, spell card illustration style, dark background with golden light',
  },
  {
    id: '6',
    filename: 'schild-des-glaubens.png',
    prompt: 'Dark fantasy D&D spell art, shield of faith spell, radiant divine blue-white protective shield of light surrounding a paladin, holy faith barrier glowing, sacred runes and symbols on the shield, celestial protection magic, spell card illustration style',
  },
  {
    id: '7',
    filename: 'wunden-heilen.png',
    prompt: 'Dark fantasy D&D spell art, cure wounds spell, healing green magical energy flowing from hands into wounds, restorative emerald light mending injuries, life force restoration magic, gentle glowing green particles, spell card illustration style, dark background',
  },
  {
    id: '8',
    filename: 'goettliche-niederstreckung.png',
    prompt: 'Dark fantasy D&D spell art, divine smite spell, radiant golden-white divine energy explosion from a paladin sword strike, holy smite blast of radiance, righteous justice light beam, smiting undead, dramatic golden celestial explosion, spell card illustration style',
  },
  {
    id: '9',
    filename: 'fluch.png',
    prompt: 'Dark fantasy D&D spell art, bane curse spell, dark ominous red-purple curse magic spreading between multiple enemies, sinister debuff aura, cursed energy tendrils, dark magic corruption, malevolent spell energy, spell card illustration style, very dark background',
  },
  {
    id: '10',
    filename: 'mal-des-jaegers.png',
    prompt: 'Dark fantasy D&D spell art, hunter\'s mark spell, orange glowing magical hunting sigil rune appearing on a target creature, predator tracking magic mark, ranger spell visualization, fiery orange targeting glyph, wilderness hunting magic, spell card illustration style, dark forest background',
  },
];

async function generateImage(spell) {
  const outputPath = path.join(OUTPUT_DIR, spell.filename);

  // Skip if already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Überspringe ${spell.filename} (existiert bereits)`);
    return true;
  }

  console.log(`🎨 Generiere: ${spell.filename}...`);

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
      console.error(`❌ API Fehler für ${spell.filename}: ${response.status} ${error}`);
      return false;
    }

    const data = await response.json();
    const base64 = data?.predictions?.[0]?.bytesBase64Encoded;

    if (!base64) {
      console.error(`❌ Kein Bild in der Antwort für ${spell.filename}:`, JSON.stringify(data));
      return false;
    }

    const buffer = Buffer.from(base64, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`✅ Gespeichert: ${spell.filename} (${Math.round(buffer.length / 1024)} KB)`);
    return true;

  } catch (err) {
    console.error(`❌ Fehler bei ${spell.filename}:`, err.message);
    return false;
  }
}

async function main() {
  console.log('🔮 SpellManager – Bildgenerierung via Google Imagen 3\n');
  console.log(`📁 Output: ${OUTPUT_DIR}\n`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let success = 0;
  let failed = 0;

  for (const spell of SPELLS) {
    const ok = await generateImage(spell);
    if (ok) success++;
    else failed++;
    // Kurze Pause zwischen Requests (Rate Limiting)
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\n✨ Fertig! ${success} Bilder generiert, ${failed} fehlgeschlagen.`);
  if (success > 0) {
    console.log('\n📝 Nächster Schritt: Bildpfade sind bereits in SpellManager.jsx eingetragen!');
  }
}

main();
