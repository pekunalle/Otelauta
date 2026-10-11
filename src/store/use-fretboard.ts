import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { NoteName } from "@/lib/music";
import type { PatternCategory } from "@/lib/patterns";

export type DisplayMode = "note" | "interval" | "degree";
export type FretCount = 12 | 15 | 24;

type State = {
  tuningId: string;
  patternId: string;
  category: PatternCategory;
  root: NoteName;
  displayMode: DisplayMode;
  fretCount: FretCount;
  leftHanded: boolean;
  showAllNotes: boolean;
  query: string;
  setTuning: (id: string) => void;
  setPattern: (id: string) => void;
  setCategory: (category: PatternCategory) => void;
  setRoot: (root: NoteName) => void;
  setDisplayMode: (mode: DisplayMode) => void;
  setFretCount: (count: FretCount) => void;
  setLeftHanded: (value: boolean) => void;
  setShowAllNotes: (value: boolean) => void;
  setQuery: (query: string) => void;
};

export const useFretboard = create<State>()(
  persist(
    (set) => ({
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
      setCategory: (category) => set({ category, query: "" }),
      setRoot: (root) => set({ root }),
      setDisplayMode: (displayMode) => set({ displayMode }),
      setFretCount: (fretCount) => set({ fretCount }),
      setLeftHanded: (leftHanded) => set({ leftHanded }),
      setShowAllNotes: (showAllNotes) => set({ showAllNotes }),
      setQuery: (query) => set({ query }),
    }),
    {
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
        showAllNotes: s.showAllNotes,
      }),
    },
  ),
);
