// TypoOne.tsx
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
import { wrap } from "@motionone/utils";
import "./TypoOne.css"; // optional styles shown below

interface ParallaxProps {
  children?: string;
  baseVelocity?: number;
}

export default function TypoOne({
  children = "Typo One",
  baseVelocity = 100
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Wrap the x value so the text loops seamlessly
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Flip direction based on scroll direction
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="typoone">
      <motion.div className="typoone-scroller" style={{ x }}>
        <span className="typoone-text">{children} </span>
        <span className="typoone-text">{children} </span>
        <span className="typoone-text">{children} </span>
        <span className="typoone-text">{children} </span>
      </motion.div>
    </div>
  );
}