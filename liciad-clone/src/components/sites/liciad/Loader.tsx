"use client";

import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FRAMES, src } from "./LiciPeel";

const SIZE = 560;
/** Never flash: the loader stays at least this long even when everything is cached. */
const MIN_MS = 1600;
const EASE = [0.22, 1, 0.36, 1] as const;

// Critical styles inline, so the red screen paints on the very first frame even
// before (or without) the stylesheet - otherwise only the bare "00 %" text shows.
const overlayStyle = {
  position: "fixed",
  inset: 0,
  zIndex: 200,
  display: "grid",
  placeItems: "center",
  background: "#dc2c54",
  color: "#fafafa",
} as const;
const innerStyle = { display: "grid", justifyItems: "center", gap: 8 } as const;
const pctStyle = { display: "flex", alignItems: "flex-start", gap: 4, fontSize: "clamp(56px, 9vw, 112px)", fontWeight: 700, lineHeight: 0.9 } as const;
const canvasStyle = { width: "min(62vw, 46svh, 420px)", aspectRatio: "1", rotate: "-10deg" } as const;

/**
 * Homepage loading screen: full red screen, the pale lychee peels in step with
 * the load percentage (it preloads the same frames the page uses later), then
 * the red melts down off the screen and the page reveal starts.
 */
export function Loader() {
  const [done, setDone] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shown = useMotionValue(0); // eased 0-100 that drives the number and the frames
  const label = useTransform(shown, (v) => String(Math.round(v)).padStart(2, "0"));
  const bar = useTransform(shown, [0, 100], [0, 1]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("lc-loading");
    window.scrollTo(0, 0);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvasRef.current?.getContext("2d");
    const images: HTMLImageElement[] = [];
    let loaded = 0;
    let pageReady = document.readyState === "complete";
    const started = performance.now();
    let target = 0;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      setTimeout(() => setDone(true), 280);
    };

    // Real progress: 85 % frames, 15 % window load. The shown value chases it smoothly.
    const push = () => {
      const real = (loaded / FRAMES) * 85 + (pageReady ? 15 : 0);
      const elapsed = performance.now() - started;
      // Cap by elapsed time so a warm cache still counts up instead of jumping.
      target = Math.min(real, (elapsed / MIN_MS) * 100);
      animate(shown, target, { duration: reduce ? 0 : 0.5, ease: EASE });
      if (target >= 100) finish();
    };

    for (let i = 0; i < FRAMES; i++) {
      const img = new Image();
      img.decoding = "async";
      img.onload = img.onerror = () => {
        loaded++;
        push();
      };
      img.src = src("biela", i);
      images[i] = img;
    }
    const onLoad = () => {
      pageReady = true;
      push();
    };
    window.addEventListener("load", onLoad);
    const tick = setInterval(push, 120);
    // Safety net: never hold the page for more than 8 s.
    const bail = setTimeout(() => {
      loaded = FRAMES;
      pageReady = true;
      target = 100;
      animate(shown, 100, { duration: 0.4 });
      finish();
    }, 8000);

    const draw = (v: number) => {
      if (!ctx) return;
      const want = Math.round((v / 100) * (FRAMES - 1));
      for (let k = want; k >= 0; k--) {
        const img = images[k];
        if (img?.complete && img.naturalWidth) {
          ctx.clearRect(0, 0, SIZE, SIZE);
          ctx.drawImage(img, 0, 0, SIZE, SIZE);
          return;
        }
      }
    };
    const unsub = shown.on("change", draw);

    return () => {
      unsub();
      clearInterval(tick);
      clearTimeout(bail);
      window.removeEventListener("load", onLoad);
      root.classList.remove("lc-loading");
    };
  }, [shown]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.documentElement.classList.remove("lc-loading");
        window.dispatchEvent(new Event("lc:loaded"));
      }}
    >
      {!done && (
        <motion.div
          key="loader"
          className="lc-loader"
          style={overlayStyle}
          role="status"
          aria-live="polite"
          aria-label="Načítavam stránku"
          initial={false}
          // The red "melts" downward: a curved top edge sweeps from the top to the bottom.
          exit={{
            clipPath: [
              "ellipse(160% 140% at 50% 100%)",
              "ellipse(160% 70% at 50% 100%)",
              "ellipse(160% 0% at 50% 100%)",
            ],
          }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], times: [0, 0.55, 1] }}
        >
          <motion.div
            className="lc-loader__inner"
            style={innerStyle}
            exit={{ opacity: 0, y: 40, scale: 0.94 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <canvas ref={canvasRef} className="lc-loader__lici" style={canvasStyle} width={SIZE} height={SIZE} aria-hidden="true" />
            <p className="lc-loader__pct" style={pctStyle}>
              <motion.span>{label}</motion.span>
              <small>%</small>
            </p>
          </motion.div>
          <motion.span
            className="lc-loader__bar"
            style={{ scaleX: bar }}
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
