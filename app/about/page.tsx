import Image from "next/image";
import Layout from "../components/layout";
import AnimatedText from "../components/animated-text";
import profilePic from "../../public/images/profile/about-pic.jpg";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Education from "../components/education";
import TransitionEffect from "../components/transition-effect";
import AnimatedNumbers from "../components/animated-numbers/AnimatedNumbers";
// import experienceService from "../../services/experiences";
// import educationService from "../../services/educations";
// import skillsService from "../../services/skills";
import { Metadata } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: "Alyx DARENNE | About me",
  description:
    "Get to know the person behind the code! Welcome to my 'About Me' page, where you'll discover the journey of a passionate web developer and technology enthusiast. Learn about my background, expertise, and the milestones that shaped my career. I'll share my drive for creating captivating digital experiences and how I thrive in the ever-evolving world of web development. Let's connect and embark on this exciting tech adventure together!",
};

const AboutPage = async () => {
  // const experiencesData = experienceService.getAll();
  // const educationsData = educationService.getAll();
  // const skillsData = skillsService.getAll();

  const skillsData = prisma.skill.findMany();
  const experiencesData = prisma.experience.findMany();
  const educationsData = prisma.education.findMany();

  const [experiences, educations, skills] = await Promise.all([
    experiencesData,
    educationsData,
    skillsData,
  ]);
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light max-w-[1800px] mx-auto">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid grid-cols-8 gap-16 sm:gap-8 w-full">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi! I&apos;m Alyx, a{" "}
                <strong className="font-medium">Web Developer</strong>{" "}
                specialized in{" "}
                <strong className="font-medium">Front-End development</strong>{" "}
                and expert of the
                <strong className="font-medium">React.js ecosystem</strong>.
              </p>
              <p className="font-medium mt-4">
                I have a passion for creating beautiful, functional, and
                user-centered digital experiences. I am always looking for new
                and innovative ways to bring my clients&apos; visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that <strong className="font-medium">design</strong>{" "}
                is about more than just making things look pretty – it&apos;s
                about solving problems and creating intuitive, enjoyable
                experiences for users.{" "}
              </p>
              <p className="font-medium mb-4">
                Whether I&apos;m working on a{" "}
                <strong className="font-medium">Website</strong>,{" "}
                <strong className="font-medium">Mobile App</strong>, or other
                <strong className="font-medium">digital product</strong>, I
                bring my commitment to design excellence and user-centered
                thinking to every project.
              </p>
              <p className="font-medium">
                I look forward to the opportunity to bring my skills and passion
                to your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Axda"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-primary">
                  <AnimatedNumbers value={2000} />+
                </span>
                <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm xs:w-8">
                  Coding hours
                </h3>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-primary">
                  <AnimatedNumbers value={15} />+
                </span>
                <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h3>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl text-primary">
                  <AnimatedNumbers value={2} />+
                </span>
                <h3 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h3>
              </div>
            </div>
          </div>
          <Skills skills={skills} />
          <Experience experiences={experiences} />
          <Education educations={educations} />
        </Layout>
      </main>
    </>
  );
};
export default AboutPage;
