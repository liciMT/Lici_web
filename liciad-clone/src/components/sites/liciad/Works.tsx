"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { A, SOURCE, works, type Work } from "./data";
import { Btn } from "./ui";

const featured = works.slice(0, 6);

export function Works() {
  return (
    <section className="lc-works" id="prace" aria-labelledby="lc-works-title">
      <div className="lc-wrap">
        <header className="lc-head" data-rv>
          <div>
            <h2 id="lc-works-title" className="lc-h2">
              Nápady, ktoré <mark className="lc-hl lc-hl--teal">ožili.</mark>
            </h2>
          </div>
          <p className="lc-head__lead">
            Každý projekt začína otázkou a končí kampaňou, ktorá spája značku s ľuďmi. Toto je výber z našej
            tvorby.
          </p>
        </header>

        <div className="lc-works__grid">
          {featured.map((w, i) => (
            <WorkCard key={w.href} work={w} index={i} />
          ))}
        </div>

        <div className="lc-center" data-rv>
          <Btn href={`${SOURCE}/works/`}>Zobraziť všetky práce</Btn>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work: w, index }: { work: Work; index: number }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play only while on screen - keeps six simultaneous videos off the main thread.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !reduce) void v.play().catch(() => undefined);
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <a href={w.href} className="lc-work" data-rv style={{ ["--d" as string]: `${(index % 2) * 100}ms` }}>
      <span className="lc-work__media">
        {w.video ? (
          <video ref={videoRef} src={A(w.video)} poster={w.poster ? A(w.poster) : undefined} muted loop playsInline preload="metadata" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={A(w.image!)} alt="" loading="lazy" />
        )}
        <span className="lc-work__mark" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="lc-work__tags">{w.tags.slice(0, 2).join(" / ")}</span>
      </span>
      <span className="lc-work__info">
        <span>
          <strong>{w.name}</strong>
          <small>{w.excerpt}</small>
        </span>
        <span className="lc-work__cta">
          Pozrieť projekt <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}
