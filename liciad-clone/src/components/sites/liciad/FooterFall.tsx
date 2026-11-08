"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BASE = "/sites/liciad/footer/lici-fall";

/**
 * Lychees tumbling into a pile (red line art on a transparent video). It plays
 * once when the footer scrolls into view and then rests on its last frame.
 * VP9 alpha for Chromium/Firefox, HEVC alpha for WebKit (Safari has no VP9 alpha).
 */
export function FooterFall({ className = "" }: { className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const seen = useInView(box, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (!seen || reduce || !v) return;
    const ua = navigator.userAgent;
    const webkit = /AppleWebKit/.test(ua) && !/Chrome|Chromium|Edg|Android/.test(ua);
    v.src = `${BASE}.${webkit ? "mp4" : "webm"}`;
    v.play().catch(() => setFailed(true));
  }, [seen, reduce]);

  const still = reduce || failed;

  return (
    <div ref={box} className={`lc-fall ${className}`} aria-hidden="true">
      {still ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${BASE}-end.webp`} alt="" width={524} height={748} loading="lazy" decoding="async" />
      ) : (
        <video ref={video} muted playsInline preload="none" disablePictureInPicture onError={() => setFailed(true)} />
      )}
    </div>
  );
}
