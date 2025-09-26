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

// Tolerant wrap: works whether a<b or a>b
const wrapRange = (a, b, v) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export default function TypoOne({ children, baseVelocity = 100 }) {
  // Horizontal marquee
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  // Use correct bounds order (-45 to -20)
  const x = useTransform(baseX, (v) => `${wrapRange(-45, -20, v)}%`);

  const dir = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = dir.current * baseVelocity * (delta / 1000);
    dir.current = velocityFactor.get() < 0 ? -1 : 1;
    moveBy += dir.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  // Vertical reveal (apply these!)
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 40%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="typoone">
      <motion.div className="typoone-scroller" style={{ x, y, opacity }}>
        <span className="typoone-text">{children} </span>
        <span className="typoone-text">{children} </span>
        <span className="typoone-text">{children} </span>
        <span className="typoone-text">{children} </span>
      </motion.div>
    </section>
  );
}