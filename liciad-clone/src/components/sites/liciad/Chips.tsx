"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ChipTone = "red" | "teal" | "paper" | "ink";
type ChipIcon = "heart" | "save" | "arrow" | "play";

const paths: Record<ChipIcon, ReactNode> = {
  heart: <path d="M12 20.5s-7.5-4.4-7.5-10.1A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8c0 5.7-7.5 10.1-7.5 10.1Z" fill="currentColor" />,
  save: <path d="M12 4v15M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />,
};

function Icon({ name }: { name: ChipIcon }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/**
 * App-style sticker ("♥ 1 248", "Uložiť ↓") borrowed from the social media kit.
 * Springs in (scale + rotation) when it enters the viewport, then floats gently.
 */
export function UiChip({
  children,
  icon,
  tone = "paper",
  rotate = -6,
  delay = 0,
  tail = false,
  iconAfter = false,
  className = "",
}: {
  children: ReactNode;
  icon?: ChipIcon;
  tone?: ChipTone;
  rotate?: number;
  delay?: number;
  tail?: boolean;
  iconAfter?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={`lc-chip lc-chip--${tone}${tail ? " lc-chip--tail" : ""} ${className}`}
      aria-hidden="true"
      style={{ rotate }}
      initial={reduce ? false : { opacity: 0, scale: 0.3, rotate: rotate + 14 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 260, damping: 14, delay }}
    >
      <motion.span
        className="lc-chip__in"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: delay + 0.8 }}
      >
        {icon && !iconAfter && <Icon name={icon} />}
        {children}
        {icon && iconAfter && <Icon name={icon} />}
      </motion.span>
    </motion.span>
  );
}

/** Hand-drawn double underline that draws itself under a word. */
export function Swash({ children, tone = "teal" }: { children: ReactNode; tone?: "teal" | "red" | "paper" }) {
  const reduce = useReducedMotion();
  const draw = (d: number) => ({
    initial: reduce ? false : { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true, amount: 1 },
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] as const, delay: d },
  });
  return (
    <span className={`lc-swash lc-swash--${tone}`}>
      {children}
      <svg viewBox="0 0 600 60" preserveAspectRatio="none" aria-hidden="true">
        <motion.path d="M6 40C120 18 300 8 594 22" {...draw(0.2)} />
        <motion.path d="M60 52C220 34 380 30 520 36" {...draw(0.55)} />
      </svg>
    </span>
  );
}
