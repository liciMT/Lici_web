"use client";

import { useScrollFx } from "./useScrollFx";

export function Values() {
  const titleRef = useScrollFx<HTMLHeadingElement>({ fadeOutInOut: true });
  const textRef = useScrollFx<HTMLParagraphElement>({ fadeOutInOut: true });

  return (
    <section className="lc-values lc-wrap">
      <div className="lc-inner-1400 lc-values__inner">
        <h2 ref={titleRef} className="lc-values__title">
          Naše
          <br />
          hodnoty
        </h2>
        <p ref={textRef} className="lc-values__text">
          Zakladáme si na dôvere, vytrvalosti a hľadaní riešení. Neustále testujeme nové moderné riešenia, ktoré sú kľúčom
          nielen k spokojnosti klientov, ale aj k napredovaniu a vzdelávaniu.
        </p>
      </div>
    </section>
  );
}
