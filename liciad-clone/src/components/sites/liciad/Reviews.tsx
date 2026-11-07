"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { A, clientLogos, reviews } from "./data";
import { Star } from "./ui";

const DELAY = 7000;

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = reviews.length;
  const go = useCallback((d: number) => setIndex((i) => (i + d + n) % n), [n]);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => go(1), DELAY);
    return () => clearInterval(t);
  }, [paused, go]);

  const r = reviews[index];

  return (
    <section className="lc-reviews" aria-labelledby="lc-reviews-title">
      <div className="lc-wrap">
        <div className="lc-logos" data-rv>
          <p>Dôverujú nám</p>
          <ul>
            {clientLogos.map((l) => (
              <li key={l.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={A(l.src)} alt={l.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>

        <div
          className="lc-review"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <h2 id="lc-reviews-title" className="lc-sr">
            Čo o nás hovoria klienti
          </h2>
          <div className="lc-review__card" data-rv>
            <div className="lc-review__logo" key={r.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={A(r.logo)} alt="" />
            </div>
            <span className="lc-tag lc-tag--teal">{r.brand}</span>
          </div>

          <div className="lc-review__body" data-rv style={{ ["--d" as string]: "120ms" }}>
            <Star className="lc-review__star" />
            <blockquote key={r.name} className="lc-review__quote" aria-live="polite">
              <p>“{r.text.replace(/^"|"$/g, "")}”</p>
              <footer>
                <strong>{r.name}</strong>
                <span>{r.position}</span>
              </footer>
            </blockquote>
            <div className="lc-review__nav">
              <button type="button" onClick={() => go(-1)} aria-label="Predošlá referencia">
                <ArrowLeft size={20} aria-hidden="true" />
              </button>
              <div className="lc-review__dots" role="tablist" aria-label="Vybrať referenciu">
                {reviews.map((rv, i) => (
                  <button
                    key={rv.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Referencia ${i + 1}: ${rv.name}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <button type="button" onClick={() => go(1)} aria-label="Ďalšia referencia">
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
