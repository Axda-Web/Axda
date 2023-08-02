"use client";

import { AnimatePresence } from "framer-motion";

type AnimationWrapperProps = {
  children: React.ReactNode;
};
const AnimationWrapper = ({ children }: AnimationWrapperProps) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};
export default AnimationWrapper;
