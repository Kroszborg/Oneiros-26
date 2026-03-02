import { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Map from './components/Map';

/**
 * Rendering order (z-index stack):
 *
 *   z-index 999  →  Preloader (video, fullscreen, unmounts after completion)
 *   z-index  50  →  Navbar (fixed, liquid glass, always above canvas)
 *   z-index  40  →  HUD / joystick / state badge (in index.html)
 *   z-index   2  →  Three.js canvas (Map.tsx, fixed, full viewport)
 */
export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    // Root: fixed, full viewport, black background
    <div style={{ position: 'fixed', inset: 0, background: '#000' }}>

      {/* ── PRELOADER (video + progress bar) ─────────────────────────────── */}
      {/* Stays mounted until onComplete fires, then fades out and unmounts */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* ── MAIN EXPERIENCE ───────────────────────────────────────────────── */}
      {/* Both Map and Navbar mount only after the preloader finishes.        */}
      {preloaderDone && (
        <>
          {/* Three.js 3D world — fills the full viewport at z-index 2 */}
          <Map />

          {/* Navbar — fixed at top, z-index 50 (above canvas and HUD) */}
          <Navbar />
        </>
      )}
    </div>
  );
}
