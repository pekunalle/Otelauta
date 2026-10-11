import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as ChevronDown, i as ChevronUp, n as Search, o as Check, r as Play } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as SelectItem$1, c as SelectLabel$1, d as SelectScrollUpButton, f as SelectTrigger$1, i as SelectIcon, l as SelectPortal, m as SelectViewport, n as SelectContent$1, o as SelectItemIndicator, p as SelectValue$1, r as SelectGroup$1, s as SelectItemText, t as Select$1, u as SelectScrollDownButton } from "../_libs/@radix-ui/react-select+[...].mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CTg2NeSw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AppHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-medium uppercase tracking-[0.22em] text-subtle",
			children: "Metallikitara"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
			children: "OTELAUTA"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-sm text-sm text-muted",
			children: "Valitse vire, juurisävel ja kuvio. Otelaudalla näkyvät kuvioon kuuluvat nuotit — juuri merkitty erikseen."
		})]
	});
}
var NOTE_NAMES = [
	"C",
	"C#",
	"D",
	"Eb",
	"E",
	"F",
	"F#",
	"G",
	"Ab",
	"A",
	"Bb",
	"B"
];
var NOTE_INDEX = {
	C: 0,
	"C#": 1,
	D: 2,
	Eb: 3,
	E: 4,
	F: 5,
	"F#": 6,
	G: 7,
	Ab: 8,
	A: 9,
	Bb: 10,
	B: 11
};
var SEMITONE_INTERVAL_SHORT = [
	"1",
	"m2",
	"M2",
	"m3",
	"M3",
	"P4",
	"TT",
	"P5",
	"m6",
	"M6",
	"m7",
	"M7"
];
var SEMITONE_DEGREE = [
	"1",
	"b2",
	"2",
	"b3",
	"3",
	"4",
	"b5",
	"5",
	"b6",
	"6",
	"b7",
	"7"
];
var SEMITONE_INTERVAL_FI = [
	"priimi",
	"pieni sekunti",
	"suuri sekunti",
	"pieni terssi",
	"suuri terssi",
	"kvartti",
	"tritoni",
	"kvintti",
	"pieni seksti",
	"suuri seksti",
	"pieni septimi",
	"suuri septimi"
];
function pitchClass(midi) {
	return (midi % 12 + 12) % 12;
}
function midiToNote(midi) {
	return NOTE_NAMES[pitchClass(midi)];
}
function midiToFreq(midi) {
	return 440 * 2 ** ((midi - 69) / 12);
}
function noteToPc(note) {
	return NOTE_INDEX[note];
}
function intervalFromRoot(root, midi) {
	return (pitchClass(midi) - noteToPc(root) + 12) % 12;
}
function fretWidths(fretCount) {
	const widths = [2.7];
	let w = 3.9;
	for (let i = 1; i <= fretCount; i++) {
		widths.push(Math.max(2.7, w));
		w *= .97;
	}
	return widths;
}
var INLAY_FRETS = /* @__PURE__ */ new Set([
	3,
	5,
	7,
	9,
	12,
	15,
	17,
	19,
	21,
	24
]);
var DOUBLE_INLAY_FRETS = /* @__PURE__ */ new Set([12, 24]);
var CATEGORIES = [
	{
		id: "scale",
		label: "Skaalat"
	},
	{
		id: "mode",
		label: "Moodit"
	},
	{
		id: "arpeggio",
		label: "Arpeggiot"
	},
	{
		id: "riff",
		label: "Riffit ja juoksutukset"
	}
];
var PATTERNS = [
	{
		id: "nat-minor",
		name: "Luonnollinen molli",
		category: "scale",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			8,
			10
		],
		degrees: "1 2 b3 4 5 b6 b7",
		blurb: "Metallin perusskaala. Tumma, avoin ja laaja — riffien ja laulumelodioiden selkäranka.",
		usedBy: "Metallica, Iron Maiden, Gojira, lähes kaikki heavy"
	},
	{
		id: "harm-minor",
		name: "Harmoninen molli",
		category: "scale",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			8,
			11
		],
		degrees: "1 2 b3 4 5 b6 7",
		blurb: "Korotettu septimi tekee itämaisen, dramaattisen jännitteen. Neoklassisen metallin ydin.",
		usedBy: "Yngwie, Children of Bodom, Symphony X, Behemoth"
	},
	{
		id: "mel-minor",
		name: "Melodinen molli",
		category: "scale",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			9,
			11
		],
		degrees: "1 2 b3 4 5 6 7",
		blurb: "Jazzvaikutteinen molli ilman pientä sekstiä. Progressiivisen ja teknisen deathin työkalu.",
		usedBy: "Opeth, Animals as Leaders, tekninen death metal"
	},
	{
		id: "min-pent",
		name: "Mollipentatoninen",
		category: "scale",
		intervals: [
			0,
			3,
			5,
			7,
			10
		],
		degrees: "1 b3 4 5 b7",
		blurb: "Viisi säveltä, maksimaalinen groove. Riffien, soolojen ja pentaboksien perusta.",
		usedBy: "Pantera, Metallica, Black Label Society, groove metal"
	},
	{
		id: "blues",
		name: "Blues-skaala",
		category: "scale",
		intervals: [
			0,
			3,
			5,
			6,
			7,
			10
		],
		degrees: "1 b3 4 b5 5 b7",
		blurb: "Pentatoninen plus sininen nuotti (b5). Lisää säröä ja kiertelyä sooloihin.",
		usedBy: "Zakk Wylde, Clutch, stoner ja southern metal"
	},
	{
		id: "maj-pent",
		name: "Duuripentatoninen",
		category: "scale",
		intervals: [
			0,
			2,
			4,
			7,
			9
		],
		degrees: "1 2 3 5 6",
		blurb: "Avoin ja laulava. Power metalin kertosäkeissä ja kirkkaissa teemoissa.",
		usedBy: "Power metal, Helloween, joskus Maiden-teemat"
	},
	{
		id: "hungarian",
		name: "Unkarilainen molli",
		category: "scale",
		intervals: [
			0,
			2,
			3,
			6,
			7,
			8,
			11
		],
		degrees: "1 2 b3 #4 5 b6 7",
		blurb: "Harmoninen molli korotetulla kvartilla. Mustan metallin ja itämaisen riffin väri.",
		usedBy: "Dimmu Borgir, Cradle of Filth, folk/black metal"
	},
	{
		id: "double-harm",
		name: "Kaksoisharmoninen",
		category: "scale",
		intervals: [
			0,
			1,
			4,
			5,
			7,
			8,
			11
		],
		degrees: "1 b2 3 4 5 b6 7",
		blurb: "Bysanttilainen skaala: kaksi 1½-askelta. Vahva itämainen, seremoniallinen sointi.",
		usedBy: "Nile, Melechesh, orientoitunut extreme metal"
	},
	{
		id: "whole-tone",
		name: "Kokosävelskaala",
		category: "scale",
		intervals: [
			0,
			2,
			4,
			6,
			8,
			10
		],
		degrees: "1 2 3 b5 b6 b7",
		blurb: "Kuusi tasaista askelta, ei toonikaa. Unenomainen, epävakaa — efektisooloihin.",
		usedBy: "Progressiivinen metalli, kokeelliset leadit"
	},
	{
		id: "dim-wh",
		name: "Vähennetty (W–H)",
		category: "scale",
		intervals: [
			0,
			2,
			3,
			5,
			6,
			8,
			9,
			11
		],
		degrees: "1 2 b3 4 b5 b6 6 7",
		blurb: "Oktoninen skaala kokonainen–puoli. Diminished-juoksutukset ja kauhujännite.",
		usedBy: "Death, tekninen death, neoclassical sweeps"
	},
	{
		id: "dim-hw",
		name: "Vähennetty (H–W)",
		category: "scale",
		intervals: [
			0,
			1,
			3,
			4,
			6,
			7,
			9,
			10
		],
		degrees: "1 b2 b3 3 b5 5 6 b7",
		blurb: "Puoli–kokonainen diminished. Dominanttien ja kromaattisten riffien päällä.",
		usedBy: "Shred, fusion-metal, synkät täytöt"
	},
	{
		id: "chromatic",
		name: "Kromaattinen",
		category: "scale",
		intervals: [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11
		],
		degrees: "1 b2 2 b3 3 4 b5 5 b6 6 b7 7",
		blurb: "Kaikki 12 puolisäveltä. Deathin, grindin ja djentin kaaosjuoksutukset.",
		usedBy: "Cannibal Corpse, Meshuggah, Cryptopsy"
	},
	{
		id: "neapolitan",
		name: "Napolilainen molli",
		category: "scale",
		intervals: [
			0,
			1,
			3,
			5,
			7,
			8,
			11
		],
		degrees: "1 b2 b3 4 5 b6 7",
		blurb: "Fryyginen runko plus korotettu septimi. Tumma ja klassinen.",
		usedBy: "Sinfoninen black, neoklassinen metalli"
	},
	{
		id: "persian",
		name: "Persialainen skaala",
		category: "scale",
		intervals: [
			0,
			1,
			4,
			5,
			6,
			8,
			11
		],
		degrees: "1 b2 3 4 b5 b6 7",
		blurb: "Vahvat puolisävelparit. Lähi-idän väri extreme-metallissa.",
		usedBy: "Nile, Orphaned Land, oriental metal"
	},
	{
		id: "hirajoshi",
		name: "Hirajoshi",
		category: "scale",
		intervals: [
			0,
			2,
			3,
			7,
			8
		],
		degrees: "1 2 b3 5 b6",
		blurb: "Japanilainen pentatoninen. Avointa, kylmää tilaa — blackin ja post-metallin teemoissa.",
		usedBy: "Black metal, post-metal, ambient riffit"
	},
	{
		id: "iwato",
		name: "Iwato",
		category: "scale",
		intervals: [
			0,
			1,
			5,
			6,
			10
		],
		degrees: "1 b2 4 b5 b7",
		blurb: "Kireä japanilainen pentatoninen. Tritoni sisäänrakennettuna.",
		usedBy: "Kokeellinen black, dissonantti riffittely"
	},
	{
		id: "harmonic-maj",
		name: "Harmoninen duuri",
		category: "scale",
		intervals: [
			0,
			2,
			4,
			5,
			7,
			8,
			11
		],
		degrees: "1 2 3 4 5 b6 7",
		blurb: "Duuri pienellä sekstillä. Makea mutta vinoutunut — modernin prog-metallin väri.",
		usedBy: "Progressiivinen metalli, sinfoniset teemat"
	},
	{
		id: "altered",
		name: "Alteroitu skaala",
		category: "scale",
		intervals: [
			0,
			1,
			3,
			4,
			6,
			8,
			10
		],
		degrees: "1 b2 b3 3 b5 b6 b7",
		blurb: "Melodisen mollin 7. moodi (superlokrian). Täysin alteroitu dominantti.",
		usedBy: "Tech death, fusion-shred, jännitteiset soolot"
	},
	{
		id: "lyd-dom",
		name: "Lyydinen dominantti",
		category: "scale",
		intervals: [
			0,
			2,
			4,
			6,
			7,
			9,
			10
		],
		degrees: "1 2 3 #4 5 6 b7",
		blurb: "Duuri korotetulla kvartilla ja pienellä septimillä. Avoin, vinossa oleva groove.",
		usedBy: "Prog, djent, moderni fusion-metal"
	},
	{
		id: "ukr-dorian",
		name: "Ukrainalainen doorinen",
		category: "scale",
		intervals: [
			0,
			2,
			3,
			6,
			7,
			9,
			10
		],
		degrees: "1 2 b3 #4 5 6 b7",
		blurb: "Doorinen korotetulla kvartilla. Folk-metallin itäinen sävy.",
		usedBy: "Folk metal, Eluveitie-tyyliset teemat"
	},
	{
		id: "mixo-b6",
		name: "Miksolyydinen b6",
		category: "scale",
		intervals: [
			0,
			2,
			4,
			5,
			7,
			8,
			10
		],
		degrees: "1 2 3 4 5 b6 b7",
		blurb: "Hindu-skaala. Duurin kirkkaus plus mollin seksti — dramaattiset kertosäkeet.",
		usedBy: "Sinfoninen metalli, progressiiviset teemat"
	},
	{
		id: "augmented",
		name: "Ylinouseva skaala",
		category: "scale",
		intervals: [
			0,
			3,
			4,
			7,
			8,
			11
		],
		degrees: "1 b3 3 5 b6 7",
		blurb: "Symmetrinen, leijuva. Harvinainen mutta tehokas kauhuteema.",
		usedBy: "Avantgarde, kokeellinen extreme"
	},
	{
		id: "tritone-sc",
		name: "Tritonisikaala",
		category: "scale",
		intervals: [
			0,
			1,
			4,
			6,
			7,
			10
		],
		degrees: "1 b2 3 b5 5 b7",
		blurb: "Kaksi pientä tetrakordia tritonin päässä. Diabolinen ja tiivis.",
		usedBy: "Blackened death, dissonantti riffittely"
	},
	{
		id: "major",
		name: "Duuri (ioninen)",
		category: "scale",
		intervals: [
			0,
			2,
			4,
			5,
			7,
			9,
			11
		],
		degrees: "1 2 3 4 5 6 7",
		blurb: "Kirkas toonika. Power metalin hymnit ja triumfaaliset teemat.",
		usedBy: "Helloween, DragonForce, Gloryhammer"
	},
	{
		id: "ionian",
		name: "Ioninen",
		category: "mode",
		intervals: [
			0,
			2,
			4,
			5,
			7,
			9,
			11
		],
		degrees: "1 2 3 4 5 6 7",
		blurb: "Duuri-moodi. Sama kuin duuri-skaala — kirkkaus ja resoluutio.",
		usedBy: "Power metal, sinfoniset kertosäkeet"
	},
	{
		id: "dorian",
		name: "Doorinen",
		category: "mode",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			9,
			10
		],
		degrees: "1 2 b3 4 5 6 b7",
		blurb: "Molli korotetulla sekstillä. Funkahtava, avoin — progressiivisen riffin suosikki.",
		usedBy: "Opeth, Tool, Mastodon, prog metal"
	},
	{
		id: "phrygian",
		name: "Fryyginen",
		category: "mode",
		intervals: [
			0,
			1,
			3,
			5,
			7,
			8,
			10
		],
		degrees: "1 b2 b3 4 5 b6 b7",
		blurb: "Pieni sekunti toonikasta. Espanjalainen, synkkä, heti metallinen.",
		usedBy: "Slayer, Lamb of God, Behemoth, death metal"
	},
	{
		id: "lydian",
		name: "Lyydinen",
		category: "mode",
		intervals: [
			0,
			2,
			4,
			6,
			7,
			9,
			11
		],
		degrees: "1 2 3 #4 5 6 7",
		blurb: "Duuri korotetulla kvartilla. Unenomainen, leijuva — prog-metallin taivas.",
		usedBy: "Dream Theater, Devin Townsend, prog"
	},
	{
		id: "mixolydian",
		name: "Miksolyydinen",
		category: "mode",
		intervals: [
			0,
			2,
			4,
			5,
			7,
			9,
			10
		],
		degrees: "1 2 3 4 5 6 b7",
		blurb: "Duuri pienellä septimillä. Rock-riffien ja avointen vireiden groove.",
		usedBy: "Clutch, stoner, hard rock -metalli"
	},
	{
		id: "aeolian",
		name: "Aiolinen",
		category: "mode",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			8,
			10
		],
		degrees: "1 2 b3 4 5 b6 b7",
		blurb: "Sama kuin luonnollinen molli. Klassinen heavy-moodi.",
		usedBy: "Black Sabbath, Metallica, Gojira"
	},
	{
		id: "locrian",
		name: "Lokrian",
		category: "mode",
		intervals: [
			0,
			1,
			3,
			5,
			6,
			8,
			10
		],
		degrees: "1 b2 b3 4 b5 b6 b7",
		blurb: "Vähennetty toonika. Epävakain moodi — dissonanssi on pointti.",
		usedBy: "Death, dissonantti black, Meshuggah-vaikutteet"
	},
	{
		id: "phryg-dom",
		name: "Fryyginen dominantti",
		category: "mode",
		intervals: [
			0,
			1,
			4,
			5,
			7,
			8,
			10
		],
		degrees: "1 b2 3 4 5 b6 b7",
		blurb: "Harmonisen mollin 5. moodi. Espanjalainen, itämainen, välittömästi heavy.",
		usedBy: "Slayer, Nile, Children of Bodom, folk/death"
	},
	{
		id: "dorian-b2",
		name: "Doorinen b2",
		category: "mode",
		intervals: [
			0,
			1,
			3,
			5,
			7,
			9,
			10
		],
		degrees: "1 b2 b3 4 5 6 b7",
		blurb: "Melodisen mollin 2. moodi. Fryyginen runko kirkkaammalla sekstillä.",
		usedBy: "Tech death, moderni prog"
	},
	{
		id: "locrian-n2",
		name: "Lokrian n2",
		category: "mode",
		intervals: [
			0,
			2,
			3,
			5,
			6,
			8,
			10
		],
		degrees: "1 2 b3 4 b5 b6 b7",
		blurb: "Melodisen mollin 6. moodi. Dissonanssi ilman pientä sekuntia.",
		usedBy: "Fusion-metal, tekniset soolot"
	},
	{
		id: "arp-min",
		name: "Mollikolmisointu",
		category: "arpeggio",
		intervals: [
			0,
			3,
			7
		],
		degrees: "1 b3 5",
		blurb: "Riffien ja sweepien perusmuoto. Juuri, pieni terssi, kvintti.",
		usedBy: "Kaikki metalli, erityisesti sweep-leadit"
	},
	{
		id: "arp-maj",
		name: "Duurikolmisointu",
		category: "arpeggio",
		intervals: [
			0,
			4,
			7
		],
		degrees: "1 3 5",
		blurb: "Kirkas kolmisointu. Power metalin ja neoklassisten juoksutusten runko.",
		usedBy: "Power metal, Yngwie-tyyliset sweepit"
	},
	{
		id: "arp-dim",
		name: "Vähennetty kolmisointu",
		category: "arpeggio",
		intervals: [
			0,
			3,
			6
		],
		degrees: "1 b3 b5",
		blurb: "Kaksi pientä terssiä. Siirtymät, kauhujännite, death-täytteet.",
		usedBy: "Death metal, neoclassical"
	},
	{
		id: "arp-aug",
		name: "Ylinouseva kolmisointu",
		category: "arpeggio",
		intervals: [
			0,
			4,
			8
		],
		degrees: "1 3 #5",
		blurb: "Tasajaotettu oktaavi. Leijuva, epävakaa väri.",
		usedBy: "Avantgarde, efektisoolot"
	},
	{
		id: "arp-min7",
		name: "Molliseptimi",
		category: "arpeggio",
		intervals: [
			0,
			3,
			7,
			10
		],
		degrees: "1 b3 5 b7",
		blurb: "Pehmeämpi molli. Prog-riffit, tapping ja laajat arpeggiot.",
		usedBy: "Opeth, progressive metal"
	},
	{
		id: "arp-maj7",
		name: "Duuriseptimi",
		category: "arpeggio",
		intervals: [
			0,
			4,
			7,
			11
		],
		degrees: "1 3 5 7",
		blurb: "Kirkas ja avoin. Sinfoniset ja djazvaikutteiset kohdat.",
		usedBy: "Prog, sinfoninen metalli"
	},
	{
		id: "arp-dom7",
		name: "Dominanttiseptimi",
		category: "arpeggio",
		intervals: [
			0,
			4,
			7,
			10
		],
		degrees: "1 3 5 b7",
		blurb: "Jännite, joka haluaa purkautua. Bluesvaikutteiset riffit ja shred.",
		usedBy: "Groove, southern, fusion-shred"
	},
	{
		id: "arp-m7b5",
		name: "Puolivähennetty (m7b5)",
		category: "arpeggio",
		intervals: [
			0,
			3,
			6,
			10
		],
		degrees: "1 b3 b5 b7",
		blurb: "Lokrian sointu. Dissonantti mutta käyttökelpoinen siirtymä.",
		usedBy: "Tech death, jazz-metal"
	},
	{
		id: "arp-dim7",
		name: "Vähennetty septimi",
		category: "arpeggio",
		intervals: [
			0,
			3,
			6,
			9
		],
		degrees: "1 b3 b5 bb7",
		blurb: "Neljä pientä terssiä. Sweepit, kauhukulut, Yngwie-klassikko.",
		usedBy: "Neoclassical, death, horror riffit"
	},
	{
		id: "arp-mmaj7",
		name: "Molli-maj7",
		category: "arpeggio",
		intervals: [
			0,
			3,
			7,
			11
		],
		degrees: "1 b3 5 7",
		blurb: "Harmonisen mollin sointu. Bond-mäinen, synkkä ja hieno.",
		usedBy: "Neoclassical, sinfoninen metalli"
	},
	{
		id: "arp-power",
		name: "Power chord (5)",
		category: "arpeggio",
		intervals: [0, 7],
		degrees: "1 5",
		blurb: "Ei terssiä — ei duuria eikä mollia. Särön ja riffin perusatomi.",
		usedBy: "Koko metallin historia"
	},
	{
		id: "arp-sus2",
		name: "Sus2",
		category: "arpeggio",
		intervals: [
			0,
			2,
			7
		],
		degrees: "1 2 5",
		blurb: "Avoin, ilman terssiä. Modernit avoimet riffit ja ambient-metalli.",
		usedBy: "Deftones, post-metal, modern metalcore"
	},
	{
		id: "arp-sus4",
		name: "Sus4",
		category: "arpeggio",
		intervals: [
			0,
			5,
			7
		],
		degrees: "1 4 5",
		blurb: "Kvartti kvintin kanssa. Jännite ilman terssiä — djent ja groove.",
		usedBy: "Djent, Tool, moderni prog"
	},
	{
		id: "arp-7b9",
		name: "Dominantti 7b9",
		category: "arpeggio",
		intervals: [
			0,
			1,
			4,
			7,
			10
		],
		degrees: "1 b9 3 5 b7",
		blurb: "Fryyginen dominantti sointuna. Espanjalainen puristus.",
		usedBy: "Neoclassical, Slayer-vaikutteiset leadit"
	},
	{
		id: "arp-7s9",
		name: "Dominantti 7#9",
		category: "arpeggio",
		intervals: [
			0,
			3,
			4,
			7,
			10
		],
		degrees: "1 #9 3 5 b7",
		blurb: "Hendrix-sointu metallissa. Duuri ja molli päällekkäin.",
		usedBy: "Groove, fusion-metal, särösoinnut"
	},
	{
		id: "riff-power",
		name: "Power chord -rifi",
		category: "riff",
		intervals: [0, 7],
		degrees: "1 5",
		blurb: "Matalan kielen chug ja kvintti. Gallop, palm mute, drop-vireen perusase.",
		usedBy: "Metallica, Pantera, Lamb of God, drop-vireet"
	},
	{
		id: "riff-tritone",
		name: "Tritoni (diabolus)",
		category: "riff",
		intervals: [0, 6],
		degrees: "1 b5",
		blurb: "Kielletty väli. Sabbathin DNA — heti paha ja raskas.",
		usedBy: "Black Sabbath, Slayer, doom, blackened riffit"
	},
	{
		id: "riff-phryg",
		name: "Fryyginen rifi",
		category: "riff",
		intervals: [
			0,
			1,
			3
		],
		degrees: "1 b2 b3",
		blurb: "Juuri, pieni sekunti, pieni terssi. Välitön death/thrash-motiivi.",
		usedBy: "Slayer, Behemoth, Lamb of God"
	},
	{
		id: "riff-b2",
		name: "Pieni sekunti / grind",
		category: "riff",
		intervals: [0, 1],
		degrees: "1 b2",
		blurb: "Kirein mahdollinen väli. Breakdownit, grind ja dissonantti chug.",
		usedBy: "Deathcore, grindcore, dissonantti death"
	},
	{
		id: "riff-chrom-app",
		name: "Kromaattinen lähestyminen",
		category: "riff",
		intervals: [
			0,
			1,
			11
		],
		degrees: "1 b2 7",
		blurb: "Toonikaa ympäröivät puolisävelet. Pedal-riffit ja kromat täytöt.",
		usedBy: "Death metal, Meshuggah, tech riffit"
	},
	{
		id: "riff-chug",
		name: "Chug (juuri)",
		category: "riff",
		intervals: [0],
		degrees: "1",
		blurb: "Pelkkä toonika. Drop-vireen avoin kieli, palm mute, bounce ja breakdown.",
		usedBy: "Drop C/B, metalcore, djent, groove"
	},
	{
		id: "riff-fourths",
		name: "Kvarttirifi",
		category: "riff",
		intervals: [0, 5],
		degrees: "1 4",
		blurb: "Päällekkäiset kvartit. Modernin djentin ja 8-kielisen geometria.",
		usedBy: "Meshuggah, Periphery, TesseracT"
	},
	{
		id: "riff-fifths",
		name: "Kvinttiketju",
		category: "riff",
		intervals: [0, 7],
		degrees: "1 5",
		blurb: "Powerit liikkeessä. Klassinen heavy-kulku otelaudalla.",
		usedBy: "Classic heavy, thrash, hardcore"
	},
	{
		id: "riff-djent",
		name: "Djent-klusteri",
		category: "riff",
		intervals: [
			0,
			5,
			7
		],
		degrees: "1 4 5",
		blurb: "Juuri, kvartti, kvintti. Synkattu palm mute ja polyrytmi.",
		usedBy: "Periphery, Architects, moderni metalcore"
	},
	{
		id: "riff-meshuggah",
		name: "Meshuggah-klusteri",
		category: "riff",
		intervals: [
			0,
			1,
			6,
			7
		],
		degrees: "1 b2 b5 5",
		blurb: "Puolisävel plus tritoni kvintin ympärillä. 8-kielisen kaaosgeometria.",
		usedBy: "Meshuggah, Vildhjarta, thall"
	},
	{
		id: "riff-bm-trem",
		name: "Black metal -tremolo",
		category: "riff",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			8,
			10
		],
		degrees: "1 2 b3 4 5 b6 b7",
		blurb: "Mollisävelet tremololla. Kylmä, toistuva, blast beatien päällä.",
		usedBy: "Mayhem, Immortal, Watain, darkthrone-tyyli"
	},
	{
		id: "riff-pedal",
		name: "Pedaalibassi",
		category: "riff",
		intervals: [
			0,
			7,
			8,
			10
		],
		degrees: "1 5 b6 b7",
		blurb: "Toonika pohjassa, kvintin ympärillä kromat. Iron Maiden -gallopin serkku.",
		usedBy: "Maiden, thrash, power metal"
	},
	{
		id: "riff-harm-run",
		name: "Harmoninen mollijuoksutus",
		category: "riff",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			8,
			11
		],
		degrees: "1 2 b3 4 5 b6 7",
		blurb: "3 nuottia per kieli, korotettu septimi. Neoklassinen spiral.",
		usedBy: "Yngwie, Bodom, sinfoninen shred"
	},
	{
		id: "riff-dim-walk",
		name: "Vähennetty kävely",
		category: "riff",
		intervals: [
			0,
			3,
			6,
			9
		],
		degrees: "1 b3 b5 6",
		blurb: "Pienin terssein etenevä kulku. Kauhusiirtymä ja sweep-pohja.",
		usedBy: "Death, neoclassical, horror riffit"
	},
	{
		id: "riff-3nps",
		name: "3 nuottia per kieli (molli)",
		category: "riff",
		intervals: [
			0,
			2,
			3,
			5,
			7,
			8,
			10
		],
		degrees: "1 2 b3 4 5 b6 b7",
		blurb: "Moderni otelautajuoksutus. Tasainen poiminta, legato, pitkät linjat.",
		usedBy: "Shred, modernit soolot, tech death"
	},
	{
		id: "riff-pent-box",
		name: "Pentatoninen boksi",
		category: "riff",
		intervals: [
			0,
			3,
			5,
			7,
			10
		],
		degrees: "1 b3 4 5 b7",
		blurb: "Klassinen asema otelaudalla. Soolojen ja pentasekvenssien koti.",
		usedBy: "Kaikki rock/metal-soolot"
	},
	{
		id: "riff-spider",
		name: "Kromaattinen hämähäkki",
		category: "riff",
		intervals: [
			0,
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11
		],
		degrees: "1 b2 2 b3 3 4 b5 5 b6 6 b7 7",
		blurb: "Sormiharjoitus ja riffi: 1–2–3–4 joka kielellä. Deathin kromat seinät.",
		usedBy: "Harjoittelu, tech death, kromat täytöt"
	},
	{
		id: "riff-octave",
		name: "Oktaavirifi",
		category: "riff",
		intervals: [0],
		degrees: "1",
		blurb: "Sama sävel kahdessa oktaavissa. Korostaa toonikaa drop-vireessä.",
		usedBy: "Nu-metal, Korn, modernit groove-riffit"
	},
	{
		id: "riff-sabbath",
		name: "Sabbath-tritonirifi",
		category: "riff",
		intervals: [
			0,
			3,
			6,
			7
		],
		degrees: "1 b3 b5 5",
		blurb: "Molli plus tritoni ja kvintti. Doom-riffien alkulähde.",
		usedBy: "Black Sabbath, Electric Wizard, doom"
	},
	{
		id: "riff-death-chrom",
		name: "Death-kromaattinen",
		category: "riff",
		intervals: [
			0,
			1,
			2,
			3,
			5,
			6,
			7
		],
		degrees: "1 b2 2 b3 4 b5 5",
		blurb: "Toonika-alueen kromat plus kvintti. Floridalaisen deathin kieli.",
		usedBy: "Death, Morbid Angel, Cannibal Corpse"
	},
	{
		id: "riff-korn",
		name: "Nu-metal -klusteri",
		category: "riff",
		intervals: [
			0,
			1,
			3,
			5,
			7,
			10
		],
		degrees: "1 b2 b3 4 5 b7",
		blurb: "Pentatoninen plus pieni sekunti. 7-kielisen A-vireen nu-metal.",
		usedBy: "Korn, Deftones, early nu-metal"
	},
	{
		id: "riff-gojira",
		name: "Groove-pentatoninen",
		category: "riff",
		intervals: [
			0,
			3,
			5,
			7,
			10
		],
		degrees: "1 b3 4 5 b7",
		blurb: "Raskas pentatoninen drop-vireessä. Pick scrape, pick pick, ilmava groove.",
		usedBy: "Gojira, Mastodon, moderni groove"
	},
	{
		id: "riff-sweep",
		name: "Sweep-molli",
		category: "riff",
		intervals: [
			0,
			3,
			7
		],
		degrees: "1 b3 5",
		blurb: "Kolmisointu sweep-poiminnalla. Pitkin otelautaa nouseva kaari.",
		usedBy: "Neoclassical, power metal, shred"
	}
];
function getPattern(id) {
	return PATTERNS.find((p) => p.id === id) ?? PATTERNS[0];
}
function patternsIn(category) {
	return PATTERNS.filter((p) => p.category === category);
}
var TUNING_GROUPS = [
	{
		id: "standard6",
		label: "6-kieliset vireet"
	},
	{
		id: "drop6",
		label: "6-kieliset dropit"
	},
	{
		id: "open6",
		label: "Avoimet vireet"
	},
	{
		id: "seven",
		label: "7-kieliset"
	},
	{
		id: "eight",
		label: "8-kieliset"
	}
];
var TUNINGS = [
	{
		id: "e-std",
		name: "E-vire (standardi)",
		group: "standard6",
		openMidi: [
			40,
			45,
			50,
			55,
			59,
			64
		]
	},
	{
		id: "eb-std",
		name: "Eb-vire (½ sävel alas)",
		group: "standard6",
		openMidi: [
			39,
			44,
			49,
			54,
			58,
			63
		]
	},
	{
		id: "d-std",
		name: "D-vire",
		group: "standard6",
		openMidi: [
			38,
			43,
			48,
			53,
			57,
			62
		]
	},
	{
		id: "cs-std",
		name: "C#-vire",
		group: "standard6",
		openMidi: [
			37,
			42,
			47,
			52,
			56,
			61
		]
	},
	{
		id: "c-std",
		name: "C-vire",
		group: "standard6",
		openMidi: [
			36,
			41,
			46,
			51,
			55,
			60
		]
	},
	{
		id: "b-std",
		name: "B-vire (baritoni)",
		group: "standard6",
		openMidi: [
			35,
			40,
			45,
			50,
			54,
			59
		]
	},
	{
		id: "bb-std",
		name: "Bb-vire",
		group: "standard6",
		openMidi: [
			34,
			39,
			44,
			49,
			53,
			58
		]
	},
	{
		id: "a-std6",
		name: "A-vire",
		group: "standard6",
		openMidi: [
			33,
			38,
			43,
			48,
			52,
			57
		]
	},
	{
		id: "drop-d",
		name: "Drop D",
		group: "drop6",
		openMidi: [
			38,
			45,
			50,
			55,
			59,
			64
		]
	},
	{
		id: "drop-cs",
		name: "Drop C#",
		group: "drop6",
		openMidi: [
			37,
			44,
			49,
			54,
			58,
			63
		]
	},
	{
		id: "drop-c",
		name: "Drop C",
		group: "drop6",
		openMidi: [
			36,
			43,
			48,
			53,
			57,
			62
		]
	},
	{
		id: "drop-b",
		name: "Drop B",
		group: "drop6",
		openMidi: [
			35,
			42,
			47,
			52,
			56,
			61
		]
	},
	{
		id: "drop-bb",
		name: "Drop Bb",
		group: "drop6",
		openMidi: [
			34,
			41,
			46,
			51,
			55,
			60
		]
	},
	{
		id: "drop-a6",
		name: "Drop A",
		group: "drop6",
		openMidi: [
			33,
			40,
			45,
			50,
			54,
			59
		]
	},
	{
		id: "drop-gs",
		name: "Drop G#",
		group: "drop6",
		openMidi: [
			32,
			39,
			44,
			49,
			53,
			58
		]
	},
	{
		id: "drop-g",
		name: "Drop G",
		group: "drop6",
		openMidi: [
			31,
			38,
			43,
			48,
			52,
			57
		]
	},
	{
		id: "drop-fs",
		name: "Drop F#",
		group: "drop6",
		openMidi: [
			30,
			37,
			42,
			47,
			51,
			56
		]
	},
	{
		id: "drop-f",
		name: "Drop F",
		group: "drop6",
		openMidi: [
			29,
			36,
			41,
			46,
			50,
			55
		]
	},
	{
		id: "open-c",
		name: "Open C",
		group: "open6",
		openMidi: [
			36,
			43,
			48,
			55,
			60,
			64
		]
	},
	{
		id: "open-d",
		name: "Open D",
		group: "open6",
		openMidi: [
			38,
			45,
			50,
			54,
			57,
			62
		]
	},
	{
		id: "open-g",
		name: "Open G",
		group: "open6",
		openMidi: [
			38,
			43,
			50,
			55,
			59,
			62
		]
	},
	{
		id: "open-c6",
		name: "Open C6 (CGCGAE)",
		group: "open6",
		openMidi: [
			36,
			43,
			48,
			55,
			57,
			64
		]
	},
	{
		id: "dadgad",
		name: "DADGAD",
		group: "open6",
		openMidi: [
			38,
			45,
			50,
			55,
			57,
			62
		]
	},
	{
		id: "7-b",
		name: "7-kielinen B-vire",
		group: "seven",
		openMidi: [
			35,
			40,
			45,
			50,
			55,
			59,
			64
		]
	},
	{
		id: "7-bb",
		name: "7-kielinen Bb-vire",
		group: "seven",
		openMidi: [
			34,
			39,
			44,
			49,
			54,
			58,
			63
		]
	},
	{
		id: "7-a",
		name: "7-kielinen A-vire",
		group: "seven",
		openMidi: [
			33,
			38,
			43,
			48,
			53,
			57,
			62
		]
	},
	{
		id: "7-gs",
		name: "7-kielinen G#-vire",
		group: "seven",
		openMidi: [
			32,
			37,
			42,
			47,
			52,
			56,
			61
		]
	},
	{
		id: "7-drop-a",
		name: "7-kielinen Drop A",
		group: "seven",
		openMidi: [
			33,
			40,
			45,
			50,
			55,
			59,
			64
		]
	},
	{
		id: "7-drop-gs",
		name: "7-kielinen Drop G#",
		group: "seven",
		openMidi: [
			32,
			39,
			44,
			49,
			54,
			58,
			63
		]
	},
	{
		id: "7-drop-g",
		name: "7-kielinen Drop G",
		group: "seven",
		openMidi: [
			31,
			38,
			43,
			48,
			53,
			57,
			62
		]
	},
	{
		id: "7-drop-fs",
		name: "7-kielinen Drop F#",
		group: "seven",
		openMidi: [
			30,
			37,
			42,
			47,
			52,
			56,
			61
		]
	},
	{
		id: "8-fs",
		name: "8-kielinen F#-vire",
		group: "eight",
		openMidi: [
			30,
			35,
			40,
			45,
			50,
			55,
			59,
			64
		]
	},
	{
		id: "8-e",
		name: "8-kielinen E-vire",
		group: "eight",
		openMidi: [
			28,
			33,
			38,
			43,
			48,
			53,
			57,
			62
		]
	},
	{
		id: "8-eb",
		name: "8-kielinen Eb-vire",
		group: "eight",
		openMidi: [
			27,
			32,
			37,
			42,
			47,
			52,
			56,
			61
		]
	},
	{
		id: "8-drop-e",
		name: "8-kielinen Drop E",
		group: "eight",
		openMidi: [
			28,
			35,
			40,
			45,
			50,
			55,
			59,
			64
		]
	},
	{
		id: "8-drop-d",
		name: "8-kielinen Drop D",
		group: "eight",
		openMidi: [
			26,
			33,
			38,
			43,
			48,
			53,
			57,
			62
		]
	},
	{
		id: "8-drop-cs",
		name: "8-kielinen Drop C#",
		group: "eight",
		openMidi: [
			25,
			32,
			37,
			42,
			47,
			52,
			56,
			61
		]
	}
];
function getTuning(id) {
	return TUNINGS.find((t) => t.id === id) ?? TUNINGS[0];
}
function tuningNotes(tuning) {
	return tuning.openMidi.map(midiToNote);
}
function tuningNoteLabel(tuning) {
	return tuningNotes(tuning).join(" ");
}
var useFretboard = create()(persist((set) => ({
	tuningId: "drop-c",
	patternId: "nat-minor",
	category: "scale",
	root: "C",
	displayMode: "note",
	fretCount: 15,
	leftHanded: false,
	showAllNotes: false,
	query: "",
	setTuning: (tuningId) => set({ tuningId }),
	setPattern: (patternId) => set({ patternId }),
	setCategory: (category) => set({
		category,
		query: ""
	}),
	setRoot: (root) => set({ root }),
	setDisplayMode: (displayMode) => set({ displayMode }),
	setFretCount: (fretCount) => set({ fretCount }),
	setLeftHanded: (leftHanded) => set({ leftHanded }),
	setShowAllNotes: (showAllNotes) => set({ showAllNotes }),
	setQuery: (query) => set({ query })
}), {
	name: "otelauta-v1",
	skipHydration: true,
	partialize: (s) => ({
		tuningId: s.tuningId,
		patternId: s.patternId,
		category: s.category,
		root: s.root,
		displayMode: s.displayMode,
		fretCount: s.fretCount,
		leftHanded: s.leftHanded,
		showAllNotes: s.showAllNotes
	})
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sm)] text-sm font-medium transition-[color,background-color,opacity,transform,box-shadow] duration-[150ms] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			secondary: "bg-elevated text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "border border-border bg-transparent text-fg hover:bg-elevated",
			ghost: "text-muted hover:bg-elevated hover:text-fg",
			selected: "bg-primary text-primary-foreground"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11",
			chip: "h-9 px-3 text-xs tracking-wide"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var Select = Select$1;
var SelectGroup = SelectGroup$1;
var SelectValue = SelectValue$1;
function SelectTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
		className: cn("flex h-11 w-full items-center justify-between gap-2 rounded-[var(--radius-sm)] border border-border bg-elevated px-3 text-sm text-fg", "transition-[box-shadow,background-color] duration-[150ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "hover:shadow-[var(--shadow-border-hover)] focus:outline-none focus:ring-2 focus:ring-ring", "disabled:cursor-not-allowed disabled:opacity-40 data-[placeholder]:text-muted [&>span]:line-clamp-1", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-muted" })
		})]
	});
}
function SelectContent({ className, children, position = "popper", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
		position,
		className: cn("relative z-50 max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface text-fg shadow-[var(--shadow-border)]", className),
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {
				className: "flex h-8 items-center justify-center text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
				className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {
				className: "flex h-8 items-center justify-center text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
			})
		]
	}) });
}
function SelectLabel({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
		className: cn("px-2 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-subtle", className),
		...props
	});
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
		className: cn("relative flex w-full cursor-pointer select-none items-center rounded-[var(--radius-xs)] py-2 pl-8 pr-3 text-sm outline-none", "focus:bg-elevated focus:text-fg data-[disabled]:pointer-events-none data-[disabled]:opacity-40", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute left-2 flex size-4 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
	});
}
var DISPLAY = [
	{
		id: "note",
		label: "Nuotit"
	},
	{
		id: "degree",
		label: "Asteet"
	},
	{
		id: "interval",
		label: "Intervallit"
	}
];
var FRETS = [
	{
		id: 12,
		label: "12"
	},
	{
		id: 15,
		label: "15"
	},
	{
		id: 24,
		label: "24"
	}
];
function ControlPanel() {
	const { tuningId, patternId, category, root, displayMode, fretCount, leftHanded, showAllNotes, query, setTuning, setPattern, setCategory, setRoot, setDisplayMode, setFretCount, setLeftHanded, setShowAllNotes, setQuery } = useFretboard();
	const tuning = getTuning(tuningId);
	const filtered = query.trim() ? PATTERNS.filter((p) => p.category === category && (p.name.toLowerCase().includes(query.toLowerCase()) || p.degrees.toLowerCase().includes(query.toLowerCase()) || p.usedBy.toLowerCase().includes(query.toLowerCase()))) : patternsIn(category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex flex-col gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium uppercase tracking-[0.16em] text-subtle",
							children: "Vire"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: tuningId,
							onValueChange: setTuning,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								"aria-label": "Kitaran vire",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: TUNING_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectGroup, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel, { children: group.label }), TUNINGS.filter((t) => t.group === group.id).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: t.id,
								children: t.name
							}, t.id))] }, group.id)) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-muted tabular-nums",
							children: tuningNoteLabel(tuning)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-subtle",
						children: "Juurisävel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						role: "radiogroup",
						"aria-label": "Juurisävel",
						children: NOTE_NAMES.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "radio",
							"aria-checked": root === note,
							onClick: () => setRoot(note),
							className: cn("flex size-11 items-center justify-center rounded-full font-mono text-sm tabular-nums", "transition-[background-color,color,transform] duration-[150ms] ease-[cubic-bezier(0.22,1,0.36,1)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", root === note ? "bg-root-note text-root-note-fg" : "bg-elevated text-muted hover:text-fg"),
							children: note
						}, note))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-medium uppercase tracking-[0.16em] text-subtle",
						children: "Kuvio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						role: "tablist",
						"aria-label": "Kuviotyyppi",
						children: CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "chip",
							variant: category === cat.id ? "selected" : "secondary",
							onClick: () => {
								setCategory(cat.id);
								const first = patternsIn(cat.id)[0];
								if (first && !patternsIn(cat.id).some((p) => p.id === patternId)) setPattern(first.id);
							},
							children: cat.label
						}, cat.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Hae kuviota, bändiä tai kaavaa",
							"aria-label": "Hae kuviota",
							className: "h-11 w-full rounded-[var(--radius-sm)] border border-border bg-elevated pr-3 pl-10 text-sm text-fg placeholder:text-subtle focus:ring-2 focus:ring-ring focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex max-h-40 flex-wrap gap-1.5 overflow-y-auto pr-1",
						children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "Ei osumia."
						}) : filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "chip",
							variant: patternId === p.id ? "selected" : "outline",
							onClick: () => setPattern(p.id),
							children: p.name
						}, p.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: "Merkinnät",
						value: displayMode,
						options: DISPLAY,
						onChange: setDisplayMode
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
						label: "Nauhat",
						value: String(fretCount),
						options: FRETS.map((f) => ({
							id: String(f.id),
							label: f.label
						})),
						onChange: (v) => setFretCount(Number(v))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "chip",
							variant: showAllNotes ? "selected" : "secondary",
							onClick: () => setShowAllNotes(!showAllNotes),
							children: "Kaikki nuotit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							size: "chip",
							variant: leftHanded ? "selected" : "secondary",
							onClick: () => setLeftHanded(!leftHanded),
							children: "Vasenkätinen"
						})]
					})
				]
			})
		]
	});
}
function ToggleRow({ label, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] font-medium uppercase tracking-[0.16em] text-subtle",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-1.5",
			children: options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				size: "chip",
				variant: value === opt.id ? "selected" : "secondary",
				onClick: () => onChange(opt.id),
				children: opt.label
			}, opt.id))
		})]
	});
}
var ctx = null;
function getCtx() {
	if (typeof window === "undefined") return null;
	if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
	return ctx;
}
async function resumeAudio() {
	const audio = getCtx();
	if (audio && audio.state === "suspended") await audio.resume();
}
function playMidi(midi, duration = .55, when = 0) {
	const audio = getCtx();
	if (!audio) return;
	const t0 = audio.currentTime + when;
	const freq = midiToFreq(midi);
	const osc = audio.createOscillator();
	const osc2 = audio.createOscillator();
	const filter = audio.createBiquadFilter();
	const gain = audio.createGain();
	osc.type = "sawtooth";
	osc.frequency.setValueAtTime(freq, t0);
	osc2.type = "triangle";
	osc2.frequency.setValueAtTime(freq * 2, t0);
	filter.type = "lowpass";
	filter.frequency.setValueAtTime(1800, t0);
	filter.frequency.exponentialRampToValueAtTime(420, t0 + duration);
	filter.Q.setValueAtTime(1.1, t0);
	const amp = midi < 40 ? .22 : midi < 55 ? .16 : .12;
	gain.gain.setValueAtTime(1e-4, t0);
	gain.gain.exponentialRampToValueAtTime(amp, t0 + .012);
	gain.gain.exponentialRampToValueAtTime(1e-4, t0 + duration);
	osc.connect(filter);
	osc2.connect(filter);
	filter.connect(gain);
	gain.connect(audio.destination);
	osc.start(t0);
	osc2.start(t0);
	osc.stop(t0 + duration + .02);
	osc2.stop(t0 + duration + .02);
}
function playSequence(midis, step = .2, noteLen = .32) {
	resumeAudio();
	midis.forEach((midi, i) => {
		playMidi(midi, noteLen, i * step);
	});
}
function cellLabel(interval, note, mode) {
	if (mode === "interval") return SEMITONE_INTERVAL_SHORT[interval] ?? note;
	if (mode === "degree") return SEMITONE_DEGREE[interval] ?? note;
	return note;
}
function Fretboard({ tuning, pattern, root, fretCount, leftHanded, showAllNotes, displayMode }) {
	const patternSet = new Set(pattern.intervals);
	const widths = fretWidths(fretCount);
	const strings = [...tuning.openMidi].reverse();
	const frets = Array.from({ length: fretCount }, (_, i) => i + 1);
	const totalRem = widths.reduce((a, b) => a + b, 0) + 4.5;
	async function onPlay(midi) {
		await resumeAudio();
		playMidi(midi);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto overscroll-x-contain rounded-[var(--radius-lg)] shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-w-max pr-3",
			style: { width: `${totalRem}rem` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky left-0 z-20 flex flex-col justify-around bg-bg px-2 py-3",
					children: strings.map((openMidi, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 items-center justify-end font-mono text-xs text-muted tabular-nums",
						children: midiToNote(openMidi)
					}, `lab-${openMidi}-${i}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-w-0 flex-1 py-3 pr-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "fret-neck relative overflow-hidden rounded-[var(--radius-md)] py-1",
						children: strings.map((openMidi, stringIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("relative flex h-12 items-stretch", leftHanded && "flex-row-reverse"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "string-line pointer-events-none absolute top-1/2 right-0 left-0 z-0 -translate-y-1/2",
									style: { height: `${Math.max(1, 2.4 - stringIndex * .2)}px` },
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteCell, {
									midi: openMidi,
									fret: 0,
									width: widths[0],
									root,
									patternSet,
									showAllNotes,
									displayMode,
									onPlay
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "nut-bar pointer-events-none z-10 shrink-0 self-stretch",
									"aria-hidden": true
								}),
								frets.map((fret) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center justify-center",
									style: {
										width: `${widths[fret]}rem`,
										minWidth: `${widths[fret]}rem`,
										flex: "0 0 auto"
									},
									children: [
										stringIndex === Math.floor(strings.length / 2) && INLAY_FRETS.has(fret) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "pointer-events-none absolute top-1/2 left-1/2 z-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-inlay/40",
											"aria-hidden": true
										}) : null,
										DOUBLE_INLAY_FRETS.has(fret) && stringIndex === Math.floor(strings.length / 2) - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "pointer-events-none absolute top-1/2 left-1/2 z-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-inlay/40",
											"aria-hidden": true
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteCell, {
											midi: openMidi + fret,
											fret,
											width: widths[fret],
											root,
											patternSet,
											showAllNotes,
											displayMode,
											onPlay,
											fill: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("fret-wire pointer-events-none absolute top-0 bottom-0 z-10", leftHanded ? "left-0" : "right-0"),
											"aria-hidden": true
										})
									]
								}, `${stringIndex}-${fret}`))
							]
						}, `str-${openMidi}-${stringIndex}`))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("mt-2 flex", leftHanded && "flex-row-reverse"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center font-mono text-xs text-subtle tabular-nums",
								style: {
									width: `${widths[0]}rem`,
									minWidth: `${widths[0]}rem`,
									flex: "0 0 auto"
								},
								children: "0"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 shrink-0" }),
							frets.map((fret) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center font-mono text-xs text-subtle tabular-nums",
								style: {
									width: `${widths[fret]}rem`,
									minWidth: `${widths[fret]}rem`,
									flex: "0 0 auto"
								},
								children: fret
							}, `n-${fret}`))
						]
					})]
				})]
			})
		})
	});
}
function NoteCell({ midi, fret, width, root, patternSet, showAllNotes, displayMode, onPlay, fill = false }) {
	const note = midiToNote(midi);
	const interval = intervalFromRoot(root, midi);
	const inPattern = patternSet.has(interval);
	const isRoot = inPattern && interval === 0;
	const label = inPattern || showAllNotes ? cellLabel(interval, note, displayMode) : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-20 flex items-center justify-center",
		style: fill ? void 0 : {
			width: `${width}rem`,
			minWidth: `${width}rem`,
			flex: "0 0 auto"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => void onPlay(midi),
			"aria-label": `${note}, ${SEMITONE_INTERVAL_FI[interval]}, nauha ${fret}`,
			className: cn("flex size-8 items-center justify-center rounded-full font-mono text-xs font-medium tabular-nums", "transition-[transform,background-color,opacity,color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", isRoot && "bg-root-note text-root-note-fg", inPattern && !isRoot && "bg-scale-note text-scale-note-fg", !inPattern && showAllNotes && "text-muted/80 hover:bg-elevated/80", !inPattern && !showAllNotes && "text-transparent hover:bg-elevated/40 hover:text-muted"),
			children: label
		})
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-elevated text-muted",
		solid: "bg-primary text-primary-foreground",
		root: "bg-root-note text-root-note-fg"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function PatternDetail({ pattern, root }) {
	async function playScale() {
		await resumeAudio();
		const rootMidi = 48 + noteToPc(root);
		playSequence([...pattern.intervals.map((i) => rootMidi + i), rootMidi + 12]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 rounded-[var(--radius-lg)] bg-surface p-5 shadow-[var(--shadow-border)] sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-medium tracking-tight text-fg",
						children: pattern.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: ["Juuri ", root] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-sm text-muted tabular-nums",
					children: pattern.degrees
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: pattern.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-subtle",
					children: pattern.usedBy
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			onClick: () => void playScale(),
			className: "shrink-0 self-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), "Soita kuvio"]
		})]
	});
}
function TooltipProvider({ delayDuration = 250, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration,
		...props
	});
}
function Home() {
	(0, import_react.useEffect)(() => {
		useFretboard.persist.rehydrate();
	}, []);
	const { tuningId, patternId, root, displayMode, fretCount, leftHanded, showAllNotes } = useFretboard();
	const tuning = getTuning(tuningId);
	const pattern = getPattern(patternId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-[1400px] flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlPanel, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Otelauta",
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-medium tracking-tight",
							children: "Otelauta"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-subtle",
							children: [
								tuning.openMidi.length,
								" kieltä · ",
								fretCount,
								" nauhaa · napauta nuottia"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fretboard, {
						tuning,
						pattern,
						root,
						fretCount,
						leftHanded,
						showAllNotes,
						displayMode
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4 text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-3 rounded-full bg-root-note",
									"aria-hidden": true
								}), "Juuri"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-3 rounded-full bg-scale-note",
									"aria-hidden": true
								}), "Kuviossa"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nauhamerkit 3, 5, 7, 9, 12, 15, 17, 19, 21, 24" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PatternDetail, {
				pattern,
				root
			})
		]
	}) });
}
//#endregion
export { Home as component };
