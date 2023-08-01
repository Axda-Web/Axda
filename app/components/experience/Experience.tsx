import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Experience, Experiences } from "@/types";

import LiIcon from "../li-icon";

const expData: Experiences = [
  {
    id: 1,
    position: "Front-End developer (traineeship)",
    company: "Dept",
    companyLink: "https://www.deptagency.com",
    time: "Sept 2022 - May 2023",
    address: "Amsterdam, NL",
    work: [
      {
        id: 1.1,
        description:
          "Create front-end templates with focus on UX and accessibility",
      },
      {
        id: 1.2,
        description:
          "Build performant Web App using Next.js, TypeScript and Chakra UI",
      },
      {
        id: 1.3,
        description:
          "Collaborate with members of a multidisciplinary Scrum team",
      },
      {
        id: 1.4,
        description: "Work on international, large-scale projects",
      },
    ],
  },
  {
    id: 2,
    position: "IT System Technician",
    company: "Econocom",
    companyLink: "https://www.econocom.com",
    time: "Jan 2021 - Oct 2021",
    address: "Toulouse, FR",
    work: [
      {
        id: 2.1,
        description: "Exchange & Skype Server administration",
      },
      {
        id: 2.2,
        description: "Windows Server 2016 - AD administration",
      },
      {
        id: 2.3,
        description: "N2 User Support",
      },
    ],
  },
  {
    id: 3,
    position: "Web Designer",
    company: "SwotDigital",
    companyLink: "https://www.swotdigital.com/",
    time: "Sept 2020 - Dec 2020",
    address: "Dublin, IE",
    work: [
      {
        id: 3.1,
        description: "WordPress Webdesign",
      },
      {
        id: 3.2,
        description: "Content creation / Copywriting",
      },
      {
        id: 3.3,
        description: "Mobile First / Responsive Design",
      },
      {
        id: 3.4,
        description: "Graphics design (logo, banner)",
      },
      {
        id: 3.5,
        description: "SEO Strategy",
      },
    ],
  },
  {
    id: 4,
    position: "IT Deployment Technician",
    company: "Computacenter",
    companyLink: "https://www.computacenter.com/who-we-are",
    time: "Feb 2020 - Jul 2020",
    address: "Toulouse, FR",
    work: [
      {
        id: 4.1,
        description: "Hardware / Software Install + Configuration",
      },
      {
        id: 4.2,
        description: "User Data migration + Backup management",
      },
      {
        id: 4.3,
        description: "Customer relationship + Activity report",
      },
    ],
  },
  {
    id: 5,
    position: "IT System & Network Technician",
    company: "Balma",
    companyLink: "https://www.computacenter.com/who-we-are",
    time: "Feb 2020 - Jul 2020",
    address: "Toulouse, FR",
    work: [
      {
        id: 5.1,
        description: "Hardware / Software Install + Configuration",
      },
      {
        id: 5.2,
        description: "User Data migration + Backup management",
      },
      {
        id: 5.3,
        description: "Customer relationship + Activity report",
      },
    ],
  },
  {
    id: 6,
    position: "Web Moderator",
    company: "Atchik",
    companyLink: "https://atchik.com/",
    time: "Dec 2017 - Aug 2017",
    address: "Toulouse, FR",
    work: [
      {
        id: 6.1,
        description: "Web content moderation on Social Media / Forum",
      },
      {
        id: 6.2,
        description: "Editorial charter and style guide implementation",
      },
      {
        id: 6.3,
        description: "Community management",
      },
    ],
  },
];

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
      className="w-7/12 md:w-4/5 mx-auto flex flex-col justify-between"
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
            <li className="list-disc sm:list-none list-inside ml-0" key={id}>
              {description}
            </li>
          ))}
        </ul>
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
          {expData.map(
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
