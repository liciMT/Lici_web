import type { ReactNode } from "react";
import "./lici.css";
import type { NavKey } from "./data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loader } from "./Loader";
import { ScrollProgress } from "./ScrollProgress";
import { RevealObserver } from "./ui";

/** Shared page frame: skip link, header with active item, footer, scroll reveal (+ optional loader). */
export function Shell({ current, loader, children }: { current?: NavKey; loader?: boolean; children: ReactNode }) {
  return (
    <div className="lc">
      {loader && (
        <>
          <Loader />
          <noscript>
            <style>{".lc-loader{display:none!important}html.lc-loading{overflow:auto}"}</style>
          </noscript>
        </>
      )}
      <ScrollProgress />
      <a href="#obsah" className="lc-skip">
        Preskočiť na obsah
      </a>
      <Header current={current} />
      <main id="obsah">{children}</main>
      <Footer />
      <RevealObserver />
    </div>
  );
}
