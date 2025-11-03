import React from 'react';
import { X } from 'lucide-react';

const ControlsOverlay = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-xl bg-neutral-900 text-white shadow-2xl ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <h2 className="text-lg font-semibold">Quick Controls</h2>
          <button
            aria-label="Close controls"
            onClick={onClose}
            className="rounded-md p-2 text-white/70 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="grid gap-6 p-6 text-sm md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-white/80">Desktop</h3>
            <ul className="space-y-1 text-white/70">
              <li>WASD — Move</li>
              <li>Mouse — Look</li>
              <li>Shift — Run (louder)</li>
              <li>Ctrl — Crouch (quieter)</li>
              <li>E — Interact / Collect</li>
              <li>Esc — Pause / Menu</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-white/80">Mobile</h3>
            <ul className="space-y-1 text-white/70">
              <li>Left joystick — Move</li>
              <li>Swipe — Look</li>
              <li>Tap — Interact</li>
              <li>Hold — Run</li>
            </ul>
          </div>
          <div className="md:col-span-2 rounded-lg bg-amber-500/10 p-4 text-amber-300 ring-1 ring-amber-400/20">
            Avoid lights and noise. Shadow creatures patrol, investigate sound, and chase on sight. Tokens pulse when nearby.
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 border-t border-white/10 p-4">
          <button onClick={onClose} className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900">
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlsOverlay;
