"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import AnimatedImage from "../animated-image";

type MovingImgProps = {
  title: string;
  img: string;
  link: string;
};

const MovingImage = ({ title, img, link }: MovingImgProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef();

  const handleMouse = (event: any) => {
    // @ts-ignore
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = (event: any) => {
    // @ts-ignore
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };
  return (
    <Link
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      href={link}
      target="_blank"
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <AnimatedImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        reference={imgRef}
        src={img}
        alt={title}
        classes="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  );
};

export default MovingImage;
