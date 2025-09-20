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

// If you prefer no dependency, inline the wrap helper below and delete the import.
const wrap = (min, max, v) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export default function TypoOne({ children = "Typo One", baseVelocity = 100 }) {
  // Horizontal marquee
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const dir = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = dir.current * baseVelocity * (delta / 1000);
    dir.current = velocityFactor.get() < 0 ? -1 : 1;
    moveBy += dir.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Vertical reveal (bottom → up a bit)
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 40%"],   // tweak thresholds
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]); // start 60px lower
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="typoone">
      <motion.div className="typoone-scroller" style={{ x, y, opacity }}>
        <span className="typoone-text">{children} </span>
        <span className="typoone-text">{children} </span>
      </motion.div>
    </section>
  );
}