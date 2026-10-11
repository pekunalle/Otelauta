import { Search } from "lucide-react";
import { NOTE_NAMES } from "@/lib/music";
import { CATEGORIES, PATTERNS, patternsIn } from "@/lib/patterns";
import { TUNING_GROUPS, TUNINGS, getTuning, tuningNoteLabel } from "@/lib/tunings";
import { useFretboard, type DisplayMode, type FretCount } from "@/store/use-fretboard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const DISPLAY: { id: DisplayMode; label: string }[] = [
  { id: "note", label: "Nuotit" },
  { id: "degree", label: "Asteet" },
  { id: "interval", label: "Intervallit" },
];

const FRETS: { id: FretCount; label: string }[] = [
  { id: 12, label: "12" },
  { id: 15, label: "15" },
  { id: 24, label: "24" },
];

export function ControlPanel() {
  const {
    tuningId,
    patternId,
    category,
    root,
    displayMode,
    fretCount,
    leftHanded,
    showAllNotes,
    query,
    setTuning,
    setPattern,
    setCategory,
    setRoot,
    setDisplayMode,
    setFretCount,
    setLeftHanded,
    setShowAllNotes,
    setQuery,
  } = useFretboard();

  const tuning = getTuning(tuningId);
  const filtered = (query.trim()
    ? PATTERNS.filter(
        (p) =>
          p.category === category &&
          (p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.degrees.toLowerCase().includes(query.toLowerCase()) ||
            p.usedBy.toLowerCase().includes(query.toLowerCase())),
      )
    : patternsIn(category));

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">Vire</span>
          <Select value={tuningId} onValueChange={setTuning}>
            <SelectTrigger aria-label="Kitaran vire">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TUNING_GROUPS.map((group) => (
                <SelectGroup key={group.id}>
                  <SelectLabel>{group.label}</SelectLabel>
                  {TUNINGS.filter((t) => t.group === group.id).map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      {t.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
          <span className="font-mono text-xs text-muted tabular-nums">{tuningNoteLabel(tuning)}</span>
        </label>

        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">Juurisävel</span>
          <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Juurisävel">
            {NOTE_NAMES.map((note) => (
              <button
                key={note}
                type="button"
                role="radio"
                aria-checked={root === note}
                onClick={() => setRoot(note)}
                className={cn(
                  "flex size-11 items-center justify-center rounded-full font-mono text-sm tabular-nums",
                  "transition-[background-color,color,transform] duration-[150ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  root === note ? "bg-root-note text-root-note-fg" : "bg-elevated text-muted hover:text-fg",
                )}
              >
                {note}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">Kuvio</span>
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Kuviotyyppi">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              type="button"
              size="chip"
              variant={category === cat.id ? "selected" : "secondary"}
              onClick={() => {
                setCategory(cat.id);
                const first = patternsIn(cat.id)[0];
                if (first && !patternsIn(cat.id).some((p) => p.id === patternId)) {
                  setPattern(first.id);
                }
              }}
            >
              {cat.label}
            </Button>
          ))}
        </div>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Hae kuviota, bändiä tai kaavaa"
            aria-label="Hae kuviota"
            className="h-11 w-full rounded-[var(--radius-sm)] border border-border bg-elevated pr-3 pl-10 text-sm text-fg placeholder:text-subtle focus:ring-2 focus:ring-ring focus:outline-none"
          />
        </div>
        <div className="flex max-h-40 flex-wrap gap-1.5 overflow-y-auto pr-1">
          {filtered.length === 0 ? (
            <p className="text-sm text-muted">Ei osumia.</p>
          ) : (
            filtered.map((p) => (
              <Button
                key={p.id}
                type="button"
                size="chip"
                variant={patternId === p.id ? "selected" : "outline"}
                onClick={() => setPattern(p.id)}
              >
                {p.name}
              </Button>
            ))
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <ToggleRow
          label="Merkinnät"
          value={displayMode}
          options={DISPLAY}
          onChange={setDisplayMode}
        />
        <ToggleRow
          label="Nauhat"
          value={String(fretCount)}
          options={FRETS.map((f) => ({ id: String(f.id), label: f.label }))}
          onChange={(v) => setFretCount(Number(v) as FretCount)}
        />
        <div className="flex flex-wrap gap-1.5">
          <Button type="button" size="chip" variant={showAllNotes ? "selected" : "secondary"} onClick={() => setShowAllNotes(!showAllNotes)}>
            Kaikki nuotit
          </Button>
          <Button type="button" size="chip" variant={leftHanded ? "selected" : "secondary"} onClick={() => setLeftHanded(!leftHanded)}>
            Vasenkätinen
          </Button>
        </div>
      </div>
    </div>
  );
}

function ToggleRow<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { id: T; label: string }[];
  onChange: (id: T) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-subtle">{label}</span>
      <div className="flex gap-1.5">
        {options.map((opt) => (
          <Button
            key={opt.id}
            type="button"
            size="chip"
            variant={value === opt.id ? "selected" : "secondary"}
            onClick={() => onChange(opt.id)}
          >
            {opt.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
