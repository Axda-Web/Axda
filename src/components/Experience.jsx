import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="w-7/12 md:w-4/5 mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring " }}
      >
        <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            className="text-primary dark:text-primaryDark capitalize"
            target="_blank"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div
        ref={lineRef}
        className="w-9/12 mx-auto relative lg:w-11/12 md:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-1 left-9 top-0 h-full bg-dark origin-top dark:bg-light md:w-0.5 md:left-[30px] xs:left-5"
        />
        <ul className="space-y-8 w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="CodeBucks"
            companyLink="https://www.google.com"
            time="Summer 2021"
            address="Mountain View, CA."
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
          />
          <Details
            position="Intern"
            company="Facebook"
            companyLink="https://www.facebook.com"
            time="2022-Present"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                share short-form video content, including designing and implementing a new user interface and developing 
                the backend infrastructure to support the feature."
          />
          <Details
            position="Software Developer"
            company="Amazon"
            companyLink="https://www.amazon.com"
            time="2020-2021"
            address="Seattle, WA."
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
                as product recommendations and user reviews, and optimizing the app's performance and reliability."
          />
          <Details
            position="Software Developer Intern"
            company="Microsoft"
            companyLink="https://www.microsoft.com"
            time="Summer 2019"
            address="Redmond, WA."
            work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
                including implementing a new user interface for a system settings panel and optimizing the performance of 
                a core system component."
          />
          <Details
            position="Teaching Assistant"
            company="MIT"
            companyLink="https://www.mit.com"
            time="Fall 2018"
            address="Massachusetts Ave, Cambridge, MA."
            work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
                and graded exams and assignments."
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
