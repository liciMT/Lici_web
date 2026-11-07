"use client";

import { useEffect, useRef, useState } from "react";
import { A, contactHref, counters, heroSlides, introText, teamPhotos } from "./data";
import { Btn, Marquee } from "./ui";
import { marqueeServices } from "./data";

/**
 * Dark storytelling chapter: a sticky stage where scrolling walks through the
 * six crafts (word list on the left, matching video on the right), followed by
 * the agency intro and key numbers.
 */
export function Story() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const count = heroSlides.length;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(0.999, Math.max(0, -rect.top / total)) : 0;
      setActive(Math.floor(p * count));
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
  }, [count]);

  return (
    <section className="lc-story" aria-labelledby="lc-story-title">
      <Marquee items={marqueeServices} tone="paper" />

      <div className="lc-story__track" ref={trackRef} style={{ ["--n" as string]: count }}>
        <div className="lc-story__stage">
          <div className="lc-wrap lc-story__wrap">
            <div className="lc-story__meta">
              <span className="lc-story__count" aria-hidden="true">
                <b>0{active + 1}</b> / 0{count}
              </span>
            </div>

            <div className="lc-story__body">
              <h2 id="lc-story-title" className="lc-sr">Čo robíme</h2>
              <ol className="lc-story__words">
                {heroSlides.map((s, i) => (
                  <li
                    key={s.word}
                    className={i === active ? "is-active" : i < active ? "is-past" : undefined}
                    aria-current={i === active || undefined}
                  >
                    {s.word}
                    <sup>0{i + 1}</sup>
                  </li>
                ))}
              </ol>
              <div className="lc-story__media">
                {heroSlides.map((s, i) => (
                  <video
                    key={s.word}
                    className={i === active ? "is-active" : undefined}
                    src={A(s.desktop)}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload={i === 0 ? "auto" : "metadata"}
                    aria-hidden="true"
                  />
                ))}
                <span className="lc-tag lc-tag--teal lc-story__tag">{heroSlides[active].word}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lc-wrap lc-story__intro">
        <figure className="lc-story__photo" data-rv>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A(teamPhotos[0])} alt="Tím LIČI AD pri práci v kancelárii" loading="lazy" />
        </figure>
        <div className="lc-story__text" data-rv style={{ ["--d" as string]: "120ms" }}>
          <h3 className="lc-h2">Do každého projektu vkladáme <mark className="lc-hl lc-hl--teal">kus seba.</mark></h3>
          <p>{introText}</p>
          <Btn href={contactHref} variant="paper">
            Pridajte sa k nám
          </Btn>
        </div>
      </div>

      <div className="lc-wrap">
        <ul className="lc-stats">
          {counters.map((c, i) => (
            <li key={c.label} data-rv style={{ ["--d" as string]: `${i * 90}ms` }}>
              <Counter to={c.to} decimals={c.decimals} suffix={c.suffix} />
              <strong>{c.label}</strong>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Counter({ to, decimals, suffix }: { to: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const numRef = useRef<HTMLSpanElement | null>(null);
  const fmt = (v: number) => v.toFixed(decimals).replace(".", ",");

  // Counts up once on first view. Writes straight to the DOM (no re-render per frame);
  // server/no-JS/reduced-motion output is the final value.
  useEffect(() => {
    const el = ref.current;
    const num = numRef.current;
    if (!el || !num || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const format = (v: number) => v.toFixed(decimals).replace(".", ",");
    num.textContent = format(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const k = Math.min(1, (t - start) / dur);
          num.textContent = format(to * (1 - Math.pow(1 - k, 4)));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      num.textContent = format(to);
    };
  }, [to, decimals]);

  return (
    <span className="lc-stats__num" ref={ref} role="img" aria-label={`${fmt(to)}${suffix}`}>
      <span aria-hidden="true">
        <span ref={numRef}>{fmt(to)}</span>
        <em>{suffix}</em>
      </span>
    </span>
  );
}
