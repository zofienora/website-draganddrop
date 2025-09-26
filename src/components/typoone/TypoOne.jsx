// TypoOne.jsx
import "./typoone.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

// same wrap behavior as the TS demo
const wrap = (a, b, v) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Props
 * - baseVelocity: horizontal speed (same as the TS sample)
 * - sectionHeight: the fixed height of the pinned panel (default 500px)
 * - bandHeight: height of the moving text band (defaults 120px)
 * - scrollLength: how much page scroll to spend while the panel is pinned (e.g. "150vh" or pixels)
 */
export default function TypoOne({
  children,
  baseVelocity = 100,
  sectionHeight = 500,
  bandHeight = 120,
  scrollLength = "150vh",
}) {
  // ---------- Horizontal marquee (unchanged logic) ----------
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const dir = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = dir.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    dir.current = vf < 0 ? -1 : 1;
    moveBy += dir.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  // ---------- Vertical movement while section is pinned ----------
  // We pin the 500px panel using position: sticky. To create time to scroll
  // the text from bottom->top, we wrap it in a taller "spacer" that defines
  // how long the page stays pinned.
  const spacerRef = useRef(null);

  // Progress goes 0 -> 1 across the spacer height.
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start end", "end start"], // start when spacer enters, end when it leaves
  });

  // Move the band from bottom to top *inside* the 500px panel:
  // y: (sectionHeight - bandHeight) -> 0
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [sectionHeight - bandHeight, 0]
  );

  return (
    // This outer div only provides the extra scroll distance.
    <div className="typoone-spacer" ref={spacerRef} style={{ "--scroll-len": scrollLength }}>
      {/* This panel stays pinned while the spacer is scrolling past */}
      <section className="typoone-section" style={{ height: sectionHeight }}>
        <div className="typoone-viewport">
          {/* The moving band starts at the bottom and rises to the top */}
          <motion.div
            className="typoone-band"
            style={{ y, height: bandHeight }}
          >
            <motion.div className="typoone-scroller" style={{ x }}>
              <span className="typoone-text">{children} </span>
              <span className="typoone-text">{children} </span>
              <span className="typoone-text">{children} </span>
              <span className="typoone-text">{children} </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}