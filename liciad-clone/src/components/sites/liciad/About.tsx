"use client";

import { A, SOURCE } from "./data";
import { useScrollFx } from "./useScrollFx";

export function About() {
  const imgRef = useScrollFx<HTMLImageElement>({ translateSpeed: 0.4, direction: "negative" });
  const videoRef = useScrollFx<HTMLVideoElement>({ translateSpeed: 0.5 });

  return (
    <section className="lc-about lc-wrap">
      <div className="lc-inner-1400 lc-about__inner">
        <div className="lc-about__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={imgRef} className="lc-about__img" src={A("2025/01/2024LICI_198.png")} alt="" />
          <video
            ref={videoRef}
            className="lc-about__video"
            src={A("2024/01/Afb5-45F3-855F-1F3e9862342a-1-11.mp4")}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="lc-about__text">
          <h3 className="lc-works__eyebrow" style={{ marginTop: 0 }}>
            O nás
          </h3>
          <h3 className="lc-h-large lc-grad-2 lc-about__title">
            Kreativita
            <br />
            spája zábavu
          </h3>
          <p className="lc-about__p">
            Ako tím mladých marketingových nadšencov sa riadime heslom “Kreativita je inteligencia, ktorá zabáva“.
          </p>
          <a href={`${SOURCE}/about-us/`} className="lc-btn">
            Spoznaj agentúru
          </a>
        </div>
      </div>
    </section>
  );
}
