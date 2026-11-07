"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { A, heroSlides } from "./data";

const DELAY = 5000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = heroSlides.length;

  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), DELAY);
  }, [count]);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [restart]);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + count) % count);
    restart();
  };

  return (
    <section className="lc-hero" aria-label="Úvod">
      {heroSlides.map((slide, i) => (
        <div key={slide.word} className={`lc-hero__slide${i === index ? " is-active" : ""}`} aria-hidden={i !== index}>
          <video className="lc-hero__video lc-hero__video--desktop" src={A(slide.desktop)} autoPlay muted loop playsInline />
          <video className="lc-hero__video lc-hero__video--mobile" src={A(slide.mobile)} autoPlay muted loop playsInline />
        </div>
      ))}
      <div className="lc-hero__overlay">
        <div className="lc-hero__content">
          <div className="lc-hero__row1">We take</div>
          <div className="lc-hero__row2">personally</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lc-hero__line" src={A("2023/12/hero-line.png")} alt="" />
        </div>
        <div className="lc-hero__words">
          {heroSlides.map((slide, i) => (
            <h1 key={slide.word} className={`lc-hero__word${i === index ? " is-active" : ""}`} aria-hidden={i !== index}>
              {slide.word}
            </h1>
          ))}
        </div>
        <div className="lc-hero__bottom">
          <p className="lc-hero__desc">
            Sme fullservisová reklamná agentúra, ktorá pomáha značkám rásť prostredníctvom inovatívnych stratégií.
          </p>
          <div className="lc-hero__nav">
            <button
              type="button"
              className="lc-hero__arrow"
              style={{ backgroundImage: `url(${A("icons/arrow_right.svg")})` }}
              aria-label="Predošlé"
              onClick={() => go(-1)}
            />
            <div className="lc-hero__count">
              {index + 1} / {count}
            </div>
            <button
              type="button"
              className="lc-hero__arrow"
              style={{ backgroundImage: `url(${A("icons/arrow_left.svg")})` }}
              aria-label="Ďalšie"
              onClick={() => go(1)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
