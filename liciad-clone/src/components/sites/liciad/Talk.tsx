"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { contactHref } from "./data";
import { Swash } from "./Chips";
import { Avatars, Btn } from "./ui";

const pills = [
  { label: "Stratégia", tone: "outline", x: 2, y: 6, r: 6 },
  { label: "Obsah", tone: "paper", x: 44, y: 0, r: -7 },
  { label: "Reels & TikTok", tone: "teal", x: 8, y: 34, r: 3 },
  { label: "Kampane", tone: "outline", x: 52, y: 40, r: -4 },
  { label: "Branding", tone: "red", x: 26, y: 64, r: 8 },
  { label: "Dáta", tone: "paper", x: 66, y: 70, r: -10 },
] as const;

const messages = [
  { me: false, text: "Ahoj! Stihneme ešte dnes post? 🙏" },
  { me: true, text: "Jasné, už ho ladíme ✨" },
  { me: false, text: "A titulky do reelsu?" },
  { me: true, text: "Hotové. Ide to von o 18:00 🚀" },
  { me: false, text: "Ste najlepší ❤️" },
];

/**
 * "How we talk" chapter from the social kit: a draggable cloud of service pills
 * and a DM thread that types itself out when it scrolls into view.
 */
export function Talk() {
  const cloud = useRef<HTMLDivElement>(null);
  const chat = useRef<HTMLDivElement>(null);
  const seen = useInView(chat, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const [count, setShown] = useState(0);
  const shown = reduce ? messages.length : count;

  useEffect(() => {
    if (!seen || reduce) return;
    const timers = messages.map((_, i) => setTimeout(() => setShown(i + 1), 500 + i * 1100));
    return () => timers.forEach(clearTimeout);
  }, [seen, reduce]);

  const typing = seen && shown < messages.length;
  const nextMe = messages[shown]?.me;

  return (
    <section className="lc-talk" aria-labelledby="lc-talk-title">
      <div className="lc-wrap lc-talk__grid">
        <div className="lc-talk__copy" data-rv>
          <span className="lc-tag lc-tag--teal">Ako komunikujeme</span>
          <h2 id="lc-talk-title" className="lc-h2">
            Nápady, ktoré <Swash>spájajú</Swash> ľudí.
          </h2>
          <p>
            Žiadne zdĺhavé maily ani týždne ticha. S klientmi sme v kontakte priebežne - rýchlo, ľudsky a vždy s jasným
            ďalším krokom.
          </p>
          <div className="lc-talk__cloud" ref={cloud}>
            {pills.map((p) => (
              <motion.span
                key={p.label}
                className={`lc-talk__pill lc-talk__pill--${p.tone}`}
                style={{ left: `${p.x}%`, top: `${p.y}%`, rotate: p.r }}
                drag
                dragConstraints={cloud}
                dragElastic={0.18}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 18 }}
                whileDrag={{ scale: 1.08, rotate: 0, cursor: "grabbing" }}
                whileHover={{ scale: 1.04 }}
              >
                {p.label}
              </motion.span>
            ))}
            <span className="lc-talk__hint" aria-hidden="true">
              ↖ skúste ich posunúť
            </span>
          </div>
        </div>

        <div className="lc-talk__phone" ref={chat} data-rv style={{ ["--d" as string]: "120ms" }}>
          <div className="lc-talk__bar">
            <Avatars count={3} size="sm" />
            <span>
              <strong>LIČI tím</strong>
              <small>
                <i aria-hidden="true" /> online
              </small>
            </span>
          </div>
          <ul className="lc-talk__thread" aria-live="polite">
            <AnimatePresence initial={false}>
              {messages.slice(0, shown).map((m) => (
                <motion.li
                  key={m.text}
                  layout
                  className={`lc-bubble lc-bubble--${m.me ? "out" : "in"}`}
                  initial={{ opacity: 0, y: 16, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                >
                  {m.text}
                </motion.li>
              ))}
              {typing && (
                <motion.li
                  key={`typing-${shown}`}
                  layout
                  className={`lc-bubble lc-bubble--${nextMe ? "out" : "in"} lc-bubble--typing`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.12 } }}
                  aria-label="píše…"
                >
                  <i />
                  <i />
                  <i />
                </motion.li>
              )}
            </AnimatePresence>
          </ul>
          <Btn href={contactHref} variant="teal" className="lc-talk__btn">
            Napíšte nám
          </Btn>
        </div>
      </div>
    </section>
  );
}
