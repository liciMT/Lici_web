import { A, contactHref, works } from "./data";
import { UiChip } from "./Chips";
import { Avatars, Btn, Parallax } from "./ui";

const stack = [works[4], works[1], works[0]]; // back → front

export function Hero() {
  return (
    <section className="lc-hero" id="top" aria-labelledby="lc-hero-title">
      <div className="lc-gridlines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="lc-wrap">
        <div className="lc-hero__meta" data-rv>
          <span className="lc-hero__status">
            <i aria-hidden="true" />
            Prijímame nové projekty na rok 2027
          </span>
        </div>

        <div className="lc-hero__grid">
          <div className="lc-hero__copy">
            <h1 id="lc-hero-title" className="lc-hero__title" data-rv style={{ ["--d" as string]: "80ms" }}>
              <span className="lc-line">
                Reklamu berieme <mark className="lc-hl lc-hl--teal">osobne</mark>
              </span>{" "}
              <span className="lc-line">
                <Avatars count={3} size="lg" /> a tvoríme
              </span>{" "}
              <span className="lc-line">
                značky, <span className="lc-hl-dots" aria-hidden="true"><i /><i /><i /></span> ktoré
              </span>{" "}
              <span className="lc-line">
                <mark className="lc-hl lc-hl--red">rastú.</mark>
              </span>
            </h1>
            <p className="lc-hero__lead" data-rv style={{ ["--d" as string]: "180ms" }}>
              Sme fullservisová reklamná agentúra s viac ako 10-ročnými skúsenosťami. Od prvej myšlienky po
              finálnu kampaň prinášame stratégiu, charakter a remeslo do každého detailu.
            </p>
            <div className="lc-hero__actions" data-rv style={{ ["--d" as string]: "260ms" }}>
              <Btn href="#prace">Pozrieť naše práce</Btn>
              <Btn href={contactHref} variant="teal">
                Začať projekt
              </Btn>
            </div>
          </div>

          <div className="lc-hero__stack" data-rv style={{ ["--d" as string]: "200ms" }}>
            <Parallax className="lc-hero__layer" distance={60} rotate={2}>
            {stack.map((w, i) => (
              <a
                key={w.href}
                href={w.href}
                className={`lc-hero__card lc-hero__card--${i}`}
                tabIndex={i === 2 ? 0 : -1}
                aria-hidden={i !== 2 || undefined}
                aria-label={i === 2 ? `${w.name} - ${w.excerpt}` : undefined}
              >
                {w.video ? (
                  <video src={A(w.video)} poster={w.poster ? A(w.poster) : undefined} autoPlay muted loop playsInline preload="metadata" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={A(w.image!)} alt="" />
                )}
                {i === 2 && (
                  <span className="lc-hero__caption">
                    <span>
                      <strong>{w.name}</strong>
                      <small>{w.excerpt}</small>
                    </span>
                    <span className="lc-tag lc-tag--red">Featured</span>
                  </span>
                )}
              </a>
            ))}
            </Parallax>
            <UiChip tone="red" icon="heart" tail rotate={-8} delay={1.1} className="lc-hero__chip lc-hero__chip--like">
              1 248
            </UiChip>
            <UiChip tone="teal" icon="save" iconAfter rotate={6} delay={1.35} className="lc-hero__chip lc-hero__chip--save">
              Uložiť
            </UiChip>
          </div>
        </div>
      </div>
    </section>
  );
}
