import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer absolute py-3 px-6 dark:bg-light dark:text-dark"
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
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-21vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-9vw" />
        <Skill name="JavaScript" x="21vw" y="4vw" />
        <Skill name="TypeScript" x="0vw" y="14vw" />
        <Skill name="ReactJS" x="-20vw" y="-15vw" />
        <Skill name="NextJS" x="15vw" y="-10vw" />
        <Skill name="Redux" x="35vw" y="-5vw" />
        <Skill name="Figma" x="-25vw" y="18vw" />
        <Skill name="TailwindCSS" x="24vw" y="18vw" />
        <Skill name="ChakraUI" x="30vw" y="12vw" />
        <Skill name="Sass" x="-5vw" y="-19vw" />
        <Skill name="Styled Components" x="15vw" y="-22vw" />
        <Skill name="Jest" x="-32vw" y="10vw" />
        <Skill name="React Testing Library" x="-30vw" y="-5vw" />
        <Skill name="MongoDB" x="0vw" y="24vw" />
        <Skill name="NodeJS" x="-22vw" y="12vw" />
      </div>
    </>
  );
};
export default Skills;
