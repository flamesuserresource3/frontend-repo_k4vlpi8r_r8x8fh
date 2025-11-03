import React from 'react';
import { Play, HelpCircle, Settings } from 'lucide-react';

const StartMenu = ({ onStart, onShowHelp, onShowOptions, mode, setMode }) => {
  return (
    <section className="mx-auto -mt-8 w-full max-w-4xl rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur-md shadow-xl">
      <div className="grid gap-6 p-6 md:p-8">
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase tracking-wider text-white/60">Content warning</span>
          <p className="text-white/90">Contains jump scares, darkness, and tense audio. Accessibility options are available.</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <button
            onClick={() => onStart()}
            className="group inline-flex items-center justify-center gap-3 rounded-lg bg-emerald-500 px-5 py-3 text-neutral-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Start"
          >
            <Play className="h-5 w-5" />
            <span className="font-medium">Play Now</span>
          </button>

          <div className="flex items-center gap-3 rounded-lg bg-neutral-800/80 px-4 py-3">
            <label htmlFor="mode" className="text-sm text-white/80">Mode</label>
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="flex-1 rounded-md bg-neutral-900/80 px-3 py-2 text-sm text-white/90 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-emerald-400"
            >
              <option value="normal">Survival</option>
              <option value="tour">Tour (no threats)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onShowHelp}
            className="inline-flex items-center gap-2 rounded-md bg-neutral-800/80 px-4 py-2 text-sm text-white/90 ring-1 ring-white/10 transition hover:bg-neutral-800"
          >
            <HelpCircle className="h-4 w-4" /> Quick Controls
          </button>
          <button
            onClick={onShowOptions}
            className="inline-flex items-center gap-2 rounded-md bg-neutral-800/80 px-4 py-2 text-sm text-white/90 ring-1 ring-white/10 transition hover:bg-neutral-800"
          >
            <Settings className="h-4 w-4" /> Options
          </button>
          <span className="ml-auto text-xs text-white/50">Target: 30–60 FPS · Mobile ready</span>
        </div>
      </div>
    </section>
  );
};

export default StartMenu;
