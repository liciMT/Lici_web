"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { A, reviews } from "./data";

export function Reviews() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="lc-reviews lc-wrap">
      <div className="lc-inner-1400 lc-reviews__inner">
        <h2 className="lc-reviews__title">
          Čo o nás hovoria
          <br />
          naši klienti?
        </h2>
        <div className="lc-reviews__slider">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            loop
            autoplay={{ delay: 5000 }}
            onSwiper={(s) => {
              swiperRef.current = s;
            }}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.name}>
                <div className="lc-review">
                  <div className="lc-review__text">{r.text}</div>
                  <div className="lc-review__footer">
                    <div className="lc-review__col">
                      <div className="lc-review__name">{r.name}</div>
                      <div className="lc-review__position">{r.position}</div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="lc-review__logo" src={A(r.logo)} alt="Logo firmy" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            type="button"
            className="lc-arrow lc-arrow--prev"
            style={{ backgroundImage: `url(${A("icons/arrow_right.svg")})` }}
            aria-label="Predošlá recenzia"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <button
            type="button"
            className="lc-arrow lc-arrow--next"
            style={{ backgroundImage: `url(${A("icons/arrow_left.svg")})` }}
            aria-label="Ďalšia recenzia"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </section>
  );
}
