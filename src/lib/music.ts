export const NOTE_NAMES = [
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
  "B",
] as const;

export type NoteName = (typeof NOTE_NAMES)[number];

export const NOTE_INDEX: Record<NoteName, number> = {
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
  B: 11,
};

export const SEMITONE_INTERVAL_SHORT = [
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
  "M7",
] as const;

export const SEMITONE_DEGREE = [
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
  "7",
] as const;

export const SEMITONE_INTERVAL_FI = [
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
  "suuri septimi",
] as const;

export function pitchClass(midi: number): number {
  return ((midi % 12) + 12) % 12;
}

export function midiToNote(midi: number): NoteName {
  return NOTE_NAMES[pitchClass(midi)]!;
}

export function midiToFreq(midi: number): number {
  return 440 * 2 ** ((midi - 69) / 12);
}

export function noteToPc(note: NoteName): number {
  return NOTE_INDEX[note];
}

export function intervalFromRoot(root: NoteName, midi: number): number {
  return (pitchClass(midi) - noteToPc(root) + 12) % 12;
}

export function transposeNote(note: NoteName, semitones: number): NoteName {
  return NOTE_NAMES[(noteToPc(note) + semitones + 1200) % 12]!;
}

export function fretWidths(fretCount: number): number[] {
  const widths = [2.7];
  let w = 3.9;
  for (let i = 1; i <= fretCount; i++) {
    widths.push(Math.max(2.7, w));
    w *= 0.97;
  }
  return widths;
}

export const INLAY_FRETS = new Set([3, 5, 7, 9, 12, 15, 17, 19, 21, 24]);
export const DOUBLE_INLAY_FRETS = new Set([12, 24]);
