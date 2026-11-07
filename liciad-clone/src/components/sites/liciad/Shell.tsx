import type { ReactNode } from "react";
import "./lici.css";
import type { NavKey } from "./data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { RevealObserver } from "./ui";

/** Shared page frame: skip link, header with active item, footer, scroll reveal. */
export function Shell({ current, children }: { current?: NavKey; children: ReactNode }) {
  return (
    <div className="lc">
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
