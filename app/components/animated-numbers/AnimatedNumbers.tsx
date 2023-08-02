"use client";

import { useRef, useEffect } from "react";
import { useSpring, useMotionValue, useInView } from "framer-motion";

type AnimatedNumbersProps = {
  value: number;
};
const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
  const ref = useRef();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });

  // @ts-ignore
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        // @ts-ignore
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  // @ts-ignore
  return <span ref={ref}></span>;
};

export default AnimatedNumbers;
