import { Clapperboard, Fingerprint, Lightbulb, Megaphone, MonitorSmartphone, Printer, TrendingUp, type LucideIcon } from "lucide-react";
import { SOURCE, contactHref, disciplines } from "./data";
import { Avatars, Btn } from "./ui";

const icons: LucideIcon[] = [Fingerprint, Lightbulb, Megaphone, MonitorSmartphone, Clapperboard, Printer, TrendingUp];
// Card tones cycle through the brand palette (section background is teal, so no teal cards).
const tones = ["ink", "paper", "blue", "red", "paper", "ink", "blue"] as const;

export function Services() {
  return (
    <section className="lc-services" id="sluzby" aria-labelledby="lc-services-title">
      <div className="lc-wrap">
        <header className="lc-services__head" data-rv>
          <h2 id="lc-services-title" className="lc-h2">
            Pomáhame značkám byť ľahšie rozpoznateľné, pochopiteľné a <mark className="lc-hl lc-hl--red">vybrané.</mark>
          </h2>
        </header>

        <div className="lc-services__layout">
          <aside className="lc-services__aside" data-rv>
            <div className="lc-services__float">
              <Avatars count={4} size="md" />
              <span className="lc-tag lc-tag--ink">Všetko pod jednou strechou</span>
            </div>
            <p className="lc-services__big" aria-hidden="true">
              07
            </p>
            <p className="lc-services__note">Disciplín pod jednou strechou - od prvého nápadu po finálnu kampaň.</p>
          </aside>

          <ul className="lc-services__grid">
            {disciplines.map((d, i) => {
              const Icon = icons[i];
              return (
                <li key={d.href} data-rv style={{ ["--d" as string]: `${(i % 2) * 90}ms` }}>
                  <a href={`${SOURCE}/services/${d.href}/`} className={`lc-svc lc-svc--${tones[i]}`}>
                    <span className="lc-svc__top">
                      <span className="lc-svc__num">0{i + 1}</span>
                      <span className="lc-svc__icon">
                        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                    </span>
                    <span className="lc-svc__body">
                      <strong>{d.name}</strong>
                      <span>{d.text}</span>
                    </span>
                  </a>
                </li>
              );
            })}
            <li data-rv style={{ ["--d" as string]: "90ms" }}>
              <div className="lc-svc lc-svc--outline">
                <span className="lc-svc__top">
                  <span className="lc-svc__num">+</span>
                </span>
                <span className="lc-svc__body">
                  <strong>Máte iný nápad?</strong>
                  <span>Povedzte nám, čo potrebujete. Riešenie na mieru vymyslíme spolu.</span>
                  <Btn href={contactHref}>Napíšte nám</Btn>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
