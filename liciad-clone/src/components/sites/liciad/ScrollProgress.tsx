"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin red reading-progress line pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });
  return <motion.div className="lc-progress" style={{ scaleX }} aria-hidden="true" />;
}
