import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-b-2xl bg-black">
      <Spline
        scene="https://prod.spline.design/fvh1rcczCU4MCcKH/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Atmosphere overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-10 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Cursed Manor</h1>
        <p className="mt-2 max-w-2xl text-sm md:text-base text-white/80">
          Explore a low-poly haunted manor. Collect five cursed tokens, avoid the shadow patrols, survive the final gate.
        </p>
      </div>
    </section>
  );
};

export default HeroCover;
