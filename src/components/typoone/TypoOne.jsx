// TypoOne.jsx
import "./typoone.css";
import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

// same wrap behavior as demo
const wrap = (a, b, v) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export default function TypoOne({
  children,
  baseVelocity = 100,
  sectionHeight = 800, 
}) {
  // ---------- Horizontal marquee (unchanged from demo) ----------
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 500], [0, 8], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const dir = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = dir.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    dir.current = vf < 0 ? -1 : 1;
    moveBy += dir.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  // ---------- Measure band height so it starts exactly at the bottom ----------
  const spacerRef = useRef(null);
  const bandRef = useRef(null);
  const [bandH, setBandH] = useState(0);

  useLayoutEffect(() => {
    if (!bandRef.current) return;
    const measure = () => setBandH(bandRef.current.offsetHeight || 0);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(bandRef.current);
    return () => ro.disconnect();
  }, []);

  // Travel distance: bottom -> top inside the 500px panel
  const travel = Math.max(0, sectionHeight - bandH);

  // Make the sticky pin last exactly the time needed to move from bottom to top:
  // spacer height = panel (500) + travel distance
  const spacerHeight = sectionHeight + travel;

  // Progress across the spacer
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start end", "end start"],
  });

  // y goes from 'travel' (bottom) to 0 (top)
  const y = useTransform(scrollYProgress, [0, 1], [travel, 0]);

  return (
    <div className="typoone-spacer" ref={spacerRef} style={{ height: spacerHeight }}>
      {/* Sticky viewport: pins to top of screen while spacer scrolls */}
      <div className="typoone-viewport" style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <motion.div className="typoone-band" style={{ y }} ref={bandRef}>
          <motion.div className="typoone-scroller" style={{ x }}>
            <span className="typoone-text">{children} </span>
            <span className="typoone-text">{children} </span>
            <span className="typoone-text">{children} </span>
            <span className="typoone-text">{children} </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}