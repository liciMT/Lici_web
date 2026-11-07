"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { A, SOURCE, clientLogos, counters, disciplines, introText, teamPhotos } from "./data";
import { useScrollFx } from "./useScrollFx";

function useOffset() {
  // Source script: slidesOffsetBefore = (innerWidth - 1400) / 2 on wide screens, else 16.
  const [offset, setOffset] = useState(16);
  useEffect(() => {
    const calc = () => setOffset(window.innerWidth > 1400 ? (window.innerWidth - 1400) / 2 : 16);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return offset;
}

function Counter({ to, decimals, suffix, duration }: { to: number; decimals: number; suffix: string; duration: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          // Elementor counter uses jQuery "swing" easing.
          const eased = 0.5 - Math.cos(t * Math.PI) / 2;
          setValue(to * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <div ref={ref} className="lc-stat__num lc-grad">
      {value.toFixed(decimals)}
      {suffix}
    </div>
  );
}

export function Disciplines() {
  const offset = useOffset();
  const discRef = useRef<SwiperType | null>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const photosRef = useScrollFx<HTMLDivElement>({ translateSpeed: 1, fadeOutInOut: true });

  return (
    <section className="lc-disc">
      <div className="lc-disc__top">
        <div className="lc-disc__head">
          <div className="lc-inner-1200">
            <h3 className="lc-eyebrow">Naše disciplíny</h3>
            <div className="lc-disc__titleRow">
              <h3 className="lc-h-large lc-grad-2 lc-disc__title">Tvorba kampaní a kreatívnych stratégií pre váš úspech</h3>
              <div className="lc-disc__controls">
                <button
                  type="button"
                  className="lc-disc__arrow"
                  style={{ backgroundImage: `url(${A("icons/arrow_disciplines_left.png")})` }}
                  aria-label="Predošlá disciplína"
                  disabled={edges.start}
                  onClick={() => discRef.current?.slidePrev()}
                />
                <button
                  type="button"
                  className="lc-disc__arrow"
                  style={{ backgroundImage: `url(${A("icons/arrow_disciplines_right.png")})` }}
                  aria-label="Ďalšia disciplína"
                  disabled={edges.end}
                  onClick={() => discRef.current?.slideNext()}
                />
              </div>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          slidesOffsetBefore={offset}
          breakpoints={{
            576: { slidesPerView: 1.7 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
            1950: { slidesPerView: 6 },
            2200: { slidesPerView: 7 },
          }}
          onSwiper={(s) => {
            discRef.current = s;
            setEdges({ start: s.isBeginning, end: s.isEnd });
          }}
          onSlideChange={(s) => setEdges({ start: s.isBeginning, end: s.isEnd })}
          onResize={(s) => setEdges({ start: s.isBeginning, end: s.isEnd })}
        >
          {disciplines.map((d) => (
            <SwiperSlide key={d.name}>
              <div className="lc-discipline">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="lc-discipline__icon" src={A(d.icon)} alt="Ikona" />
                <div className="lc-discipline__name lc-grad-2">{d.name}</div>
                <div className="lc-discipline__text">{d.text}</div>
                <a className="lc-discipline__link" href={`${SOURCE}/services#${d.href}`}>
                  Viac o službe
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="lc-disc__intro">
          <p>{introText}</p>
        </div>
      </div>

      <div ref={photosRef} className="lc-photos">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.25}
          spaceBetween={20}
          slidesOffsetBefore={offset}
          loop
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1400: { slidesPerView: 5 },
          }}
        >
          {teamPhotos.map((src) => (
            <SwiperSlide key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={A(src)} alt="Obrázok" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lc-stats">
        {counters.map((c) => (
          <div key={c.label} className="lc-stat">
            <Counter to={c.to} decimals={c.decimals} suffix={c.suffix} duration={c.duration} />
            <p className="lc-stat__label lc-grad">{c.label}</p>
            <p className="lc-stat__text">{c.text}</p>
          </div>
        ))}
        <div className="lc-logos" aria-label="Klienti">
          <div className="lc-logos__track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={`${logo.src}-${i}`} className="lc-logos__item" aria-hidden={i >= clientLogos.length}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={A(logo.src)} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
