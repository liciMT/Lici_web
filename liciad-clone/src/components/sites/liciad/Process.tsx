import { A, process, teamPhotos } from "./data";
import { Swash } from "./Chips";
import { CMark } from "./ui";

export function Process() {
  return (
    <section className="lc-process" aria-labelledby="lc-process-title">
      <div className="lc-gridlines lc-gridlines--center" aria-hidden="true">
        <span />
      </div>
      <div className="lc-wrap">
        <header className="lc-process__head" data-rv>
          <CMark className="lc-process__star" />
          <h2 id="lc-process-title" className="lc-h2">
            Sústredený proces postavený na spolupráci a <Swash tone="red">tempe.</Swash>
          </h2>
          <p>Otvorene a zrozumiteľne - vždy budete vedieť, čo riešime, prečo dáva smer zmysel a čo príde ďalej.</p>
        </header>

        <ol className="lc-process__grid">
          {process.map((p, i) => (
            <li key={p.step} className={`lc-step lc-step--${i}`} data-rv style={{ ["--d" as string]: `${i * 90}ms` }}>
              <span className="lc-step__visual" aria-hidden="true">
                {i === 0 && (
                  <span className="lc-step__dots">
                    {Array.from({ length: 10 }).map((_, k) => (
                      <i key={k} />
                    ))}
                  </span>
                )}
                {(i === 1 || i === 3) && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={A(teamPhotos[i === 1 ? 3 : 6])} alt="" loading="lazy" />
                )}
                {i === 2 && (
                  <span className="lc-step__bars">
                    {Array.from({ length: 14 }).map((_, k) => (
                      <i key={k} />
                    ))}
                  </span>
                )}
              </span>
              <span className="lc-step__body">
                <span className="lc-tag lc-tag--soft">
                  {p.step} / {p.title}
                </span>
                <p>{p.text}</p>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
