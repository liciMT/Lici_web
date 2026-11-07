import Link from "next/link";
import type { ReactNode } from "react";

/** Compact hero for subpages - same grid lines, status row and type as the homepage hero. */
export function PageHero({
  crumb,
  status,
  title,
  lead,
  actions,
  aside,
}: {
  crumb: string;
  status?: string;
  title: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="lc-phero" aria-labelledby="lc-phero-title">
      <div className="lc-gridlines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="lc-wrap">
        <div className="lc-hero__meta" data-rv>
          <nav aria-label="Omrvinky" className="lc-crumb">
            <Link href="/">Úvod</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>
          {status && (
            <span className="lc-hero__status">
              <i aria-hidden="true" />
              {status}
            </span>
          )}
        </div>
        <div className={`lc-phero__grid${aside ? " has-aside" : ""}`}>
          <div>
            <h1 id="lc-phero-title" className="lc-phero__title" data-rv style={{ ["--d" as string]: "80ms" }}>
              {title}
            </h1>
            <p className="lc-hero__lead" data-rv style={{ ["--d" as string]: "160ms" }}>
              {lead}
            </p>
            {actions && (
              <div className="lc-hero__actions" data-rv style={{ ["--d" as string]: "240ms" }}>
                {actions}
              </div>
            )}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
