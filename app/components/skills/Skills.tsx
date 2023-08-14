"use client";

import { motion } from "framer-motion";
import { Skills } from "@/types";

type SkillProps = {
  name: string;
  x: string;
  y: string;
};
const Skill = ({ name, x, y }: SkillProps) => {
  const featured =
    name === "NextJS" ||
    name === "ReactJS" ||
    name === "TailwindCSS" ||
    name === "TypeScript";
  return (
    <motion.div
      className={`flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark cursor-pointer absolute py-3 px-6 dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold ${
        featured &&
        "bg-primary dark:bg-primary text-dark dark:text-light sm:!text-primary"
      }`}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

type SkillsProps = {
  skills: Skills;
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl md:mt-32 mb-10">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full border-2 border-dark dark:border-light text-dark dark:text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2 uppercase font-bold px-[27px]"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skills.map((skill) => (
          <Skill key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
