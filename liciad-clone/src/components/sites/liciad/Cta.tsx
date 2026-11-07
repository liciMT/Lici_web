import { contactHref, email } from "./data";
import { Avatars, Btn, CMark } from "./ui";

type CtaProps = {
  title?: string;
  text?: string;
  button?: string;
  href?: string;
};

export function Cta({
  title = "Máte rozbehnutý dobrý nápad? Poďme mu dať jasný smer.",
  text = "Povedzte nám, čo budujete a kam to chcete posunúť. Ozveme sa s premysleným ďalším krokom.",
  button = "Povedzte nám o projekte",
  href = contactHref,
}: CtaProps) {
  return (
    <section className="lc-cta-wrap" aria-labelledby="lc-cta-title">
      <div className="lc-wrap">
        <div className="lc-cta" data-rv>
          <div className="lc-cta__top">
            <h2 id="lc-cta-title" className="lc-cta__title">
              {title}
            </h2>
            <span className="lc-cta__star" aria-hidden="true">
              <CMark />
            </span>
          </div>
          <div className="lc-cta__bottom">
            <div className="lc-cta__people">
              <Avatars count={5} size="lg" />
              <span className="lc-tag lc-tag--ink">We take it personally</span>
            </div>
            <div className="lc-cta__action">
              <p>{text}</p>
              <div className="lc-cta__btns">
                <Btn href={href} variant="teal">{button}</Btn>
                <a className="lc-cta__mail" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
