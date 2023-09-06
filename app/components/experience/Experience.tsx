"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Experience, Experiences } from "@/types";
import LiIcon from "../li-icon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: Partial<Experience>) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="w-11/12 md:w-4/5 mx-auto flex flex-col justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            className="text-primary capitalize"
            target="_blank"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="font-medium w-full md:text-sm mt-4 space-y-1 sm:space-y-2">
          {work?.map(({ id, description }) => (
            <li className="list-disc md:list-none list-inside ml-0" key={id}>
              {description}.
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

type ExperiencesProps = {
  experiences: Experiences;
};

const Experience = ({ experiences }: ExperiencesProps) => {
  const lineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div
        ref={lineRef}
        className="w-9/12 mx-auto relative lg:w-11/12 md:w-full"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute w-1 left-0 top-0 h-full bg-dark origin-top dark:bg-light md:w-0.5 md:left-[30px] xs:left-[19px]"
        />
        <ul className="space-y-12 w-full flex flex-col items-start justify-between ml-24 lg:ml-2">
          {experiences.map(
            ({ id, position, company, companyLink, time, address, work }) => (
              <Details
                key={id}
                position={position}
                company={company}
                companyLink={companyLink}
                time={time}
                address={address}
                work={work}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};
export default Experience;
