import { Play } from "lucide-react";
import { playSequence, resumeAudio } from "@/lib/audio";
import { noteToPc } from "@/lib/music";
import type { NoteName } from "@/lib/music";
import type { Pattern } from "@/lib/patterns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = {
  pattern: Pattern;
  root: NoteName;
};

export function PatternDetail({ pattern, root }: Props) {
  async function playScale() {
    await resumeAudio();
    const rootMidi = 48 + noteToPc(root);
    const notes = [...pattern.intervals.map((i) => rootMidi + i), rootMidi + 12];
    playSequence(notes);
  }

  return (
    <div className="flex flex-col gap-4 rounded-[var(--radius-lg)] bg-surface p-5 shadow-[var(--shadow-border)] sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:p-6">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-display text-2xl font-medium tracking-tight text-fg">{pattern.name}</h2>
          <Badge>Juuri {root}</Badge>
        </div>
        <p className="mt-1 font-mono text-sm text-muted tabular-nums">{pattern.degrees}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{pattern.blurb}</p>
        <p className="mt-2 text-xs text-subtle">{pattern.usedBy}</p>
      </div>
      <Button type="button" onClick={() => void playScale()} className="shrink-0 self-start">
        <Play className="size-4" />
        Soita kuvio
      </Button>
    </div>
  );
}
