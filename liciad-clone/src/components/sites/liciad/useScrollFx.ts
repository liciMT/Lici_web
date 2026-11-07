"use client";

import { useEffect, useRef } from "react";

type ScrollFx = {
  /** Elementor motion-fx translateY speed (px per percent of viewport travel / 10). */
  translateSpeed?: number;
  /** "negative" moves the element against the scroll direction. */
  direction?: "positive" | "negative";
  /** Elementor "out-in-out" opacity with a 20–80% fully-visible range. */
  fadeOutInOut?: boolean;
};

/**
 * Re-creates Elementor Pro "Scrolling effects" (motion fx) used on the source page:
 * the element's progress through the viewport (0 at entry, 1 at exit) drives
 * translateY and/or opacity.
 */
export function useScrollFx<T extends HTMLElement>({ translateSpeed = 0, direction = "positive", fadeOutInOut = false }: ScrollFx) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
      const sign = direction === "negative" ? -1 : 1;
      if (translateSpeed) {
        const y = (progress * 100 - 50) * translateSpeed * sign * -1;
        el.style.transform = `translateY(${y.toFixed(2)}px)`;
      }
      if (fadeOutInOut) {
        const o = progress < 0.2 ? progress / 0.2 : progress > 0.8 ? (1 - progress) / 0.2 : 1;
        el.style.opacity = o.toFixed(3);
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [translateSpeed, direction, fadeOutInOut]);

  return ref;
}
