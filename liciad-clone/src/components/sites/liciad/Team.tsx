"use client";

import { useRef } from "react";
import { A, gang, marqueeValues } from "./data";
import { Btn, Marquee } from "./ui";

const points = ["Nezávislý kreatívny partner", "Stratégia na prvom mieste", "Spolupráca od prvého dňa", "Dlhodobý rast značky"];

export function Team() {
  return (
    <section className="lc-team" id="tim" aria-labelledby="lc-team-title">
      <Marquee items={marqueeValues} tone="paper" reverse speed={46} />
      <div className="lc-wrap">
        <div className="lc-team__top">
          <div data-rv>
            <h2 id="lc-team-title" className="lc-h1">
              Malý tím.
              <br />
              Veľké nápady.
              <br />
              <span className="lc-teal">Osobný prístup.</span>
            </h2>
            <p className="lc-team__lead">
              A kto sú LIČI ľudia? Spoznajte svetlé aj temné stránky nášho tímu v sérii Meet The Gang.
            </p>
            <Btn href="https://www.instagram.com/licisk/" variant="teal" external>
              Sledovať na Instagrame
            </Btn>
          </div>
          <ol className="lc-team__points" data-rv style={{ ["--d" as string]: "120ms" }}>
            {points.map((p, i) => (
              <li key={p}>
                <span>0{i + 1}</span>
                {p}
                <i aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>

        <ul className="lc-team__reel" aria-label="Videá Meet The Gang">
          {gang.map((g, i) => (
            <GangCard key={g.video} g={g} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function GangCard({ g, i }: { g: (typeof gang)[number]; i: number }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const play = () => void ref.current?.play().catch(() => undefined);
  const stop = () => ref.current?.pause();
  return (
    <li data-rv style={{ ["--d" as string]: `${i * 70}ms` }}>
      <a
        href={g.href}
        target="_blank"
        rel="noopener noreferrer"
        className="lc-gang"
        onMouseEnter={play}
        onMouseLeave={stop}
        onFocus={play}
        onBlur={stop}
        aria-label={`Meet The Gang: ${g.name} (Instagram)`}
      >
        <video ref={ref} src={A(g.video)} poster={A(g.poster)} muted loop playsInline preload="none" />
        <span className="lc-gang__play" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </a>
    </li>
  );
}
