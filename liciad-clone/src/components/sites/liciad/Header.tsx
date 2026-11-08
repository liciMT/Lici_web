"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contactHref, email, navItems, phone, type NavKey } from "./data";
import { Btn, Logo } from "./ui";

// Mobile menu links cascade in (and back out) with a Framer Motion stagger.
const list: Variants = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};
const item: Variants = {
  open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 24 } },
  closed: { opacity: 0, y: 24, transition: { duration: 0.2 } },
};

export function Header({ current = "home" }: { current?: NavKey }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`lc-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
        <div className="lc-header__inner">
          <Link href="/" className="lc-header__logo" aria-label="LIČI AD - na úvod">
            <Logo />
          </Link>
          <nav aria-label="Hlavné menu" className="lc-header__nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={item.key === current ? "is-active" : undefined}
                    aria-current={item.key === current ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lc-header__cta">
            <Btn href={contactHref}>Začať projekt</Btn>
          </div>
          <button
            type="button"
            className="lc-header__toggle"
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            aria-expanded={open}
            aria-controls="lc-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="lc-mobile-menu" className={`lc-menu${open ? " is-open" : ""}`} aria-hidden={!open} inert={!open}>
        <motion.ul variants={list} initial={false} animate={open ? "open" : "closed"}>
          {navItems.map((nav, i) => (
            <motion.li key={nav.label} variants={item}>
              <a href={nav.href} onClick={() => setOpen(false)}>
                <span className="lc-menu__num">0{i + 1}</span>
                {nav.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <div className="lc-menu__foot">
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
          <Btn href={contactHref} variant="teal">
            Začať projekt
          </Btn>
        </div>
      </div>
    </>
  );
}
