import type { NoteName } from "./music";
import { midiToNote } from "./music";

export type TuningGroup = "standard6" | "drop6" | "open6" | "seven" | "eight";

export type Tuning = {
  id: string;
  name: string;
  group: TuningGroup;
  openMidi: number[];
};

export const TUNING_GROUPS: { id: TuningGroup; label: string }[] = [
  { id: "standard6", label: "6-kieliset vireet" },
  { id: "drop6", label: "6-kieliset dropit" },
  { id: "open6", label: "Avoimet vireet" },
  { id: "seven", label: "7-kieliset" },
  { id: "eight", label: "8-kieliset" },
];

export const TUNINGS: Tuning[] = [
  { id: "e-std", name: "E-vire (standardi)", group: "standard6", openMidi: [40, 45, 50, 55, 59, 64] },
  { id: "eb-std", name: "Eb-vire (½ sävel alas)", group: "standard6", openMidi: [39, 44, 49, 54, 58, 63] },
  { id: "d-std", name: "D-vire", group: "standard6", openMidi: [38, 43, 48, 53, 57, 62] },
  { id: "cs-std", name: "C#-vire", group: "standard6", openMidi: [37, 42, 47, 52, 56, 61] },
  { id: "c-std", name: "C-vire", group: "standard6", openMidi: [36, 41, 46, 51, 55, 60] },
  { id: "b-std", name: "B-vire (baritoni)", group: "standard6", openMidi: [35, 40, 45, 50, 54, 59] },
  { id: "bb-std", name: "Bb-vire", group: "standard6", openMidi: [34, 39, 44, 49, 53, 58] },
  { id: "a-std6", name: "A-vire", group: "standard6", openMidi: [33, 38, 43, 48, 52, 57] },
  { id: "drop-d", name: "Drop D", group: "drop6", openMidi: [38, 45, 50, 55, 59, 64] },
  { id: "drop-cs", name: "Drop C#", group: "drop6", openMidi: [37, 44, 49, 54, 58, 63] },
  { id: "drop-c", name: "Drop C", group: "drop6", openMidi: [36, 43, 48, 53, 57, 62] },
  { id: "drop-b", name: "Drop B", group: "drop6", openMidi: [35, 42, 47, 52, 56, 61] },
  { id: "drop-bb", name: "Drop Bb", group: "drop6", openMidi: [34, 41, 46, 51, 55, 60] },
  { id: "drop-a6", name: "Drop A", group: "drop6", openMidi: [33, 40, 45, 50, 54, 59] },
  { id: "drop-gs", name: "Drop G#", group: "drop6", openMidi: [32, 39, 44, 49, 53, 58] },
  { id: "drop-g", name: "Drop G", group: "drop6", openMidi: [31, 38, 43, 48, 52, 57] },
  { id: "drop-fs", name: "Drop F#", group: "drop6", openMidi: [30, 37, 42, 47, 51, 56] },
  { id: "drop-f", name: "Drop F", group: "drop6", openMidi: [29, 36, 41, 46, 50, 55] },
  { id: "open-c", name: "Open C", group: "open6", openMidi: [36, 43, 48, 55, 60, 64] },
  { id: "open-d", name: "Open D", group: "open6", openMidi: [38, 45, 50, 54, 57, 62] },
  { id: "open-g", name: "Open G", group: "open6", openMidi: [38, 43, 50, 55, 59, 62] },
  { id: "open-c6", name: "Open C6 (CGCGAE)", group: "open6", openMidi: [36, 43, 48, 55, 57, 64] },
  { id: "dadgad", name: "DADGAD", group: "open6", openMidi: [38, 45, 50, 55, 57, 62] },
  { id: "7-b", name: "7-kielinen B-vire", group: "seven", openMidi: [35, 40, 45, 50, 55, 59, 64] },
  { id: "7-bb", name: "7-kielinen Bb-vire", group: "seven", openMidi: [34, 39, 44, 49, 54, 58, 63] },
  { id: "7-a", name: "7-kielinen A-vire", group: "seven", openMidi: [33, 38, 43, 48, 53, 57, 62] },
  { id: "7-gs", name: "7-kielinen G#-vire", group: "seven", openMidi: [32, 37, 42, 47, 52, 56, 61] },
  { id: "7-drop-a", name: "7-kielinen Drop A", group: "seven", openMidi: [33, 40, 45, 50, 55, 59, 64] },
  { id: "7-drop-gs", name: "7-kielinen Drop G#", group: "seven", openMidi: [32, 39, 44, 49, 54, 58, 63] },
  { id: "7-drop-g", name: "7-kielinen Drop G", group: "seven", openMidi: [31, 38, 43, 48, 53, 57, 62] },
  { id: "7-drop-fs", name: "7-kielinen Drop F#", group: "seven", openMidi: [30, 37, 42, 47, 52, 56, 61] },
  { id: "8-fs", name: "8-kielinen F#-vire", group: "eight", openMidi: [30, 35, 40, 45, 50, 55, 59, 64] },
  { id: "8-e", name: "8-kielinen E-vire", group: "eight", openMidi: [28, 33, 38, 43, 48, 53, 57, 62] },
  { id: "8-eb", name: "8-kielinen Eb-vire", group: "eight", openMidi: [27, 32, 37, 42, 47, 52, 56, 61] },
  { id: "8-drop-e", name: "8-kielinen Drop E", group: "eight", openMidi: [28, 35, 40, 45, 50, 55, 59, 64] },
  { id: "8-drop-d", name: "8-kielinen Drop D", group: "eight", openMidi: [26, 33, 38, 43, 48, 53, 57, 62] },
  { id: "8-drop-cs", name: "8-kielinen Drop C#", group: "eight", openMidi: [25, 32, 37, 42, 47, 52, 56, 61] },
];

export function getTuning(id: string): Tuning {
  return TUNINGS.find((t) => t.id === id) ?? TUNINGS[0]!;
}

export function tuningNotes(tuning: Tuning): NoteName[] {
  return tuning.openMidi.map(midiToNote);
}

export function tuningNoteLabel(tuning: Tuning): string {
  return tuningNotes(tuning).join(" ");
}
