import { useState } from "react";

/* ── Inline SVG Icon Components ── */
const Icon = ({ d, size = 20, color = "currentColor", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
    <path d={d} />
  </svg>
);

const ShieldIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const StarIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const ZapIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const BookIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const SparkleIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z"/><path d="M18 14l.7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7L18 14z"/>
  </svg>
);
const XIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const PlusIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const EditIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const TrashIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);
const CheckIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ChevronDownIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);
const ChevronUpIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"/>
  </svg>
);
const MoonIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const CoffeeIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const ClockIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const MapPinIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const LayersIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
);
const AlertIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const InfoIcon = ({ size, color }) => (
  <svg width={size||20} height={size||20} viewBox="0 0 24 24" fill="none" stroke={color||"currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

/* ── Data ── */
const DEFAULT_SPELLS = [
  /* ── Cantrips ── */
  { id:"1", name:"Schauriger Strahl", school:"Hervorrufung", level:0, shortDesc:"Ein Strahl knisternder Energie schießt auf eine Kreatur.", fullDesc:"Ein Strahl knisternder Energie schießt auf eine Kreatur in Reichweite. Führe einen Fernkampf-Zauberangriff gegen das Ziel durch. Bei einem Treffer erleidet das Ziel 1W10 Energieschaden. Der Zauber erzeugt mehr als einen Strahl auf höheren Levels: zwei Strahlen auf Level 5, drei auf Level 11, vier auf Level 17. Jeder Strahl erfordert einen eigenen Angriffswurf.", range:"36 m", duration:"Unmittelbar", components:"V, S", concentration:false, diceFormula:"1W10", diceNote:"Energieschaden pro Strahl", imageUrl:"/images/spells/schauriger-strahl.png", theme:"radial-gradient(ellipse at 30% 50%, #7c3aed 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, #a855f7 0%, transparent 40%), linear-gradient(135deg, #1a0533 0%, #0f0a1a 40%, #1e0a3a 100%)" },
  { id:"2", name:"Magierhand", school:"Beschwörung", level:0, shortDesc:"Eine schwebende Geisterhand erscheint und manipuliert Objekte.", fullDesc:"Eine spektrale, schwebende Hand erscheint an einem Punkt deiner Wahl in Reichweite. Die Hand hält 1 Minute an oder bis du sie als Aktion auflöst. Sie verschwindet, wenn sie mehr als 9 m von dir entfernt ist oder du den Zauber erneut wirkst. Du kannst deine Aktion nutzen, um die Hand zu steuern: Objekte manipulieren, unverschlossene Türen/Behälter öffnen, Gegenstände verstauen/hervorholen, Inhalt aus einer Phiole gießen. Max. Tragkraft: 5 kg. Die Hand kann nicht angreifen und keine magischen Gegenstände aktivieren.", range:"9 m", duration:"1 Minute", components:"V, S", concentration:false, diceFormula:"", diceNote:"Utility – kein Schaden", imageUrl:"/images/spells/magierhand.png", theme:"radial-gradient(ellipse at 60% 50%, rgba(56,189,248,0.3) 0%, transparent 60%), radial-gradient(circle at 40% 60%, rgba(99,102,241,0.2) 0%, transparent 50%), linear-gradient(160deg, #0c1220 0%, #0a1628 50%, #111827 100%)" },
  /* ── Level 1 – Vorbereitet ── */
  { id:"3", name:"Rüstung von Agathys", school:"Bannmagie", level:1, shortDesc:"Magischer Frost gibt dir temporäre HP und schadet Nahkampfangreifern.", fullDesc:"Schützende magische Kraft umgibt dich als spektraler Frost. Du erhältst 5 temporäre Trefferpunkte für die Dauer (1 Stunde). Wenn eine Kreatur dich mit einem Nahkampfangriff trifft, solange du diese temporären HP hast, erleidet sie 5 Kälteschaden. Auf höheren Stufen: Sowohl die temporären HP als auch der Kälteschaden erhöhen sich um 5 pro Zauberplatz-Stufe über der 1. Keine Konzentration erforderlich!", range:"Selbst", duration:"1 Stunde", components:"V, S, M (Becher Wasser)", concentration:false, diceFormula:"", diceNote:"5 temp. HP + 5 Kälteschaden (Slot 1), +5/+5 pro Slot höher", imageUrl:"/images/spells/ruestung-von-agathys.png", theme:"radial-gradient(ellipse at 50% 80%, rgba(34,211,238,0.4) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(103,232,249,0.2) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(165,243,252,0.15) 0%, transparent 30%), linear-gradient(180deg, #0c2a3a 0%, #0a1929 50%, #061220 100%)" },
  { id:"4", name:"Schild", school:"Bannmagie", level:1, shortDesc:"Reaktion: +5 AC bis zum Start deines nächsten Zuges.", fullDesc:"1 Reaktion – wenn du von einem Angriff getroffen wirst oder Ziel von Magisches Geschoss bist. Eine unsichtbare Barriere aus magischer Kraft erscheint und schützt dich. Bis zum Start deines nächsten Zuges hast du +5 auf deine Rüstungsklasse, einschließlich gegen den auslösenden Angriff. Außerdem erleidest du keinen Schaden durch Magisches Geschoss.", range:"Selbst", duration:"1 Runde", components:"V, S", concentration:false, diceFormula:"", diceNote:"+5 AC (Reaktion)", imageUrl:"/images/spells/schild.png", theme:"radial-gradient(circle at 50% 50%, rgba(251,191,36,0.25) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(251,191,36,0.1) 0%, transparent 70%), conic-gradient(from 0deg at 50% 50%, rgba(251,191,36,0.05) 0%, transparent 10%, rgba(251,191,36,0.05) 20%, transparent 30%, rgba(251,191,36,0.05) 40%, transparent 50%, rgba(251,191,36,0.05) 60%, transparent 70%, rgba(251,191,36,0.05) 80%, transparent 90%), linear-gradient(135deg, #1a1508 0%, #12100a 50%, #1a1508 100%)" },
  { id:"5", name:"Segen", school:"Verzauberung", level:1, shortDesc:"Bis zu 3 Kreaturen erhalten +1W4 auf Angriffs- und Rettungswürfe.", fullDesc:"Du segnest bis zu drei Kreaturen deiner Wahl in Reichweite. Immer wenn ein Ziel einen Angriffswurf oder Rettungswurf macht, bevor der Zauber endet, kann es 1W4 werfen und das Ergebnis dazuaddieren. Auf höheren Stufen: +1 zusätzliche Kreatur pro Zauberplatz-Stufe über der 1.", range:"9 m", duration:"Konzentration, bis zu 1 Minute", components:"V, S, M (Weihwasser)", concentration:true, diceFormula:"1W4", diceNote:"Bonus auf Angriff & Rettung", imageUrl:"/images/spells/segen.png", theme:"radial-gradient(ellipse at 50% 30%, rgba(253,224,71,0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(251,191,36,0.15) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(253,224,71,0.1) 0%, transparent 35%), linear-gradient(170deg, #1a1505 0%, #0f0d08 50%, #151005 100%)" },
  { id:"6", name:"Schild des Glaubens", school:"Bannmagie", level:1, shortDesc:"Ein schimmerndes Feld gewährt +2 AC.", fullDesc:"Ein schimmerndes Feld erscheint und umgibt eine Kreatur deiner Wahl in Reichweite. Es gewährt für die Dauer einen +2 Bonus auf die Rüstungsklasse.", range:"18 m", duration:"Konzentration, bis zu 10 Minuten", components:"V, S, M (Pergament mit heiligem Text)", concentration:true, diceFormula:"", diceNote:"+2 AC Bonus", imageUrl:"/images/spells/schild-des-glaubens.png", theme:"radial-gradient(ellipse at 50% 60%, rgba(96,165,250,0.25) 0%, transparent 55%), radial-gradient(circle at 50% 40%, rgba(147,197,253,0.15) 0%, transparent 40%), linear-gradient(180deg, #0a1528 0%, #0c1a30 50%, #081320 100%)" },
  { id:"7", name:"Wunden heilen", school:"Hervorrufung", level:1, shortDesc:"Heile eine Kreatur die du berührst.", fullDesc:"Eine Kreatur die du berührst erhält Trefferpunkte in Höhe von 1W8 + deinem Zauberwirken-Attributsmodifikator (CHA) zurück. Dieser Zauber hat keine Wirkung auf Untote oder Konstrukte. Auf höheren Stufen: +1W8 Heilung pro Zauberplatz-Stufe über der 1.", range:"Berührung", duration:"Unmittelbar", components:"V, S", concentration:false, diceFormula:"1W8 + CHA", diceNote:"Heilung", imageUrl:"/images/spells/wunden-heilen.png", theme:"radial-gradient(ellipse at 50% 50%, rgba(52,211,153,0.3) 0%, transparent 55%), radial-gradient(circle at 30% 30%, rgba(110,231,183,0.15) 0%, transparent 40%), radial-gradient(circle at 70% 70%, rgba(167,243,208,0.1) 0%, transparent 35%), linear-gradient(150deg, #05150e 0%, #0a1a12 50%, #051510 100%)" },
  { id:"8", name:"Göttliche Niederstreckung", school:"Hervorrufung", level:1, shortDesc:"Göttliche Energie verstärkt deinen Nahkampfangriff.", fullDesc:"Wenn du eine Kreatur mit einem Nahkampf-Waffenangriff triffst, kannst du einen Zauberplatz aufwenden, um dem Ziel zusätzlichen Strahlungsschaden zuzufügen. Der zusätzliche Schaden beträgt 2W8 für einen Zauberplatz der 1. Stufe, plus 1W8 für jede höhere Stufe (maximal 5W8). Untote und Unholde erleiden zusätzlich 1W8 Schaden. Kein eigener Zauberplatz nötig zum Wirken – wird beim Treffer als Teil des Angriffs ausgelöst.", range:"Selbst (Nahkampf)", duration:"Unmittelbar", components:"—", concentration:false, diceFormula:"2W8", diceNote:"Strahlungsschaden (Slot 1), +1W8/höheren Slot", imageUrl:"/images/spells/goettliche-niederstreckung.png", theme:"radial-gradient(ellipse at 50% 70%, rgba(251,191,36,0.4) 0%, transparent 45%), radial-gradient(circle at 50% 30%, rgba(245,158,11,0.2) 0%, transparent 50%), radial-gradient(circle at 30% 50%, rgba(253,224,71,0.1) 0%, transparent 30%), linear-gradient(0deg, #1a1200 0%, #0f0a00 40%, #1a1505 100%)" },
  /* ── Eid-Zauber (Schwur der Vergeltung) – immer vorbereitet ── */
  { id:"9", name:"Fluch", school:"Verzauberung", level:1, shortDesc:"Bis zu 3 Gegner ziehen 1W4 von Angriffs- und Rettungswürfen ab.", fullDesc:"Du belegst bis zu 3 Kreaturen in Reichweite, die du sehen kannst. Jedes Ziel muss einen CHA-Rettungswurf gegen deinen Zauber-SC bestehen. Bei Misslingen zieht das Ziel bei jedem Angriffswurf und Rettungswurf 1W4 ab, solange der Zauber wirkt. Eid-Zauber (Schwur der Vergeltung) – immer vorbereitet.", range:"9 m", duration:"Konzentration, bis zu 1 Minute", components:"V, S, M (Bluttropfen)", concentration:true, diceFormula:"1W4", diceNote:"Malus auf Angriff & Rettung (Gegner)", imageUrl:"/images/spells/fluch.png", theme:"radial-gradient(ellipse at 40% 60%, rgba(220,38,38,0.25) 0%, transparent 50%), radial-gradient(circle at 60% 30%, rgba(127,29,29,0.2) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(248,113,113,0.1) 0%, transparent 30%), linear-gradient(160deg, #1a0505 0%, #0f0808 50%, #1a0a0a 100%)" },
  { id:"10", name:"Mal des Jägers", school:"Erkennungsmagie", level:1, shortDesc:"Markiere ein Ziel – Bonusschaden bei jedem Treffer.", fullDesc:"Bonusaktion: Du markierst eine Kreatur in Reichweite, die du sehen kannst. Bei jedem Waffentreffer gegen das Ziel verursachst du zusätzlich 1W6 Schaden des Waffentyps. Wenn das Ziel auf 0 HP fällt, kannst du das Mal als Bonusaktion auf ein neues Ziel verschieben (kein neuer Slot nötig). Eid-Zauber (Schwur der Vergeltung) – immer vorbereitet.", range:"27 m", duration:"Konzentration, bis zu 1 Stunde", components:"V", concentration:true, diceFormula:"1W6", diceNote:"Bonusschaden pro Waffentreffer", imageUrl:"/images/spells/mal-des-jaegers.png", theme:"radial-gradient(circle at 70% 40%, rgba(234,88,12,0.3) 0%, transparent 45%), radial-gradient(ellipse at 30% 60%, rgba(251,146,60,0.15) 0%, transparent 50%), radial-gradient(circle at 50% 20%, rgba(249,115,22,0.1) 0%, transparent 35%), linear-gradient(145deg, #1a0f05 0%, #0f0a05 50%, #1a1005 100%)" },
];

function evaluateDice(formula, stats) {
  if (!formula || formula === "") return null;
  let r = formula;
  r = r.replace(/CHA/gi, String(stats.charismaModifier || 0));
  r = r.replace(/STR/gi, String(Math.floor(((stats.str||10)-10)/2)));
  r = r.replace(/DEX/gi, String(Math.floor(((stats.dex||10)-10)/2)));
  r = r.replace(/WIS/gi, String(Math.floor(((stats.wis||10)-10)/2)));
  r = r.replace(/INT/gi, String(Math.floor(((stats.int||10)-10)/2)));
  r = r.replace(/CON/gi, String(Math.floor(((stats.con||10)-10)/2)));
  return r;
}

/* ── Gem ── */
function SlotGem({ active, onClick, size = 48, color = "amber" }) {
  const C = { amber:{g:"#fbbf24,#d97706",gl:"rgba(251,191,36,0.5)"}, purple:{g:"#c084fc,#7c3aed",gl:"rgba(168,85,247,0.5)"}, cyan:{g:"#67e8f9,#0891b2",gl:"rgba(34,211,238,0.5)"}, red:{g:"#fda4af,#e11d48",gl:"rgba(251,113,133,0.5)"}, green:{g:"#6ee7b7,#059669",gl:"rgba(52,211,153,0.5)"} };
  const c = C[color]||C.amber;
  return (
    <button onClick={onClick} style={{
      width:size, height:size, minWidth:size, transform:"rotate(45deg)", borderRadius:8, padding:0,
      border: active ? "none" : "1px solid rgba(107,114,128,0.3)",
      background: active ? `linear-gradient(135deg, ${c.g})` : "rgba(31,41,55,0.8)",
      boxShadow: active ? `0 0 16px ${c.gl}` : "none",
      opacity: active ? 1 : 0.35, cursor:"pointer", position:"relative", transition:"all 0.3s", flexShrink:0,
    }}>
      {active && <div style={{ position:"absolute", inset:6, borderRadius:4, background:"rgba(255,255,255,0.2)", animation:"pulse 2s infinite" }}/>}
      {!active && <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", transform:"rotate(-45deg)" }}><XIcon size={size>40?16:12} color="#555"/></div>}
    </button>
  );
}

/* ── Form Field ── */
function FormField({ label, value, onChange, type="text", placeholder="" }) {
  return (
    <div>
      <label style={{ display:"block", fontSize:12, color:"#9ca3af", marginBottom:4 }}>{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)}
        style={{ width:"100%", padding:"10px 12px", borderRadius:8, fontSize:14, background:"rgba(17,24,39,0.6)", border:"1px solid rgba(75,85,99,0.5)", color:"#f3f4f6", outline:"none", fontFamily:"inherit" }}
        onFocus={e => e.target.style.borderColor = "rgba(251,191,36,0.5)"}
        onBlur={e => e.target.style.borderColor = "rgba(75,85,99,0.5)"}
      />
    </div>
  );
}

/* ── Spell Form Modal ── */
function SpellFormModal({ spell, onSave, onClose, isEdit }) {
  const [f, setF] = useState({...spell});
  const [imgLoading, setImgLoading] = useState(false);
  const [imgError, setImgError] = useState("");
  const u = (k,v) => setF(p=>({...p,[k]:v}));

  const generateImage = async () => {
    if (!f.name) { setImgError("Bitte zuerst einen Namen eingeben."); return; }
    setImgLoading(true);
    setImgError("");
    const prompt = `Dark fantasy D&D spell art, ${f.name} spell (${f.school}), ${f.shortDesc || f.name}, magical atmosphere, dramatic lighting, spell card illustration style, dark background, highly detailed, cinematic`;
    try {
      const res = await fetch("/.netlify/functions/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unbekannter Fehler");
      u("imageUrl", data.imageData);
    } catch (err) {
      setImgError("Fehler: " + err.message);
    } finally {
      setImgLoading(false);
    }
  };

  return (
    <div style={{ position:"fixed", inset:0, zIndex:50, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }} onClick={onClose}>
      <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.75)", backdropFilter:"blur(8px)" }}/>
      <div onClick={e=>e.stopPropagation()} style={{ position:"relative", width:"100%", maxWidth:480, maxHeight:"85vh", overflowY:"auto", WebkitOverflowScrolling:"touch", borderRadius:20, padding:24, background:"linear-gradient(160deg, rgba(20,18,35,0.97), rgba(12,12,22,0.99))", border:"1px solid rgba(251,191,36,0.15)" }}>
        <h2 style={{ fontSize:20, fontWeight:700, color:"#fde68a", marginBottom:16 }}>{isEdit ? "Zauber bearbeiten" : "Neuer Zauber"}</h2>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <FormField label="Name" value={f.name} onChange={v=>u("name",v)}/>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <div>
              <label style={{ display:"block", fontSize:12, color:"#9ca3af", marginBottom:4 }}>Schule</label>
              <select value={f.school} onChange={e=>u("school",e.target.value)} style={{ width:"100%", padding:"10px 12px", borderRadius:8, fontSize:14, background:"rgba(17,24,39,0.6)", border:"1px solid rgba(75,85,99,0.5)", color:"#f3f4f6" }}>
                {["Bannmagie","Beschwörung","Erkennungsmagie","Hervorrufung","Illusion","Nekromantie","Transmutation","Verzauberung"].map(s=><option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <FormField label="Level" type="number" value={f.level} onChange={v=>u("level",parseInt(v)||0)}/>
          </div>
          <FormField label="Kurzbeschreibung" value={f.shortDesc} onChange={v=>u("shortDesc",v)}/>
          <div>
            <label style={{ display:"block", fontSize:12, color:"#9ca3af", marginBottom:4 }}>Vollständige Beschreibung</label>
            <textarea value={f.fullDesc} onChange={e=>u("fullDesc",e.target.value)} rows={4}
              style={{ width:"100%", padding:"10px 12px", borderRadius:8, fontSize:14, background:"rgba(17,24,39,0.6)", border:"1px solid rgba(75,85,99,0.5)", color:"#f3f4f6", resize:"none", fontFamily:"inherit" }}/>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <FormField label="Reichweite" value={f.range} onChange={v=>u("range",v)}/>
            <FormField label="Dauer" value={f.duration} onChange={v=>u("duration",v)}/>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <FormField label="Komponenten" value={f.components} onChange={v=>u("components",v)}/>
            <div>
              <label style={{ display:"block", fontSize:12, color:"#9ca3af", marginBottom:4 }}>Konzentration</label>
              <button onClick={()=>u("concentration",!f.concentration)} style={{ width:"100%", padding:"10px 12px", borderRadius:8, fontSize:14, fontWeight:600, cursor:"pointer", background:f.concentration?"rgba(127,29,29,0.3)":"rgba(17,24,39,0.6)", border:f.concentration?"1px solid rgba(185,28,28,0.5)":"1px solid rgba(75,85,99,0.5)", color:f.concentration?"#fca5a5":"#9ca3af" }}>{f.concentration?"Ja":"Nein"}</button>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
            <FormField label="Würfelformel" value={f.diceFormula} onChange={v=>u("diceFormula",v)} placeholder="z.B. 2W8 + CHA"/>
            <FormField label="Würfel-Notiz" value={f.diceNote} onChange={v=>u("diceNote",v)}/>
          </div>

          {/* ── Bild-Sektion ── */}
          <div>
            <label style={{ display:"block", fontSize:12, color:"#9ca3af", marginBottom:4 }}>Zauberbild</label>
            {f.imageUrl && (
              <div style={{ width:"100%", height:120, borderRadius:10, marginBottom:8, overflow:"hidden", background:"rgba(17,24,39,0.6)" }}>
                <img src={f.imageUrl} alt={f.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={()=>u("imageUrl","")}/>
              </div>
            )}
            <div style={{ display:"flex", gap:8 }}>
              <input type="text" value={f.imageUrl} placeholder="https://... oder per KI generieren →" onChange={e=>u("imageUrl",e.target.value)}
                style={{ flex:1, padding:"10px 12px", borderRadius:8, fontSize:13, background:"rgba(17,24,39,0.6)", border:"1px solid rgba(75,85,99,0.5)", color:"#f3f4f6", outline:"none", fontFamily:"inherit" }}
                onFocus={e=>e.target.style.borderColor="rgba(251,191,36,0.5)"}
                onBlur={e=>e.target.style.borderColor="rgba(75,85,99,0.5)"}
              />
              <button onClick={generateImage} disabled={imgLoading}
                style={{ padding:"10px 14px", borderRadius:8, fontSize:13, fontWeight:600, cursor:imgLoading?"not-allowed":"pointer", whiteSpace:"nowrap", background:imgLoading?"rgba(31,41,55,0.4)":"linear-gradient(135deg,rgba(168,85,247,0.25),rgba(124,58,237,0.15))", border:"1px solid rgba(168,85,247,0.4)", color:imgLoading?"#6b7280":"#c084fc", display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
                <SparkleIcon size={14} color={imgLoading?"#6b7280":"#c084fc"}/>
                {imgLoading ? "Generiere…" : "KI-Bild"}
              </button>
            </div>
            {imgError && <p style={{ marginTop:6, fontSize:12, color:"#f87171" }}>{imgError}</p>}
          </div>
        </div>
        <div style={{ display:"flex", gap:12, marginTop:20 }}>
          <button onClick={onClose} style={{ flex:1, padding:12, borderRadius:12, fontWeight:600, cursor:"pointer", background:"rgba(31,41,55,0.4)", border:"1px solid rgba(75,85,99,0.3)", color:"#9ca3af" }}>Abbrechen</button>
          <button onClick={()=>onSave(f)} style={{ flex:1, padding:12, borderRadius:12, fontWeight:600, cursor:"pointer", background:"linear-gradient(135deg, rgba(251,191,36,0.2), rgba(217,119,6,0.15))", border:"1px solid rgba(251,191,36,0.3)", color:"#fde68a", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><CheckIcon size={16} color="#fde68a"/> Speichern</button>
        </div>
      </div>
    </div>
  );
}

/* ── Special Edit Modal ── */
function SpecialEditModal({ special, onSave, onClose }) {
  const [f, setF] = useState({...special});
  const u = (k,v) => setF(p=>({...p,[k]:v}));
  return (
    <div style={{ position:"fixed", inset:0, zIndex:50, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }} onClick={onClose}>
      <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.75)", backdropFilter:"blur(8px)" }}/>
      <div onClick={e=>e.stopPropagation()} style={{ position:"relative", width:"100%", maxWidth:400, maxHeight:"85vh", overflowY:"auto", WebkitOverflowScrolling:"touch", borderRadius:20, padding:24, background:"linear-gradient(160deg, rgba(20,18,35,0.97), rgba(12,12,22,0.99))", border:"1px solid rgba(251,191,36,0.15)" }}>
        <h2 style={{ fontSize:20, fontWeight:700, color:"#fde68a", marginBottom:16 }}>Spezialzauber bearbeiten</h2>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <FormField label="Name" value={f.name} onChange={v=>u("name",v)}/>
          <FormField label="Untertitel" value={f.subtitle} onChange={v=>u("subtitle",v)}/>
          <div>
            <label style={{ display:"block", fontSize:12, color:"#9ca3af", marginBottom:4 }}>Beschreibung</label>
            <textarea value={f.desc||""} onChange={e=>u("desc",e.target.value)} rows={3}
              style={{ width:"100%", padding:"10px 12px", borderRadius:8, fontSize:13, background:"rgba(17,24,39,0.6)", border:"1px solid rgba(75,85,99,0.5)", color:"#f3f4f6", resize:"none", fontFamily:"inherit" }}/>
          </div>
          <FormField label="Anzahl Plätze" type="number" value={f.maxSlots} onChange={v=>u("maxSlots",Math.max(1,parseInt(v)||1))}/>
          <div>
            <label style={{ display:"block", fontSize:12, color:"#9ca3af", marginBottom:4 }}>Rast-Typ</label>
            <div style={{ display:"flex", gap:8 }}>
              {["short","long"].map(rt=>(
                <button key={rt} onClick={()=>u("restType",rt)} style={{ flex:1, padding:10, borderRadius:8, fontSize:13, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:6, background:f.restType===rt?(rt==="short"?"rgba(120,53,15,0.3)":"rgba(30,58,138,0.3)"):"rgba(17,24,39,0.6)", border:f.restType===rt?(rt==="short"?"1px solid rgba(180,83,9,0.5)":"1px solid rgba(59,130,246,0.5)"):"1px solid rgba(75,85,99,0.5)", color:f.restType===rt?(rt==="short"?"#fcd34d":"#93c5fd"):"#6b7280" }}>
                  {rt==="short"?<CoffeeIcon size={14}/>:<MoonIcon size={14}/>}
                  {rt==="short"?" Kurze Rast":" Lange Rast"}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label style={{ display:"block", fontSize:12, color:"#9ca3af", marginBottom:4 }}>Farbe</label>
            <div style={{ display:"flex", gap:8 }}>
              {["cyan","red","green","amber","purple"].map(c=>(
                <button key={c} onClick={()=>u("color",c)} style={{ width:40, height:40, borderRadius:8, cursor:"pointer", border:"none", outline:f.color===c?"2px solid white":"2px solid rgba(75,85,99,0.5)", outlineOffset:2, opacity:f.color===c?1:0.5, transition:"all 0.2s", background:`linear-gradient(135deg, ${c==="cyan"?"#22d3ee,#0891b2":c==="red"?"#fb7185,#e11d48":c==="green"?"#34d399,#059669":c==="amber"?"#fbbf24,#d97706":"#a78bfa,#7c3aed"})` }}/>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display:"flex", gap:12, marginTop:20 }}>
          <button onClick={onClose} style={{ flex:1, padding:12, borderRadius:12, fontWeight:600, cursor:"pointer", background:"rgba(31,41,55,0.4)", border:"1px solid rgba(75,85,99,0.3)", color:"#9ca3af" }}>Abbrechen</button>
          <button onClick={()=>onSave(f)} style={{ flex:1, padding:12, borderRadius:12, fontWeight:600, cursor:"pointer", background:"linear-gradient(135deg, rgba(251,191,36,0.2), rgba(217,119,6,0.15))", border:"1px solid rgba(251,191,36,0.3)", color:"#fde68a", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}><CheckIcon size={16} color="#fde68a"/> Speichern</button>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════ MAIN APP ══════════════════ */
export default function SpellManager() {
  const [stats, setStats] = useState({ str:14, dex:10, con:12, int:8, wis:10, cha:16, proficiencyBonus:2, spellAttackBonus:5, spellSaveDC:13, charismaModifier:3 });
  const [statsOpen, setStatsOpen] = useState(false);
  const [spells, setSpells] = useState(DEFAULT_SPELLS);
  const [selectedSpell, setSelectedSpell] = useState(null);
  const [editingSpell, setEditingSpell] = useState(null);
  const [showSpellForm, setShowSpellForm] = useState(false);
  const [paladinSlots, setPaladinSlots] = useState({ level1:[true,true,true] });
  const [warlockSlots, setWarlockSlots] = useState([true]);
  const [specials, setSpecials] = useState([
    { id:"s1", name:"Präziser Schlag", subtitle:"Ritter von Solamnia", desc:"Wenn du einen Angriff triffst, kannst du zusätzlich 1W8 Schaden verursachen. Du hast außerdem Vorteil auf Angriffswürfe.", maxSlots:2, slots:[true,true], restType:"long", color:"cyan" },
    { id:"s2", name:"Hexblade's Curse", subtitle:"Hexer", desc:"Bonusaktion: Ziel verfluchen. +Proficiency auf Schaden, Crits auf 19–20, bei Tod 4 HP zurück.", maxSlots:1, slots:[true], restType:"short", color:"red" },
    { id:"s3", name:"Handauflegen", subtitle:"Paladin", desc:"HP-Pool = Paladin-Stufe × 5. Berührung: HP heilen oder Krankheit/Gift heilen (5 Punkte).", maxSlots:5, slots:[true,true,true,true,true], restType:"long", color:"green" },
    { id:"s4", name:"Göttlicher Kanal", subtitle:"Schwur d. Vergeltung", desc:"Schwur der Feindschaft: Bonusaktion, Vorteil auf Angriffe gegen 1 Ziel (1 Min). — Feind bannen: Aktion, 1 Ziel verängstigt & Bewegung 0 (WIS-Rettung).", maxSlots:1, slots:[true], restType:"short", color:"amber" },
  ]);
  const [editingSpecial, setEditingSpecial] = useState(null);
  const [filterLevel, setFilterLevel] = useState("all");
  const [expandedSpecial, setExpandedSpecial] = useState(null);
  const [hp, setHp] = useState(47);
  const [maxHp, setMaxHp] = useState(47);

  const togglePSlot = (lv, i) => setPaladinSlots(p => { const k="level"+lv, a=[...p[k]]; a[i]=!a[i]; return {...p,[k]:a}; });
  const toggleWSlot = i => setWarlockSlots(p => { const a=[...p]; a[i]=!a[i]; return a; });
  const toggleSSlot = (sid,i) => setSpecials(p => p.map(s => s.id!==sid?s:{...s,slots:s.slots.map((v,j)=>j===i?!v:v)}));

  const shortRest = () => { setWarlockSlots(p=>p.map(()=>true)); setSpecials(p=>p.map(s=>s.restType==="short"?{...s,slots:s.slots.map(()=>true)}:s)); };
  const longRest = () => { setPaladinSlots({level1:[true,true,true]}); setWarlockSlots(p=>p.map(()=>true)); setSpecials(p=>p.map(s=>({...s,slots:s.slots.map(()=>true)}))); };

  const saveSpell = sp => {
    if (sp.id && spells.find(s=>s.id===sp.id)) setSpells(p=>p.map(s=>s.id===sp.id?sp:s));
    else setSpells(p=>[...p,{...sp,id:Date.now().toString()}]);
    setShowSpellForm(false); setEditingSpell(null);
  };
  const deleteSpell = id => { setSpells(p=>p.filter(s=>s.id!==id)); setSelectedSpell(null); };
  const saveSpecial = sp => { setSpecials(p=>p.map(s=>s.id!==sp.id?s:{...sp,slots:Array(sp.maxSlots).fill(true)})); setEditingSpecial(null); };

  const filtered = filterLevel==="all" ? spells : spells.filter(s=>s.level===parseInt(filterLevel));
  const empty = { id:"", name:"", school:"Hervorrufung", level:0, shortDesc:"", fullDesc:"", range:"", duration:"", components:"", concentration:false, diceFormula:"", diceNote:"", imageUrl:"", theme:"" };

  return (
    <div style={{ minHeight:"100vh", color:"#f3f4f6", position:"relative", background:"linear-gradient(160deg, #0a0a12, #12101f 30%, #0d1117 60%, #0a0a12)", fontFamily:"'Segoe UI', system-ui, sans-serif", overflowY:"auto", WebkitOverflowScrolling:"touch" }}>
      <style>{`
        @keyframes pulse{0%,100%{opacity:.4}50%{opacity:.8}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .chov:hover{transform:scale(1.02)}.chov{transition:transform .3s}
        *{box-sizing:border-box;margin:0}
        html,body{overflow:auto;height:100%;-webkit-overflow-scrolling:touch}
        ::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(251,191,36,.2);border-radius:3px}
      `}</style>

      {/* BG glow */}
      <div style={{ position:"fixed", inset:0, pointerEvents:"none", overflow:"hidden" }}>
        <div style={{ position:"absolute", width:380, height:380, borderRadius:"50%", opacity:.08, filter:"blur(60px)", background:"radial-gradient(circle,#d4a024,transparent 70%)", top:-100, right:-100 }}/>
        <div style={{ position:"absolute", width:280, height:280, borderRadius:"50%", opacity:.06, filter:"blur(60px)", background:"radial-gradient(circle,#7c3aed,transparent 70%)", bottom:"10%", left:-80 }}/>
      </div>

      <div style={{ position:"relative", zIndex:10, maxWidth:960, margin:"0 auto", padding:"0 16px 180px" }}>

        {/* ═══ HEADER ═══ */}
        <header style={{ paddingTop:24, paddingBottom:16, textAlign:"center" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:4 }}>
            <SparkleIcon size={26} color="#fbbf24"/>
            <h1 style={{ fontSize:30, fontWeight:800, letterSpacing:4, background:"linear-gradient(135deg,#fbbf24,#f59e0b 40%,#d97706)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>GRIMOIRE</h1>
            <SparkleIcon size={26} color="#fbbf24"/>
          </div>
          <p style={{ color:"#6b7280", fontSize:13, letterSpacing:3, textTransform:"uppercase" }}>Hexer 1 · Paladin 3 — Zauber-Manager</p>
        </header>

        {/* ═══ STATS ═══ */}
        <section style={{ marginBottom:24 }}>
          <button onClick={()=>setStatsOpen(!statsOpen)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 20px", borderRadius:12, cursor:"pointer", background:"rgba(251,191,36,0.06)", border:"1px solid rgba(251,191,36,0.15)", color:"inherit" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <ShieldIcon size={20} color="#fbbf24"/>
              <span style={{ fontWeight:600, color:"#fde68a", letterSpacing:1 }}>Charakter-Werte</span>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <span style={{ fontSize:12, color:"#9ca3af" }}>CHA {stats.cha} · SC {stats.spellSaveDC} · +{stats.spellAttackBonus}</span>
              {statsOpen ? <ChevronUpIcon size={20} color="#fbbf24"/> : <ChevronDownIcon size={20} color="#fbbf24"/>}
            </div>
          </button>
          {statsOpen && (
            <div style={{ marginTop:8, padding:20, borderRadius:16, background:"rgba(15,15,30,0.7)", border:"1px solid rgba(251,191,36,0.1)", backdropFilter:"blur(16px)", animation:"fadeIn .3s" }}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:12, marginBottom:16 }}>
                {["str","dex","con","int","wis","cha"].map(a=>(
                  <div key={a} style={{ textAlign:"center" }}>
                    <label style={{ display:"block", fontSize:11, textTransform:"uppercase", letterSpacing:2, color:"rgba(251,191,36,0.6)", marginBottom:4 }}>{a}</label>
                    <input type="number" value={stats[a]} onChange={e=>setStats(p=>({...p,[a]:parseInt(e.target.value)||0}))}
                      style={{ width:"100%", textAlign:"center", fontSize:18, fontWeight:700, padding:"8px 4px", borderRadius:8, background:"rgba(17,24,39,0.6)", border:"1px solid rgba(75,85,99,0.5)", color:"#f3f4f6", outline:"none" }}/>
                    <span style={{ fontSize:11, color:"#6b7280", marginTop:4, display:"block" }}>{"Mod: "+(Math.floor((stats[a]-10)/2)>=0?"+":"")+Math.floor((stats[a]-10)/2)}</span>
                  </div>
                ))}
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
                {[{k:"proficiencyBonus",l:"Übungsbonus",p:"+"},{k:"spellAttackBonus",l:"Zauberangriff",p:"+"},{k:"spellSaveDC",l:"Zauber-SC",p:""},{k:"charismaModifier",l:"CHA Mod",p:"+"}].map(({k,l,p})=>(
                  <div key={k}>
                    <label style={{ display:"block", fontSize:11, color:"#9ca3af", marginBottom:4 }}>{l}</label>
                    <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                      {p&&<span style={{ color:"#fbbf24", fontWeight:700 }}>{p}</span>}
                      <input type="number" value={stats[k]} onChange={e=>setStats(pr=>({...pr,[k]:parseInt(e.target.value)||0}))}
                        style={{ width:"100%", textAlign:"center", fontSize:18, fontWeight:700, padding:"8px 4px", borderRadius:8, background:"rgba(17,24,39,0.6)", border:"1px solid rgba(75,85,99,0.5)", color:"#f3f4f6", outline:"none" }}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ═══ ALL SLOTS (Zauberplätze + Spezialzauber) ═══ */}
        <section style={{ marginBottom:24 }}>
          <div style={{ padding:20, borderRadius:16, background:"rgba(15,15,30,0.5)", border:"1px solid rgba(251,191,36,0.08)", backdropFilter:"blur(16px)" }}>
            <h2 style={{ display:"flex", alignItems:"center", gap:8, color:"#fcd34d", fontWeight:600, marginBottom:16, fontSize:16, letterSpacing:1 }}>
              <StarIcon size={18} color="#fcd34d"/> Zauberplätze & Fähigkeiten
            </h2>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {/* Paladin & Warlock Spell Slots + HP Box nebeneinander */}
              <div style={{ display:"flex", gap:16, alignItems:"center" }}>
                <div style={{ flex:1, display:"flex", flexDirection:"column", gap:14 }}>
                  {[{label:"Paladin Level 1",slots:paladinSlots.level1,toggle:(i)=>togglePSlot(1,i),color:"amber"},
                    {label:"Hexer Pact L1",slots:warlockSlots,toggle:toggleWSlot,color:"purple",note:"(kurze Rast)"}
                  ].map(({label,slots,toggle,color,note})=>(
                    <div key={label} style={{ display:"flex", alignItems:"center", gap:16, flexWrap:"wrap" }}>
                      <span style={{ fontSize:14, color:"#d1d5db", width:200, flexShrink:0 }}>
                        <span style={{ color:color==="purple"?"#c084fc":"#fbbf24", fontWeight:700 }}>{label.split(" ")[0]}</span>
                        {" "+label.split(" ").slice(1).join(" ")}
                        {note && <span style={{ fontSize:11, color:"rgba(168,85,247,0.5)", marginLeft:4 }}>{note}</span>}
                      </span>
                      <div style={{ display:"flex", gap:12 }}>
                        {slots.map((a,i)=><SlotGem key={i} active={a} onClick={()=>toggle(i)} color={color}/>)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── HP Box ── */}
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:5, padding:"12px 22px", borderRadius:14, background:"rgba(52,211,153,0.07)", border:"1px solid rgba(52,211,153,0.25)", flexShrink:0 }}>
                  <span style={{ fontSize:10, textTransform:"uppercase", letterSpacing:2, color:"rgba(52,211,153,0.8)", fontWeight:700 }}>HP</span>
                  <button onClick={()=>setHp(p=>Math.min(p+1,maxHp))} style={{ width:44, height:36, borderRadius:8, border:"1px solid rgba(52,211,153,0.3)", background:"rgba(52,211,153,0.1)", color:"#6ee7b7", fontSize:18, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>▲</button>
                  <div style={{ textAlign:"center" }}>
                    <div style={{ fontSize:40, fontWeight:900, color: hp<=Math.floor(maxHp*0.25)?"#f87171":hp<=Math.floor(maxHp*0.5)?"#fbbf24":"#d1fae5", lineHeight:1 }}>{hp}</div>
                    <div style={{ fontSize:10, color:"rgba(52,211,153,0.45)", marginTop:2 }}>/ <span style={{ cursor:"pointer", textDecoration:"underline dotted" }} onClick={()=>{ const v=parseInt(window.prompt("Max HP:",maxHp)); if(!isNaN(v)&&v>0){setMaxHp(v);} }}>{maxHp}</span></div>
                  </div>
                  <button onClick={()=>setHp(p=>Math.max(p-1,0))} style={{ width:44, height:36, borderRadius:8, border:"1px solid rgba(52,211,153,0.3)", background:"rgba(52,211,153,0.1)", color:"#6ee7b7", fontSize:18, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center" }}>▼</button>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height:1, background:"rgba(251,191,36,0.08)", margin:"4px 0" }}/>

              {/* Special Abilities as slot rows */}
              {specials.map(sp=>{
                const isOpen = expandedSpecial === sp.id;
                const colorMap = {cyan:"#22d3ee",red:"#fb7185",green:"#34d399",amber:"#fbbf24",purple:"#c084fc"};
                const accent = colorMap[sp.color]||"#fbbf24";
                return (
                  <div key={sp.id}>
                    <div style={{ display:"flex", alignItems:"center", gap:12, flexWrap:"wrap" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8, width:200, flexShrink:0 }}>
                        <span style={{ fontSize:14, color:"#d1d5db" }}>
                          <span style={{ color:accent, fontWeight:700 }}>{sp.name}</span>
                        </span>
                        {/* Info button */}
                        {sp.desc && <button onClick={()=>setExpandedSpecial(isOpen?null:sp.id)} style={{ padding:6, borderRadius:8, background:isOpen?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.05)", border:"1px solid "+(isOpen?"rgba(255,255,255,0.2)":"transparent"), cursor:"pointer", transition:"all 0.2s", display:"flex", alignItems:"center" }}>
                          <InfoIcon size={16} color={accent}/>
                        </button>}
                        {/* Edit button */}
                        <button onClick={()=>setEditingSpecial(sp)} style={{ padding:6, borderRadius:8, background:"rgba(255,255,255,0.05)", border:"none", cursor:"pointer", opacity:0.5, transition:"all 0.2s", display:"flex", alignItems:"center" }}>
                          <EditIcon size={14} color="#9ca3af"/>
                        </button>
                      </div>
                      <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                        {sp.slots.map((a,i)=><SlotGem key={i} active={a} onClick={()=>toggleSSlot(sp.id,i)} size={40} color={sp.color}/>)}
                      </div>
                      <span style={{ display:"inline-flex", alignItems:"center", gap:4, fontSize:10, padding:"2px 7px", borderRadius:10, background:sp.restType==="short"?"rgba(120,53,15,0.3)":"rgba(30,58,138,0.3)", color:sp.restType==="short"?"#fcd34d":"#93c5fd", marginLeft:4 }}>
                        {sp.restType==="short"?<CoffeeIcon size={9}/>:<MoonIcon size={9}/>}
                        {sp.restType==="short"?" Kurz":" Lang"}
                      </span>
                    </div>
                    {/* Expandable description */}
                    {isOpen && sp.desc && (
                      <div style={{ marginTop:8, marginLeft:4, padding:"10px 14px", borderRadius:10, fontSize:12, color:"#bcc3cf", lineHeight:1.6, background:"rgba(255,255,255,0.03)", border:`1px solid rgba(255,255,255,0.05)`, borderLeft:`3px solid ${accent}`, animation:"fadeIn .2s" }}>
                        {sp.desc}
                        <button onClick={()=>setExpandedSpecial(null)} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:4, marginTop:10, width:"100%", padding:8, borderRadius:8, fontSize:12, fontWeight:600, cursor:"pointer", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", color:"#9ca3af" }}>
                          <XIcon size={12} color="#9ca3af"/> Schließen
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ SPELL LIBRARY ═══ */}
        <section style={{ marginBottom:24 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16, flexWrap:"wrap", gap:8 }}>
            <h2 style={{ display:"flex", alignItems:"center", gap:8, color:"#fcd34d", fontWeight:600, fontSize:16, letterSpacing:1 }}>
              <BookIcon size={18} color="#fcd34d"/> Zauber-Bibliothek
            </h2>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ display:"flex", gap:4 }}>
                {["all","0","1","2"].map(l=>(
                  <button key={l} onClick={()=>setFilterLevel(l)} style={{ padding:"6px 12px", fontSize:12, fontWeight:600, borderRadius:8, cursor:"pointer", background:filterLevel===l?"rgba(251,191,36,0.2)":"rgba(31,41,55,0.4)", border:filterLevel===l?"1px solid rgba(251,191,36,0.3)":"1px solid rgba(75,85,99,0.3)", color:filterLevel===l?"#fcd34d":"#6b7280" }}>
                    {l==="all"?"Alle":l==="0"?"Cantrip":"Lvl "+l}
                  </button>
                ))}
              </div>
              <button onClick={()=>{setEditingSpell({...empty});setShowSpellForm(true);}} style={{ display:"flex", alignItems:"center", gap:4, padding:"6px 12px", fontSize:12, fontWeight:600, borderRadius:8, cursor:"pointer", background:"rgba(251,191,36,0.2)", border:"1px solid rgba(251,191,36,0.3)", color:"#fcd34d" }}>
                <PlusIcon size={14} color="#fcd34d"/> Neu
              </button>
            </div>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:16 }}>
            {filtered.map(sp=>{
              const lc = sp.level===0?"107,114,128":sp.level===1?"251,191,36":"168,85,247";
              const dv = evaluateDice(sp.diceFormula, stats);
              return (
                <button key={sp.id} onClick={()=>setSelectedSpell(sp)} className="chov"
                  style={{ textAlign:"left", borderRadius:16, overflow:"hidden", cursor:"pointer", background:"rgba(15,15,30,0.5)", border:"1px solid rgba(251,191,36,0.08)", padding:0, color:"inherit" }}>
                  <div style={{ height:120, width:"100%", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", background:sp.imageUrl?`url(${sp.imageUrl}) center/cover`:sp.theme||`linear-gradient(135deg, rgba(${lc},0.15), rgba(10,10,18,0.8))` }}>
                    {!sp.imageUrl && !sp.theme && <SparkleIcon size={36} color="rgba(107,114,128,0.3)"/>}
                    <div style={{ position:"absolute", top:8, right:8, display:"flex", gap:4 }}>
                      <span style={{ padding:"2px 8px", borderRadius:12, fontSize:11, fontWeight:700, background:sp.level===0?"rgba(75,85,99,0.8)":sp.level===1?"rgba(120,53,15,0.8)":"rgba(88,28,135,0.8)", color:sp.level===0?"#d1d5db":sp.level===1?"#fcd34d":"#d8b4fe" }}>
                        {sp.level===0?"Cantrip":"Lvl "+sp.level}
                      </span>
                      {sp.concentration && <span style={{ padding:"2px 8px", borderRadius:12, fontSize:11, fontWeight:700, background:"rgba(127,29,29,0.7)", color:"#fca5a5" }}>K</span>}
                    </div>
                  </div>
                  <div style={{ padding:16 }}>
                    <h3 style={{ fontWeight:700, color:"#f3f4f6", fontSize:16, marginBottom:2 }}>{sp.name}</h3>
                    <p style={{ fontSize:11, color:"rgba(245,158,11,0.5)", textTransform:"uppercase", letterSpacing:2, marginBottom:8 }}>{sp.school}</p>
                    <p style={{ fontSize:13, color:"#9ca3af", lineHeight:1.5, display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden" }}>{sp.shortDesc}</p>
                    {dv && <div style={{ marginTop:12, display:"flex", alignItems:"center", gap:8 }}>
                      <ZapIcon size={14} color="#fbbf24"/><span style={{ fontSize:12, fontWeight:700, color:"#fcd34d" }}>{dv}</span><span style={{ fontSize:11, color:"#6b7280" }}>{sp.diceNote}</span>
                    </div>}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* ═══ REST BUTTONS ═══ */}
      <div style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:40 }}>
        <div style={{ maxWidth:960, margin:"0 auto", padding:"16px 16px 20px", display:"flex", gap:12, background:"linear-gradient(to top, rgba(10,10,18,0.98) 60%, transparent)" }}>
          <button onClick={shortRest} className="chov" style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:16, borderRadius:12, fontWeight:700, fontSize:16, cursor:"pointer", background:"linear-gradient(135deg, rgba(251,191,36,0.12), rgba(217,119,6,0.08))", border:"1px solid rgba(251,191,36,0.25)", color:"#fde68a" }}>
            <CoffeeIcon size={22} color="#fbbf24"/> Kurze Rast
          </button>
          <button onClick={longRest} className="chov" style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:16, borderRadius:12, fontWeight:700, fontSize:16, cursor:"pointer", background:"linear-gradient(135deg, rgba(59,130,246,0.12), rgba(37,99,235,0.08))", border:"1px solid rgba(59,130,246,0.25)", color:"#bfdbfe" }}>
            <MoonIcon size={22} color="#60a5fa"/> Lange Rast
          </button>
        </div>
      </div>

      {/* ═══ DETAIL MODAL ═══ */}
      {selectedSpell && (
        <div style={{ position:"fixed", inset:0, zIndex:50, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }} onClick={()=>setSelectedSpell(null)}>
          <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.75)", backdropFilter:"blur(8px)" }}/>
          <div onClick={e=>e.stopPropagation()} style={{ position:"relative", width:"100%", maxWidth:480, maxHeight:"85vh", overflowY:"auto", WebkitOverflowScrolling:"touch", borderRadius:20, padding:24, animation:"fadeIn .3s", background:"linear-gradient(160deg, rgba(20,18,35,0.97), rgba(12,12,22,0.99))", border:"1px solid rgba(251,191,36,0.15)", boxShadow:"0 0 60px rgba(251,191,36,0.08)" }}>
            {/* Top close button - large touch target */}
            <button onClick={()=>setSelectedSpell(null)} style={{ position:"absolute", top:12, right:12, padding:"8px 14px", borderRadius:10, background:"rgba(31,41,55,0.8)", border:"1px solid rgba(75,85,99,0.4)", cursor:"pointer", display:"flex", alignItems:"center", gap:6, zIndex:2 }}>
              <XIcon size={16} color="#d1d5db"/>
              <span style={{ fontSize:13, fontWeight:600, color:"#d1d5db" }}>Zurück</span>
            </button>

            {(selectedSpell.imageUrl || selectedSpell.theme) && <div style={{ width:"100%", height:160, borderRadius:12, marginBottom:16, background:selectedSpell.imageUrl?`url(${selectedSpell.imageUrl}) center/cover`:selectedSpell.theme }}/>}

            <div style={{ display:"flex", alignItems:"flex-start", gap:12, marginBottom:16, marginTop: (selectedSpell.imageUrl||selectedSpell.theme) ? 0 : 36 }}>
              <div style={{ flex:1 }}>
                <h2 style={{ fontSize:24, fontWeight:700, color:"#fde68a" }}>{selectedSpell.name}</h2>
                <p style={{ fontSize:13, color:"rgba(245,158,11,0.5)", textTransform:"uppercase", letterSpacing:2, marginTop:4 }}>{selectedSpell.school+" · "+(selectedSpell.level===0?"Cantrip":"Level "+selectedSpell.level)}</p>
              </div>
              <div style={{ display:"flex", gap:8 }}>
                <button onClick={()=>{setEditingSpell({...selectedSpell});setShowSpellForm(true);setSelectedSpell(null);}} style={{ padding:10, borderRadius:8, background:"rgba(120,53,15,0.3)", border:"none", cursor:"pointer" }}><EditIcon size={18} color="#fbbf24"/></button>
                <button onClick={()=>deleteSpell(selectedSpell.id)} style={{ padding:10, borderRadius:8, background:"rgba(127,29,29,0.3)", border:"none", cursor:"pointer" }}><TrashIcon size={18} color="#f87171"/></button>
              </div>
            </div>

            {(()=>{const dv=evaluateDice(selectedSpell.diceFormula,stats); if(!dv) return null; return (
              <div style={{ marginBottom:16, padding:16, borderRadius:12, textAlign:"center", background:"linear-gradient(135deg, rgba(251,191,36,0.1), rgba(217,119,6,0.06))", border:"1px solid rgba(251,191,36,0.2)" }}>
                <p style={{ fontSize:11, color:"rgba(251,191,36,0.5)", textTransform:"uppercase", letterSpacing:3, marginBottom:4 }}>Würfel</p>
                <p style={{ fontSize:32, fontWeight:900, color:"#fcd34d", marginBottom:4 }}>{dv}</p>
                <p style={{ fontSize:13, color:"#9ca3af" }}>{selectedSpell.diceNote}</p>
              </div>
            );})()}

            <p style={{ color:"#d1d5db", lineHeight:1.7, marginBottom:16, fontSize:14 }}>{selectedSpell.fullDesc}</p>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:16 }}>
              {[{i:<MapPinIcon size={14} color="#6b7280"/>,l:"Reichweite",v:selectedSpell.range},{i:<ClockIcon size={14} color="#6b7280"/>,l:"Dauer",v:selectedSpell.duration},{i:<LayersIcon size={14} color="#6b7280"/>,l:"Komponenten",v:selectedSpell.components},{i:<AlertIcon size={14} color="#6b7280"/>,l:"Konzentration",v:selectedSpell.concentration?"Ja":"Nein"}].map(({i,l,v})=>(
                <div key={l} style={{ padding:12, borderRadius:8, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:2 }}>{i}<span style={{ fontSize:11, color:"#6b7280" }}>{l}</span></div>
                  <span style={{ color:"#e5e7eb", fontWeight:500, fontSize:14 }}>{v||"—"}</span>
                </div>
              ))}
            </div>

            {/* Bottom close button - big touch target */}
            <button onClick={()=>setSelectedSpell(null)} style={{ width:"100%", padding:14, borderRadius:12, fontWeight:600, fontSize:15, cursor:"pointer", background:"rgba(31,41,55,0.5)", border:"1px solid rgba(75,85,99,0.3)", color:"#d1d5db", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
              <XIcon size={16} color="#d1d5db"/> Schließen
            </button>
          </div>
        </div>
      )}

      {showSpellForm && editingSpell && <SpellFormModal spell={editingSpell} isEdit={!!spells.find(s=>s.id===editingSpell.id)} onSave={saveSpell} onClose={()=>{setShowSpellForm(false);setEditingSpell(null);}}/>}
      {editingSpecial && <SpecialEditModal special={editingSpecial} onSave={saveSpecial} onClose={()=>setEditingSpecial(null)}/>}
    </div>
  );
}
