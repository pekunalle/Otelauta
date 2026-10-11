import { playMidi, resumeAudio } from "@/lib/audio";
import type { NoteName } from "@/lib/music";
import {
  DOUBLE_INLAY_FRETS,
  INLAY_FRETS,
  SEMITONE_DEGREE,
  SEMITONE_INTERVAL_FI,
  SEMITONE_INTERVAL_SHORT,
  fretWidths,
  intervalFromRoot,
  midiToNote,
} from "@/lib/music";
import type { Pattern } from "@/lib/patterns";
import type { Tuning } from "@/lib/tunings";
import type { DisplayMode } from "@/store/use-fretboard";
import { cn } from "@/lib/utils";

type Props = {
  tuning: Tuning;
  pattern: Pattern;
  root: NoteName;
  fretCount: number;
  leftHanded: boolean;
  showAllNotes: boolean;
  displayMode: DisplayMode;
};

function cellLabel(interval: number, note: string, mode: DisplayMode): string {
  if (mode === "interval") return SEMITONE_INTERVAL_SHORT[interval] ?? note;
  if (mode === "degree") return SEMITONE_DEGREE[interval] ?? note;
  return note;
}

export function Fretboard({
  tuning,
  pattern,
  root,
  fretCount,
  leftHanded,
  showAllNotes,
  displayMode,
}: Props) {
  const patternSet = new Set(pattern.intervals);
  const widths = fretWidths(fretCount);
  const strings = [...tuning.openMidi].reverse();
  const frets = Array.from({ length: fretCount }, (_, i) => i + 1);
  const totalRem = widths.reduce((a, b) => a + b, 0) + 4.5;

  async function onPlay(midi: number) {
    await resumeAudio();
    playMidi(midi);
  }

  return (
    <div className="overflow-x-auto overscroll-x-contain rounded-[var(--radius-lg)] shadow-[var(--shadow-border)]">
      <div className="min-w-max pr-3" style={{ width: `${totalRem}rem` }}>
        <div className="flex">
          <div className="sticky left-0 z-20 flex flex-col justify-around bg-bg px-2 py-3">
            {strings.map((openMidi, i) => (
              <div
                key={`lab-${openMidi}-${i}`}
                className="flex h-12 items-center justify-end font-mono text-xs text-muted tabular-nums"
              >
                {midiToNote(openMidi)}
              </div>
            ))}
          </div>

          <div className="relative min-w-0 flex-1 py-3 pr-2">
            <div className="fret-neck relative overflow-hidden rounded-[var(--radius-md)] py-1">
              {strings.map((openMidi, stringIndex) => (
                <div
                  key={`str-${openMidi}-${stringIndex}`}
                  className={cn("relative flex h-12 items-stretch", leftHanded && "flex-row-reverse")}
                >
                  <span
                    className="string-line pointer-events-none absolute top-1/2 right-0 left-0 z-0 -translate-y-1/2"
                    style={{ height: `${Math.max(1, 2.4 - stringIndex * 0.2)}px` }}
                    aria-hidden
                  />
                  <NoteCell
                    midi={openMidi}
                    fret={0}
                    width={widths[0]!}
                    root={root}
                    patternSet={patternSet}
                    showAllNotes={showAllNotes}
                    displayMode={displayMode}
                    onPlay={onPlay}
                  />
                  <span className="nut-bar pointer-events-none z-10 shrink-0 self-stretch" aria-hidden />
                  {frets.map((fret) => (
                    <div
                      key={`${stringIndex}-${fret}`}
                      className="relative flex items-center justify-center"
                      style={{ width: `${widths[fret]}rem`, minWidth: `${widths[fret]}rem`, flex: "0 0 auto" }}
                    >
                      {stringIndex === Math.floor(strings.length / 2) && INLAY_FRETS.has(fret) ? (
                        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-inlay/40" aria-hidden />
                      ) : null}
                      {DOUBLE_INLAY_FRETS.has(fret) && stringIndex === Math.floor(strings.length / 2) - 1 ? (
                        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-inlay/40" aria-hidden />
                      ) : null}
                      <NoteCell
                        midi={openMidi + fret}
                        fret={fret}
                        width={widths[fret]!}
                        root={root}
                        patternSet={patternSet}
                        showAllNotes={showAllNotes}
                        displayMode={displayMode}
                        onPlay={onPlay}
                        fill
                      />
                      <span
                        className={cn(
                          "fret-wire pointer-events-none absolute top-0 bottom-0 z-10",
                          leftHanded ? "left-0" : "right-0",
                        )}
                        aria-hidden
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className={cn("mt-2 flex", leftHanded && "flex-row-reverse")}>
              <div
                className="flex justify-center font-mono text-xs text-subtle tabular-nums"
                style={{ width: `${widths[0]}rem`, minWidth: `${widths[0]}rem`, flex: "0 0 auto" }}
              >
                0
              </div>
              <div className="w-1.5 shrink-0" />
              {frets.map((fret) => (
                <div
                  key={`n-${fret}`}
                  className="flex justify-center font-mono text-xs text-subtle tabular-nums"
                  style={{ width: `${widths[fret]}rem`, minWidth: `${widths[fret]}rem`, flex: "0 0 auto" }}
                >
                  {fret}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoteCell({
  midi,
  fret,
  width,
  root,
  patternSet,
  showAllNotes,
  displayMode,
  onPlay,
  fill = false,
}: {
  midi: number;
  fret: number;
  width: number;
  root: NoteName;
  patternSet: Set<number>;
  showAllNotes: boolean;
  displayMode: DisplayMode;
  onPlay: (midi: number) => void;
  fill?: boolean;
}) {
  const note = midiToNote(midi);
  const interval = intervalFromRoot(root, midi);
  const inPattern = patternSet.has(interval);
  const isRoot = inPattern && interval === 0;
  const label = inPattern || showAllNotes ? cellLabel(interval, note, displayMode) : "";

  return (
    <div
      className="relative z-20 flex items-center justify-center"
      style={fill ? undefined : { width: `${width}rem`, minWidth: `${width}rem`, flex: "0 0 auto" }}
    >
      <button
        type="button"
        onClick={() => void onPlay(midi)}
        aria-label={`${note}, ${SEMITONE_INTERVAL_FI[interval]}, nauha ${fret}`}
        className={cn(
          "flex size-8 items-center justify-center rounded-full font-mono text-xs font-medium tabular-nums",
          "transition-[transform,background-color,opacity,color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isRoot && "bg-root-note text-root-note-fg",
          inPattern && !isRoot && "bg-scale-note text-scale-note-fg",
          !inPattern && showAllNotes && "text-muted/80 hover:bg-elevated/80",
          !inPattern && !showAllNotes && "text-transparent hover:bg-elevated/40 hover:text-muted",
        )}
      >
        {label}
      </button>
    </div>
  );
}
