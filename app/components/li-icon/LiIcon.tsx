"use client";

import { motion, useScroll } from "framer-motion";

type LiIconProps = {
  reference: React.RefObject<HTMLElement>;
};

const LiIcon = ({ reference }: LiIconProps) => {
  // const { scrollYProgress } = useScroll({
  //   layoutEffect: false,
  //   target: reference,
  //   offset: ["center end", "center center"],
  // });
  return (
    <figure className="absolute -left-[35px] md:left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-[92deg] md:w-[60px] md:h-[60px] xs:w-10 xs:h-10"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          // style={{
          //   pathLength: scrollYProgress,
          // }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="fill-primary animate-pulse stroke-0"
        />
      </svg>
    </figure>
  );
};
export default LiIcon;
