import { A, SOURCE, works } from "./data";

const SHADE = "linear-gradient(180deg, rgba(11,11,11,0.5) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(11,11,11,0.5) 100%)";

export function Works() {
  return (
    <section className="lc-works lc-wrap">
      <div className="lc-inner-1200 lc-works__inner">
        <h3 className="lc-works__eyebrow">Naše práce</h3>
        <h3 className="lc-h-large lc-grad-2 lc-works__title">
          Kreatívne riešenia,
          <br />
          ktoré zanechávajú dojem
        </h3>
        <div className="lc-grid">
          {works.map((w) => (
            <a
              key={w.href}
              href={w.href}
              className="lc-ref"
              style={{ backgroundImage: w.image ? `${SHADE}, url(${A(w.image)})` : SHADE }}
            >
              {w.video && (
                <>
                  <video className="lc-ref__video" src={A(w.video)} poster={w.poster ? A(w.poster) : undefined} autoPlay muted loop playsInline />
                  <div className="lc-ref__shade" />
                </>
              )}
              <div className="lc-ref__tags">
                {w.tags.map((t) => (
                  <div key={t} className="lc-ref__tag">
                    {t}
                  </div>
                ))}
              </div>
              <div className="lc-ref__info">
                <h4 className="lc-ref__name">{w.name}</h4>
                <div className="lc-ref__excerpt">{w.excerpt}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="lc-works__more">
          <a href={`${SOURCE}/works/`} className="lc-btn">
            Zobraziť všetky práce
            <svg viewBox="0 -960 960 960" aria-hidden="true">
              <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
