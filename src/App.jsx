import React, { useMemo, useState } from 'react';
import HeroCover from './components/HeroCover';
import StartMenu from './components/StartMenu';
import ControlsOverlay from './components/ControlsOverlay';
import OptionsPanel from './components/OptionsPanel';

function App() {
  const [mode, setMode] = useState('normal'); // 'normal' | 'tour'
  const [showHelp, setShowHelp] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [started, setStarted] = useState(false);
  const [settings, setSettings] = useState({ muted: false, grayscale: false, lowMotion: false, subtitles: true });
  const [tokens, setTokens] = useState(0);

  // Minimal demo interactions (no full gameplay): allow token preview increments
  const canCollectPreview = started && tokens < 5;

  const appClass = useMemo(() => {
    const classes = ['min-h-screen bg-neutral-950 text-white antialiased'];
    if (settings.grayscale) classes.push('grayscale');
    if (settings.lowMotion) classes.push('[animation-duration:.01ms] [animation-iteration-count:1] motion-reduce:transition-none');
    return classes.join(' ');
  }, [settings.grayscale, settings.lowMotion]);

  return (
    <div className={appClass}>
      <HeroCover />

      <main className="mx-auto max-w-6xl px-4 pb-16">
        {!started && (
          <StartMenu
            onStart={() => setStarted(true)}
            onShowHelp={() => setShowHelp(true)}
            onShowOptions={() => setShowOptions(true)}
            mode={mode}
            setMode={setMode}
          />
        )}

        {started && (
          <section className="mt-6 grid gap-4 rounded-xl border border-white/10 bg-neutral-900/50 p-4 backdrop-blur">
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-lg bg-black/50 px-4 py-2 text-sm ring-1 ring-white/10">Tokens: <span className="font-semibold">{tokens}</span>/5</div>
              <div className="rounded-lg bg-black/50 px-4 py-2 text-sm ring-1 ring-white/10">Mode: <span className="font-semibold capitalize">{mode}</span></div>
              <div className="ml-auto text-xs text-white/60">Stealth, sound, and line-of-sight are in effect in survival mode.</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-neutral-800/60 p-4 ring-1 ring-white/10">
                <h3 className="font-medium">How it plays</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                  <li>Collect 5 cursed tokens: entry, two inside, two outside.</li>
                  <li>Shadow patrols: patrol → investigate → chase. Avoid light and noise.</li>
                  <li>Running is louder; crouching is quieter. Tokens pulse nearby.</li>
                  <li>Reach the gate for a finale. Tour mode skips threats.</li>
                </ul>
                <div className="mt-3 text-xs text-white/50">This is a visual prototype shell. Full gameplay loads in-session.</div>
              </div>

              <div className="rounded-lg bg-neutral-800/60 p-4 ring-1 ring-white/10">
                <h3 className="font-medium">Quick actions</h3>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                  <button
                    disabled={!canCollectPreview}
                    onClick={() => setTokens((t) => Math.min(5, t + 1))}
                    className="rounded-md bg-emerald-500 px-3 py-2 font-medium text-neutral-900 disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-white/50"
                  >
                    Collect token preview
                  </button>
                  <button
                    onClick={() => setShowHelp(true)}
                    className="rounded-md bg-neutral-700 px-3 py-2 font-medium hover:bg-neutral-600"
                  >
                    Controls
                  </button>
                  <button
                    onClick={() => setShowOptions(true)}
                    className="rounded-md bg-neutral-700 px-3 py-2 font-medium hover:bg-neutral-600"
                  >
                    Options
                  </button>
                </div>
                {settings.subtitles && (
                  <div className="mt-4 rounded-md bg-black/50 p-3 text-xs text-white/80 ring-1 ring-white/10">
                    Subtitles example: distant wind · floorboards creak · soft whisper
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="mt-8 grid gap-6 rounded-xl border border-white/10 bg-neutral-900/40 p-6">
          <div className="grid gap-2">
            <h2 className="text-lg font-semibold">Performance & Assets</h2>
            <p className="text-sm text-white/80">Low-poly, Draco-compressed glTFs, KTX2/webp textures, baked AO, and foggy mood lighting. Target ≤ 6 MB initial load.</p>
          </div>
          <ul className="grid gap-2 text-sm text-white/70 md:grid-cols-2">
            <li>• Scene ≤ 200k triangles; props 50–400 tris; creatures 800–1,500 tris</li>
            <li>• 1 directional + 2–4 point lights; soft falloff; color grading</li>
            <li>• Ambient loop + SFX (footsteps, whispers, heartbeat, jump)</li>
            <li>• Mobile controls, grayscale toggle, subtitles, low-motion</li>
          </ul>
        </section>

        <footer className="mt-12 border-t border-white/10 py-8 text-center text-xs text-white/50">
          Play in your browser. Best with headphones. © Cursed Manor
        </footer>
      </main>

      <ControlsOverlay open={showHelp} onClose={() => setShowHelp(false)} />
      <OptionsPanel open={showOptions} onClose={() => setShowOptions(false)} settings={settings} setSettings={setSettings} />

      {/* Audio handling: globally muted flag for future integration */}
      <audio muted={settings.muted} className="hidden" />
    </div>
  );
}

export default App;
