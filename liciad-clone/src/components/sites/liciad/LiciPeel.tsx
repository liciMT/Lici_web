"use client";

import { useEffect, useRef } from "react";
import { A } from "./data";

export const FRAMES = 145;
const SIZE = 560;
type Variant = "biela";
export const src = (v: Variant, i: number) => A(`lici-peel/${v}/${String(i + 1).padStart(3, "0")}.webp`);

/**
 * Hand-drawn lychee that peels as you scroll. Frames are painted to a canvas.
 * - `variant`: "biela" (pale line art, for teal / red backgrounds).
 * - `mode="track"`: inside a sticky stage; follows the scroll through `.lc-story__track`.
 * - `mode="aside"`: inside the sticky services aside, peels while the cards pass;
 *   when the aside is static (tablet / phone) it follows the canvas position.
 */
export function LiciPeel({
  className = "",
  variant = "biela",
  mode = "aside",
}: {
  className?: string;
  variant?: Variant;
  mode?: "aside" | "track";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const images: HTMLImageElement[] = [];
    let current = -1;
    let raf = 0;
    let loaded = false;

    const draw = (i: number) => {
      // Fall back to the nearest frame that has already arrived.
      for (let k = i; k >= 0; k--) {
        const img = images[k];
        if (img?.complete && img.naturalWidth) {
          if (k === current) return;
          current = k;
          ctx.clearRect(0, 0, SIZE, SIZE);
          ctx.drawImage(img, 0, 0, SIZE, SIZE);
          return;
        }
      }
    };

    const progress = () => {
      const vh = window.innerHeight;
      if (mode === "track") {
        const t = canvas.closest(".lc-story__track");
        if (t) {
          const r = t.getBoundingClientRect();
          return -r.top / Math.max(1, r.height - vh);
        }
      }
      const aside = canvas.closest(".lc-services__aside");
      const sticky = aside && getComputedStyle(aside).position === "sticky";
      const track = sticky ? canvas.closest(".lc-services__layout") : null;
      if (aside && track) {
        // From the layout entering (70 % down) until the sticky aside is released at its end.
        const r = track.getBoundingClientRect();
        const done = vh * 0.7 - r.top;
        const left = r.bottom - aside.getBoundingClientRect().bottom;
        return done / Math.max(1, done + left);
      }
      const r = canvas.getBoundingClientRect();
      // Static aside: peel while the canvas travels from the bottom edge to near the top.
      return (vh - r.top) / (vh * 0.9);
    };

    const update = () => {
      raf = 0;
      const p = Math.min(1, Math.max(0, progress()));
      draw(Math.round(p * (FRAMES - 1)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const load = () => {
      if (loaded) return;
      loaded = true;
      if (reduce) {
        // Static: show the peeled fruit, no scroll scrubbing.
        const img = new Image();
        img.onload = () => ctx.drawImage(img, 0, 0, SIZE, SIZE);
        img.src = src(variant, FRAMES - 1);
        return;
      }
      for (let i = 0; i < FRAMES; i++) {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          if (i <= Math.round(Math.min(1, Math.max(0, progress())) * (FRAMES - 1))) onScroll();
        };
        img.src = src(variant, i);
        images[i] = img;
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      onScroll();
    };

    // Only fetch the frames once the section is close.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(canvas);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [variant, mode]);

  return <canvas ref={canvasRef} className={`lc-peel ${className}`} width={SIZE} height={SIZE} aria-hidden="true" />;
}
