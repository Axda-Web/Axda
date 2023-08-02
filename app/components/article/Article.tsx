"use client";

import { motion } from "framer-motion";
import { Blog } from "@/types";

import MovingImage from "../moving-image/MovingImage";
const Article = ({
  img,
  title,
  date,
  link,
}: Omit<Blog, "id" | "content" | "summary" | "time">) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col sm:gap-y-4"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

export default Article;
