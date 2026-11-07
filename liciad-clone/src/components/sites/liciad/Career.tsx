import { Mail } from "lucide-react";
import { A, counters, disciplines, email, marqueeServices, teamPhotos } from "./data";
import { Avatars, Btn, CMark, Marquee } from "./ui";

const applyHref = `mailto:${email}?subject=${encodeURIComponent("Kariéra - otvorená prihláška")}`;

const perks = [
  {
    title: "10+ rokov na trhu",
    text: "Stabilné zázemie a dlhoročné spolupráce so značkami ako Alpro, Slovnaft, METRO či Môjobchod.",
    tone: "paper",
  },
  {
    title: "Fullservis pod jednou strechou",
    text: "Stratégia, dizajn, digital, foto, video aj 3D - učíte sa od ľudí z každej disciplíny.",
    tone: "ink",
  },
  {
    title: "Vlastný ateliér",
    text: "Najmodernejšia high-end technika a priestor, kde nápady rovno vznikajú aj natáčajú.",
    tone: "blue",
  },
  {
    title: "We take it personally",
    text: "Malý tím, osobný prístup ku klientom aj k sebe navzájom. Do každého projektu vkladáme kus seba.",
    tone: "teal",
  },
] as const;

export function CareerHeroAside() {
  return (
    <div className="lc-hero__stack lc-phero__stack" data-rv style={{ ["--d" as string]: "200ms" }} aria-hidden="true">
      {[teamPhotos[4], teamPhotos[8], teamPhotos[1]].map((src, i) => (
        <span key={src} className={`lc-hero__card lc-hero__card--${i}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A(src)} alt="" />
          {i === 2 && (
            <span className="lc-hero__caption">
              <span>
                <strong>Život v LIČI</strong>
                <small>Bratislava, Fibichova 9</small>
              </span>
              <span className="lc-tag lc-tag--teal">Hiring</span>
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export function CareerWhy() {
  return (
    <section className="lc-why" aria-labelledby="lc-why-title">
      <Marquee items={marqueeServices} tone="paper" />
      <div className="lc-wrap">
        <header className="lc-why__head" data-rv>
          <h2 id="lc-why-title" className="lc-h2">
            Prečo práve LIČI?
          </h2>
          <p>Hľadáme ľudí, ktorí zdieľajú našu vášeň pre inovácie a tvorbu jedinečných kampaní.</p>
        </header>
        <ul className="lc-why__grid">
          {perks.map((p, i) => (
            <li key={p.title} className={`lc-perk lc-perk--${p.tone}`} data-rv style={{ ["--d" as string]: `${i * 80}ms` }}>
              <span className="lc-perk__num">0{i + 1}</span>
              <span className="lc-perk__body">
                <strong>{p.title}</strong>
                <span>{p.text}</span>
              </span>
            </li>
          ))}
        </ul>
        <ul className="lc-stats lc-why__stats">
          {counters.map((c, i) => (
            <li key={c.label} data-rv style={{ ["--d" as string]: `${i * 90}ms` }}>
              <span className="lc-stats__num">
                {c.to.toString().replace(".", ",")}
                <em>{c.suffix}</em>
              </span>
              <strong>{c.label}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CareerJobs() {
  return (
    <section className="lc-jobs" id="pozicie" aria-labelledby="lc-jobs-title">
      <div className="lc-wrap">
        <header className="lc-head" data-rv>
          <h2 id="lc-jobs-title" className="lc-h2">
            Pracovné <mark className="lc-hl lc-hl--teal">ponuky</mark>
          </h2>
          <p className="lc-head__lead">
            Pripojte sa k nám a pomôžte nám formovať budúcnosť marketingu.
          </p>
        </header>

        <div className="lc-jobs__layout">
          <div className="lc-jobs__empty" data-rv>
            <span className="lc-jobs__badge">
              <CMark />
            </span>
            <h3>Momentálne nemáme otvorené žiadne pozície</h3>
            <p>
              Ďakujeme za váš záujem o kariérne možnosti v našej agentúre. Stále však radi udržujeme kontakt s
              talentovanými ľuďmi, ktorí by mohli prispieť k našej budúcej expanzii.
            </p>
            <div className="lc-jobs__actions">
              <Btn href={applyHref}>Poslať otvorenú prihlášku</Btn>
              <a className="lc-jobs__mail" href={`mailto:${email}`}>
                <Mail size={18} aria-hidden="true" />
                {email}
              </a>
            </div>
          </div>

          <div className="lc-jobs__areas" data-rv style={{ ["--d" as string]: "120ms" }}>
            <h3>Oblasti, v ktorých tvoríme</h3>
            <ul>
              {disciplines.map((d) => (
                <li key={d.href}>{d.name}</li>
              ))}
              <li>3D vizuály</li>
              <li>Motion design</li>
            </ul>
            <div className="lc-jobs__people">
              <Avatars count={5} size="md" />
              <span>Nenašli ste svoju pozíciu? Napíšte nám, čo vás baví.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CareerLife() {
  const photos = teamPhotos.slice(0, 7);
  return (
    <section className="lc-life" aria-labelledby="lc-life-title">
      <div className="lc-wrap">
        <header className="lc-head" data-rv>
          <h2 id="lc-life-title" className="lc-h2">
            Život v <mark className="lc-hl lc-hl--red">LIČI</mark>
          </h2>
          <p className="lc-head__lead">Brainstormingy, natáčania aj tímové výjazdy. Takto to u nás vyzerá.</p>
        </header>
        <ul className="lc-life__grid">
          {photos.map((src, i) => (
            <li key={src} className={`lc-life__item lc-life__item--${i}`} data-rv style={{ ["--d" as string]: `${(i % 4) * 70}ms` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={A(src)} alt={`Tím LIČI AD - fotka ${i + 1}`} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
