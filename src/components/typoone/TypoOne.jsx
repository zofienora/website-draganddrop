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

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}




export default function TypoOne() {
    return(
        <>
        <div className="typoone">
            <div className="container typoone-container">
                <h1 className="typoone-text">Typo One</h1>
            </div>
        </div>
        </>
    )
};