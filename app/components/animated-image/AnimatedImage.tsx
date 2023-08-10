"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

type AnimatedImageProps = {
  src: string;
  alt: string;
  classes?: string;
  sizes: string;
  reference?: React.RefObject<any>;
  style?: object;
  initial?: object;
  whileInView?: object;
};

const AnimatedImage = ({
  src,
  alt,
  classes,
  sizes,
  reference,
  style,
  initial,
  whileInView,
}: AnimatedImageProps) => {
  return (
    <FramerImage
      width={0}
      height={0}
      src={src}
      alt={alt}
      className={classes}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      priority
      sizes={sizes}
      ref={reference}
      style={style}
      initial={initial}
      whileInView={whileInView}
    />
  );
};
export default AnimatedImage;
