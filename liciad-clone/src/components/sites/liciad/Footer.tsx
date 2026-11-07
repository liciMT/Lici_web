import { contactHref, footerLinks, legalLinks } from "./data";

const social = [
  { label: "Facebook", href: "https://www.facebook.com/licisk", glyph: "" },
  { label: "Instagram", href: "https://www.instagram.com/licisk/", glyph: "" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/li-i-advertising-studio/mycompany/", glyph: "" },
];

export function Footer() {
  return (
    <footer className="lc-footer lc-wrap">
      <div className="lc-footer__inner">
        <h2 className="lc-footer__cta">
          Páči sa vám naša práca?
          <br />
          Vytvorme spolu niečo pekné.
        </h2>
        <a href={contactHref} className="lc-footer__btn">
          Záujem o spoluprácu
        </a>

        <div className="lc-footer__cols">
          <div>
            <h4 className="lc-footer__h">Kontaktujte nás</h4>
            <a className="lc-footer__big" href="mailto:sk@liciad.com">
              office@liciad.com
            </a>
            <a className="lc-footer__big" href="tel:+421238104999">
              +421 918 498 500
            </a>
            <h4 className="lc-footer__h lc-footer__keep">Keep in touch</h4>
            <div className="lc-footer__social">
              {social.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <span aria-hidden="true">{s.glyph}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="lc-footer__h">Office</h4>
            <p className="lc-footer__office">
              BOLDEN – LIČI AD s.r.o.
              <br />
              Fibichova 9
              <br />
              821 05 Bratislava
              <br />
              Slovenská republika
            </p>
          </div>
          <div>
            <h4 className="lc-footer__h">Užitočné odkazy</h4>
            <div className="lc-footer__links">
              <ul>
                {footerLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={l.active ? "is-active" : undefined}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="lc-footer__legal">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lc-footer__bottom">
          <h4 className="lc-footer__copy">Všetky práva vyhradené © 2024 LIČI AD</h4>
          <svg className="lc-footer__mark" viewBox="0 0 215 285" fill="none" aria-hidden="true">
            <path
              d="M0 166.948C0 100.702 49.0918 49.5691 117.108 49.5691C158.175 49.5691 194.75 70.4707 214.319 102.954L164.592 131.574C155.929 115.493 137.964 105.848 117.108 105.848C80.8539 105.848 57.1134 130.931 57.1134 166.951C57.1134 202.972 80.8539 228.051 117.108 228.051C137.964 228.051 155.929 218.403 164.592 202.004L214.319 230.946C194.75 263.426 158.496 284.33 117.108 284.33C49.0918 284.33 0 233.197 0 166.951V166.948Z"
              fill="white"
            />
            <path
              d="M67.2359 51.0459C81.2294 45.7754 96.3492 43.1041 112.176 43.1041C123.056 43.1041 133.628 44.3347 143.791 46.7206C143.791 46.7206 160.78 42.2508 165.806 37.8434C179.688 25.668 181.702 7.99243 181.702 7.99243C181.702 7.99243 161.618 -2.30576 141.856 0.477182C125.273 2.8138 103.696 21.0145 103.696 21.0145C103.696 21.0145 91.0517 14.2344 70.2186 15.9245C49.3855 17.6146 32 34.9423 32 34.9423L54.6077 56.707C58.6544 54.6034 62.8519 52.6934 67.2326 51.0427L67.2359 51.0459Z"
              fill="white"
            />
          </svg>
          <div />
        </div>
      </div>
    </footer>
  );
}
