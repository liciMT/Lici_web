"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { A, gang } from "./data";

function syncVideos(swiper: SwiperType) {
  if (!swiper || swiper.destroyed || !swiper.slides) return;
  swiper.slides.forEach((slide, i) => {
    const video = slide.querySelector("video");
    if (!video) return;
    if (i === swiper.activeIndex) void video.play().catch(() => undefined);
    else video.pause();
  });
}

export function MeetTheGang() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeHref, setActiveHref] = useState(gang[0].href);

  return (
    <section className="lc-gang lc-wrap">
      <div className="lc-inner-1200 lc-gang__inner">
        <div className="lc-gang__left">
          <h2 className="lc-gang__meet lc-grad">MEET</h2>
          <h3 className="lc-gang__title lc-grad-2">THE GANG</h3>
          <svg className="lc-gang__swoosh" width="250" height="31" viewBox="0 0 250 31" fill="none" aria-hidden="true">
            <path d="M2.24802 7.44082C27.8207 4.38327 103.654 -0.42193 202.404 4.81766" stroke="url(#lcg0)" strokeWidth="3" strokeLinecap="round" />
            <path d="M57.4687 17.9771C75.6609 14.3872 130.065 6.77082 202.145 5.02499" stroke="url(#lcg1)" strokeWidth="3" strokeLinecap="round" />
            <path d="M58.0701 17.9157C82.6393 16.3712 155.05 15.8348 248.142 26.045" stroke="url(#lcg2)" strokeWidth="3" strokeLinecap="round" />
            <defs>
              {[
                ["lcg0", "199.383", "3.93468", "179.85", "64.8292"],
                ["lcg1", "199.862", "4.56474", "189.89", "48.3942"],
                ["lcg2", "245.369", "25.0469", "222.837", "82.7126"],
              ].map(([id, x1, y1, x2, y2]) => (
                <linearGradient key={id} id={id} x1={x1} y1={y1} x2={x2} y2={y2} gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34B7C9" />
                  <stop offset="0.325409" stopColor="#715BA3" />
                  <stop offset="0.617496" stopColor="#9C3F78" />
                  <stop offset="1" stopColor="#D61A40" />
                </linearGradient>
              ))}
            </defs>
          </svg>
          <p className="lc-gang__text">A kto sú LIČI ľudia? Spoznajte svetlé aj temné stránky nášho tímu v Meet The Gang.</p>
        </div>
        <div className="lc-gang__slider">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            spaceBetween={50}
            centeredSlides
            slidesPerView={2.2}
            loop
            autoplay={{ delay: 30000 }}
            effect="coverflow"
            coverflowEffect={{ rotate: 0, depth: 200, slideShadows: false }}
            onSwiper={(s) => {
              swiperRef.current = s;
              syncVideos(s);
            }}
            onSlideChange={(s) => {
              setActiveHref(gang[s.realIndex].href);
              setTimeout(() => syncVideos(s), 300);
            }}
          >
            {gang.map((g) => (
              <SwiperSlide key={g.video}>
                <video src={A(g.video)} poster={A(g.poster)} muted loop playsInline preload="metadata" />
              </SwiperSlide>
            ))}
          </Swiper>
          <a className="lc-gang__fade" href={activeHref} aria-label="Meet The Gang na Instagrame" />
          <button
            type="button"
            className="lc-arrow lc-arrow--prev"
            style={{ backgroundImage: `url(${A("icons/arrow_back_ios.png")})` }}
            aria-label="Predošlý člen tímu"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <button
            type="button"
            className="lc-arrow lc-arrow--next"
            style={{ backgroundImage: `url(${A("icons/arrow_front_ios.png")})` }}
            aria-label="Ďalší člen tímu"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </section>
  );
}
