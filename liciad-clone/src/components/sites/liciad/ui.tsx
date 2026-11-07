"use client";

import { useEffect, type ReactNode } from "react";
import { A, avatars } from "./data";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "ink" | "teal" | "paper" | "ghost" | "red";
  external?: boolean;
  className?: string;
};

/** Pill button with three animated brand dots (the signature interaction). */
export function Btn({ href, children, variant = "ink", external, className }: BtnProps) {
  return (
    <a
      href={href}
      className={`lc-btn lc-btn--${variant}${className ? ` ${className}` : ""}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <span className="lc-btn__dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </a>
  );
}

export function Pill({ children, tone = "soft" }: { children: ReactNode; tone?: "soft" | "dark" | "outline" }) {
  return <span className={`lc-pill lc-pill--${tone}`}>{children}</span>;
}

export function Avatars({ count = 3, size = "md" }: { count?: number; size?: "sm" | "md" | "lg" }) {
  return (
    <span className={`lc-avatars lc-avatars--${size}`} aria-hidden="true">
      {avatars.slice(0, count).map((a) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={a.src} src={A(a.src)} alt="" width={56} height={56} loading="lazy" />
      ))}
    </span>
  );
}

export function Marquee({
  items,
  tone = "ink",
  speed = 40,
  reverse = false,
}: {
  items: string[];
  tone?: "ink" | "paper" | "teal";
  speed?: number;
  reverse?: boolean;
}) {
  // Two identical tracks: the animation shifts by exactly one track width so the loop is seamless.
  const track = (hidden: boolean) => (
    <ul className="lc-marquee__track" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>
          <span>{t}</span>
          <Star />
        </li>
      ))}
    </ul>
  );
  return (
    <div
      className={`lc-marquee lc-marquee--${tone}${reverse ? " is-reverse" : ""}`}
      style={{ ["--speed" as string]: `${speed}s` }}
    >
      {track(false)}
      {track(true)}
    </div>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg className={`lc-star${className ? ` ${className}` : ""}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

/** LIČI wordmark (red on light, white on dark) - original brand asset. */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="lc-logo"
      src={A(dark ? "2023/11/logo-liciad.png" : "2023/11/logo_gradient-1.png")}
      alt="LIČI AD"
      width={74}
      height={43}
    />
  );
}

/**
 * Adds `.is-in` to every `[data-rv]` element as it enters the viewport.
 * Elements are visible by default (no-JS / reduced motion); the `.rv-ready`
 * class on <html> opts into the hidden starting state only once JS runs.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    document.documentElement.classList.add("rv-ready");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document.querySelectorAll("[data-rv]").forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      document.documentElement.classList.remove("rv-ready");
    };
  }, []);
  return null;
}

/**
 * Full LIČI wordmark as a vector (scales to any size without blur).
 * L and I letters are measured from the brand PNG (348×202 grid); the Č with
 * its leaf is the original brand vector, fitted to the same grid.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 -2 348 204" fill="currentColor" role="img" aria-label="LIČI">
      <path d="M0 39h41v120h54v39H0z" />
      <path d="M102 64h41v134h-41zM102 45l41-6v19h-41z" />
      <path d="M307 64h41v134h-41zM307 46l41-7v19h-41z" />
      <g transform="translate(149 -1.7) scale(0.7094)">
        <path d="M0 166.948C0 100.702 49.0918 49.5691 117.108 49.5691C158.175 49.5691 194.75 70.4707 214.319 102.954L164.592 131.574C155.929 115.493 137.964 105.848 117.108 105.848C80.8539 105.848 57.1134 130.931 57.1134 166.951C57.1134 202.972 80.8539 228.051 117.108 228.051C137.964 228.051 155.929 218.403 164.592 202.004L214.319 230.946C194.75 263.426 158.496 284.33 117.108 284.33C49.0918 284.33 0 233.197 0 166.951V166.948Z" />
        <path d="M67.2359 51.0459C81.2294 45.7754 96.3492 43.1041 112.176 43.1041C123.056 43.1041 133.628 44.3347 143.791 46.7206C143.791 46.7206 160.78 42.2508 165.806 37.8434C179.688 25.668 181.702 7.99243 181.702 7.99243C181.702 7.99243 161.618 -2.30576 141.856 0.477182C125.273 2.8138 103.696 21.0145 103.696 21.0145C103.696 21.0145 91.0517 14.2344 70.2186 15.9245C49.3855 17.6146 32 34.9423 32 34.9423L54.6077 56.707C58.6544 54.6034 62.8519 52.6934 67.2326 51.0427L67.2359 51.0459Z" />
      </g>
    </svg>
  );
}

/** The Č from the LIČI logo (C + leaf), used as the brand's spinning accent. */
export function CMark({ className }: { className?: string }) {
  return (
    <svg className={`lc-cmark${className ? ` ${className}` : ""}`} viewBox="0 0 215 285" fill="currentColor" aria-hidden="true">
      <path d="M0 166.948C0 100.702 49.0918 49.5691 117.108 49.5691C158.175 49.5691 194.75 70.4707 214.319 102.954L164.592 131.574C155.929 115.493 137.964 105.848 117.108 105.848C80.8539 105.848 57.1134 130.931 57.1134 166.951C57.1134 202.972 80.8539 228.051 117.108 228.051C137.964 228.051 155.929 218.403 164.592 202.004L214.319 230.946C194.75 263.426 158.496 284.33 117.108 284.33C49.0918 284.33 0 233.197 0 166.951V166.948Z" />
      <path d="M67.2359 51.0459C81.2294 45.7754 96.3492 43.1041 112.176 43.1041C123.056 43.1041 133.628 44.3347 143.791 46.7206C143.791 46.7206 160.78 42.2508 165.806 37.8434C179.688 25.668 181.702 7.99243 181.702 7.99243C181.702 7.99243 161.618 -2.30576 141.856 0.477182C125.273 2.8138 103.696 21.0145 103.696 21.0145C103.696 21.0145 91.0517 14.2344 70.2186 15.9245C49.3855 17.6146 32 34.9423 32 34.9423L54.6077 56.707C58.6544 54.6034 62.8519 52.6934 67.2326 51.0427L67.2359 51.0459Z" />
    </svg>
  );
}
