import { A, instagram } from "./data";
import { Btn } from "./ui";

export function Instagram() {
  return (
    <section className="lc-insta" aria-labelledby="lc-insta-title">
      <div className="lc-wrap">
        <header className="lc-head" data-rv>
          <div>
            <h2 id="lc-insta-title" className="lc-h2">
              Zo zákulisia <mark className="lc-hl lc-hl--blue">@licisk</mark>
            </h2>
          </div>
          <Btn href="https://www.instagram.com/licisk/" variant="ghost" external>
            Sledovať nás
          </Btn>
        </header>
        <ul className="lc-insta__grid">
          {instagram.slice(0, 12).map((p, i) => (
            <li key={p.src} data-rv style={{ ["--d" as string]: `${(i % 6) * 50}ms` }}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Príspevok na Instagrame ${i + 1}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={A(p.src)} alt="" loading="lazy" />
                {p.type === "video" && (
                  <span className="lc-insta__type" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
