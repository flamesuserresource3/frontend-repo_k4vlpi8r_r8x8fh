import React from 'react';
import { Volume2, VolumeX, Eye, EyeOff } from 'lucide-react';

const OptionsPanel = ({ open, onClose, settings, setSettings }) => {
  if (!open) return null;

  const toggle = (key) => setSettings((s) => ({ ...s, [key]: !s[key] }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-xl overflow-hidden rounded-xl bg-neutral-900 text-white shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h2 className="text-lg font-semibold">Options</h2>
          <button onClick={onClose} className="rounded-md px-3 py-1 text-sm text-white/80 hover:bg-white/10">Close</button>
        </div>

        <div className="grid gap-4 p-6">
          <div className="flex items-center justify-between rounded-lg bg-neutral-800/60 p-4 ring-1 ring-white/10">
            <div>
              <div className="font-medium">Audio</div>
              <p className="text-sm text-white/60">Toggle all sounds</p>
            </div>
            <button
              onClick={() => toggle('muted')}
              className="inline-flex items-center gap-2 rounded-md bg-neutral-700 px-4 py-2 text-sm"
            >
              {settings.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />} {settings.muted ? 'Muted' : 'On'}
            </button>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800/60 p-4 ring-1 ring-white/10">
            <div>
              <div className="font-medium">Grayscale</div>
              <p className="text-sm text-white/60">High-contrast, colorless view</p>
            </div>
            <button
              onClick={() => toggle('grayscale')}
              className="inline-flex items-center gap-2 rounded-md bg-neutral-700 px-4 py-2 text-sm"
            >
              {settings.grayscale ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />} {settings.grayscale ? 'On' : 'Off'}
            </button>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800/60 p-4 ring-1 ring-white/10">
            <div>
              <div className="font-medium">Low Motion</div>
              <p className="text-sm text-white/60">Reduce camera shake and animation</p>
            </div>
            <button
              onClick={() => toggle('lowMotion')}
              className="inline-flex items-center gap-2 rounded-md bg-neutral-700 px-4 py-2 text-sm"
            >
              {settings.lowMotion ? 'On' : 'Off'}
            </button>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-neutral-800/60 p-4 ring-1 ring-white/10">
            <div>
              <div className="font-medium">Subtitles</div>
              <p className="text-sm text-white/60">Text for important audio cues</p>
            </div>
            <button
              onClick={() => toggle('subtitles')}
              className="inline-flex items-center gap-2 rounded-md bg-neutral-700 px-4 py-2 text-sm"
            >
              {settings.subtitles ? 'On' : 'Off'}
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 p-4 text-right">
          <button onClick={onClose} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900">Done</button>
        </div>
      </div>
    </div>
  );
};

export default OptionsPanel;
