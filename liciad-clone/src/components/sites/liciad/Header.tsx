"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { A, contactHref, navItems } from "./data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const prev = useRef(0);

  useEffect(() => {
    prev.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // Source: hide when scrolling down, reveal when scrolling up, always visible near the top.
      setHidden(!(prev.current > y) && y > 10);
      prev.current = y;
      setScrolled(y > 50);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const cls = ["lc-header", scrolled && "is-scrolled", hidden && !open && "is-hidden", open && "is-open"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={cls}>
        <Link href="/" className="lc-header__logo" aria-label="LIČI AD">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A("2023/11/logo_gradient-1.png")} alt="Liči logo" width={86} height={50} />
        </Link>
        <nav aria-label="Hlavné menu">
          <ul className="lc-nav">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={item.active ? "is-active" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={contactHref} className="lc-header__contact">
          Kontakt
        </a>
        <button
          type="button"
          className="lc-header__toggle"
          aria-label="Menu Toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M3 3l14 14M17 3L3 17" stroke="#2D3448" strokeWidth="2" />
            </svg>
          ) : (
            <svg width="23" height="11" viewBox="0 0 23 11" fill="none" aria-hidden="true">
              <rect width="23" height="2.57621" fill="#2D3448" />
              <rect x="6.90039" y="8" width="16.1" height="2.57621" fill="#2D3448" />
            </svg>
          )}
        </button>
      </header>
      <nav className={`lc-mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <ul>
          {[...navItems, { label: "Kontakt", href: contactHref, active: false }].map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
