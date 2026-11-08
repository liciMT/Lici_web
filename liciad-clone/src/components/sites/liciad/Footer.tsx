import { contactHref, email, footerLinks, legalLinks, phone } from "./data";
import { FooterFall } from "./FooterFall";
import { Logo, LogoMark } from "./ui";

const social = [
  { label: "Instagram", handle: "@licisk", href: "https://www.instagram.com/licisk/" },
  { label: "Facebook", handle: "licisk", href: "https://www.facebook.com/licisk" },
  { label: "LinkedIn", handle: "LIČI Advertising", href: "https://www.linkedin.com/company/li-i-advertising-studio/" },
];

export function Footer() {
  return (
    <footer className="lc-footer">
      <div className="lc-wrap">
        <div className="lc-footer__top">
          <div className="lc-footer__brand">
            <Logo dark />
            <p>
              LIČI AD je fullservisová reklamná agentúra pre značky, ktoré chcú rásť s nápadom a osobným
              prístupom.
            </p>
            <a className="lc-footer__mail" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
          <nav className="lc-footer__col" aria-label="Pätička - navigácia">
            <h3>Navigácia</h3>
            <ul>
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href={contactHref}>Kontakt</a>
              </li>
            </ul>
          </nav>
          <div className="lc-footer__col">
            <h3>Sledujte nás</h3>
            <ul>
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} - {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lc-footer__col">
            <h3>Kancelária</h3>
            <address>
              BOLDEN - LIČI AD s.r.o.
              <br />
              Fibichova 9, 821 05 Bratislava
              <br />
              Slovenská republika
            </address>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
          </div>
        </div>

        <div className="lc-footer__bottom">
          <span>© {new Date().getFullYear()} LIČI AD. Všetky práva vyhradené.</span>
          <ul>
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lc-footer__giant" aria-hidden="true">
          <div className="lc-footer__logo">
            <LogoMark className="lc-footer__word" />
          </div>
          <FooterFall className="lc-footer__fall" />
          <div className="lc-footer__chips">
            <span className="lc-tag lc-tag--teal lc-footer__chip lc-footer__chip--1">Kreatívna stratégia</span>
            <span className="lc-tag lc-tag--red lc-footer__chip lc-footer__chip--2">Foto a video</span>
            <span className="lc-tag lc-tag--teal lc-footer__chip lc-footer__chip--3">Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
