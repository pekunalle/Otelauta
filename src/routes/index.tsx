import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { AppHeader } from "@/components/app-header";
import { ControlPanel } from "@/components/control-panel";
import { Fretboard } from "@/components/fretboard";
import { PatternDetail } from "@/components/pattern-detail";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getPattern } from "@/lib/patterns";
import { getTuning } from "@/lib/tunings";
import { useFretboard } from "@/store/use-fretboard";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    void useFretboard.persist.rehydrate();
  }, []);

  const { tuningId, patternId, root, displayMode, fretCount, leftHanded, showAllNotes } = useFretboard();
  const tuning = getTuning(tuningId);
  const pattern = getPattern(patternId);

  return (
    <TooltipProvider>
      <main className="mx-auto flex min-h-dvh max-w-[1400px] flex-col gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 lg:px-8">
        <AppHeader />
        <ControlPanel />
        <section aria-label="Otelauta" className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-lg font-medium tracking-tight">Otelauta</h2>
            <p className="text-xs text-subtle">
              {tuning.openMidi.length} kieltä · {fretCount} nauhaa · napauta nuottia
            </p>
          </div>
          <Fretboard
            tuning={tuning}
            pattern={pattern}
            root={root}
            fretCount={fretCount}
            leftHanded={leftHanded}
            showAllNotes={showAllNotes}
            displayMode={displayMode}
          />
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="size-3 rounded-full bg-root-note" aria-hidden />
              Juuri
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-3 rounded-full bg-scale-note" aria-hidden />
              Kuviossa
            </span>
            <span>Nauhamerkit 3, 5, 7, 9, 12, 15, 17, 19, 21, 24</span>
          </div>
        </section>
        <PatternDetail pattern={pattern} root={root} />
      </main>
    </TooltipProvider>
  );
}
