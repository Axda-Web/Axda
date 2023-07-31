import { useRef } from "react";
import { useScroll, motion } from "framer-motion";

import LiIcon from "./LiIcon";

const eduData = [
  {
    id: 1,
    type: "Software Developer Diploma (HBO-ICT)",
    place: "OpenClassrooms",
    placeLink: "https://openclassrooms.com",
    time: "Nov 2021 - Aug 2022",
    info: [
      {
        id: 1.1,
        description: "Responsive Design with HTML, CSS / Sass and Bootstrap",
      },
      {
        id: 1.2,
        description: "Creation of dynamic and interactive websites with JS",
      },
      {
        id: 1.3,
        description: "Build SPA with React & Redux",
      },
      {
        id: 1.4,
        description: "Code testing with Jest & React Testing Library",
      },
      {
        id: 1.5,
        description: "Code versioning and collaboration with Git & GitHub",
      },
      {
        id: 1.6,
        description: "SEO & Accessibility",
      },
      {
        id: 1.7,
        description: "UI & UX Design with Figma",
      },
    ],
  },
  {
    id: 2,
    type: "Professional training - Digital Referent",
    place: "AFPA",
    placeLink: "https://www.afpa.fr/",
    time: "Sept 2019 - Jan 2020",
    info: [
      {
        id: 2.1,
        description: "Full Stack Web Development with WordPress CMS",
      },
      {
        id: 2.2,
        description: "WebMarketing: SEO, SEA, Facebook Ads, SMM",
      },
      {
        id: 2.3,
        description:
          "Introduction to Cybersecurity, Data Protection Officer (GDPR)",
      },
    ],
  },
  {
    id: 3,
    type: "Advanced IT Support Technician Diploma",
    place: "ADRAR",
    placeLink: "https://www.adrar-formation.com/",
    time: "Sept 2017 - Apr 2018",
    info: [
      {
        id: 3.1,
        description: "OSI / TCPIP model",
      },
      {
        id: 3.2,
        description: "Cisco Networking",
      },
      {
        id: 3.3,
        description: "Windows Server / Linux Server Administration",
      },
      {
        id: 3.4,
        description: "VMware / HyperV Virtualization",
      },
    ],
  },
  {
    id: 4,
    type: "Bachelor of Science in Psychology",
    place: "Jean Jaures University",
    placeLink: "https://www.univ-tlse2.fr/",
    time: "2011 - 2014",
    info: [
      {
        id: 4.1,
        description: "Cognitive Psychology - Neuroscience - Ergonomics",
      },
      {
        id: 4.2,
        description: "Minor in Sociology",
      },
    ],
  },
  {
    id: 5,
    type: "Baccalauréat ES (High School Degree)",
    place: "Castella High School",
    placeLink: "https://castella.mon-ent-occitanie.fr",
    time: "2007 - 2008",
    info: [
      {
        id: 5.1,
        description: "Economics and Social Sciences",
      },
      {
        id: 5.2,
        description: "Minor in Mathematics",
      },
    ],
  },
];

const Details = ({ type, time, place, placeLink, info }) => {
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
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} |{" "}
          <a className="text-primary" target="_blank" href={placeLink}>
            @{place}
          </a>
        </span>
        <ul className="font-medium w-full md:text-sm mt-4 space-y-1 sm:space-y-2">
          {info.map(({ id, description }) => (
            <li className="list-disc sm:list-none list-inside ml-0" key={id}>
              {description}
            </li>
          ))}
        </ul>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
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
          {eduData.map(({ id, type, time, place, placeLink, info }) => (
            <Details
              key={id}
              type={type}
              time={time}
              place={place}
              placeLink={placeLink}
              info={info}
            />
          ))}
          {/* <Details
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
          /> */}
        </ul>
      </div>
    </div>
  );
};
export default Education;
