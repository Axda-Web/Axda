import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="w-7/12 mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring " }}
      >
        <h3 className="font-bold capitalize text-2xl ">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={lineRef} className="w-9/12 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-1 left-9 top-0 h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="space-y-8 w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                Intelligence."
          />
          <Details
            type="Master Of Computer Science"
            time="2020-2022"
            place="Stanford University"
            info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
                language understanding."
          />
          <Details
            type="Online Coursework"
            time="2016-2020"
            place="Coursera And EdX"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
                Learning Engineering."
          />
        </ul>
      </div>
    </div>
  );
};
export default Education;
