import { midiToFreq } from "./music";

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = new Ctor();
  }
  return ctx;
}

export async function resumeAudio(): Promise<void> {
  const audio = getCtx();
  if (audio && audio.state === "suspended") await audio.resume();
}

export function playMidi(midi: number, duration = 0.55, when = 0): void {
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

  const amp = midi < 40 ? 0.22 : midi < 55 ? 0.16 : 0.12;
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(amp, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

  osc.connect(filter);
  osc2.connect(filter);
  filter.connect(gain);
  gain.connect(audio.destination);

  osc.start(t0);
  osc2.start(t0);
  osc.stop(t0 + duration + 0.02);
  osc2.stop(t0 + duration + 0.02);
}

export function playSequence(midis: number[], step = 0.2, noteLen = 0.32): void {
  void resumeAudio();
  midis.forEach((midi, i) => {
    playMidi(midi, noteLen, i * step);
  });
}
