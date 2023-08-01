import { motion } from "framer-motion";

const skillsData = [
  {
    id: 1,
    name: "HTML",
    x: "-21vw",
    y: "2vw",
  },
  {
    id: 2,
    name: "CSS",
    x: "-5vw",
    y: "-9vw",
  },
  {
    id: 3,
    name: "JavaScript",
    x: "21vw",
    y: "4vw",
  },
  {
    id: 4,
    name: "TypeScript",
    x: "0vw",
    y: "14vw",
  },
  {
    id: 5,
    name: "ReactJS",
    x: "-20vw",
    y: "-15vw",
  },
  {
    id: 6,
    name: "NextJS",
    x: "15vw",
    y: "-10vw",
  },
  {
    id: 7,
    name: "Redux",
    x: "35vw",
    y: "-5vw",
  },
  {
    id: 8,
    name: "Figma",
    x: "-25vw",
    y: "18vw",
  },
  {
    id: 9,
    name: "TailwindCSS",
    x: "24vw",
    y: "18vw",
  },
  {
    id: 10,
    name: "ChakraUI",
    x: "30vw",
    y: "12vw",
  },
  {
    id: 11,
    name: "Sass",
    x: "-5vw",
    y: "-19vw",
  },
  {
    id: 12,
    name: "Styled Components",
    x: "15vw",
    y: "-22vw",
  },
  {
    id: 13,
    name: "Jest",
    x: "-32vw",
    y: "10vw",
  },
  {
    id: 14,
    name: "React Testing Library",
    x: "-30vw",
    y: "-5vw",
  },
  {
    id: 15,
    name: "MongoDB",
    x: "0vw",
    y: "24vw",
  },
  {
    id: 16,
    name: "NodeJS",
    x: "-22vw",
    y: "12vw",
  },
];

type SkillProps = {
  name: string;
  x: string;
  y: string;
};
const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark cursor-pointer absolute py-3 px-6 dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl md:mt-32 mb-10">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full bg-primary text-dark dark:text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2 uppercase font-bold"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skillsData.map((skill) => (
          <Skill key={skill.id} {...skill} />
        ))}
      </div>
    </>
  );
};
export default Skills;
