import Image from "next/image";
import Layout from "../components/layout";
import AnimatedText from "../components/animated-text";
import profilePic from "../../public/images/profile/about-pic.jpg";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Education from "../components/education";
import AnimatedBlock from "../components/animated-block";
import TransitionEffect from "../components/transition-effect";
import { Metadata } from "next";
import { Experiences, Educations } from "@/types";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: "Alyx DARENNE | About me",
  description:
    "Get to know the person behind the code! Welcome to my 'About Me' page, where you'll discover the journey of a passionate React Front-End developer and technology enthusiast. Learn about my background, expertise, and the milestones that shaped my career. I'll share my drive for creating captivating digital experiences and how I thrive in the ever-evolving world of web development. Let's connect and embark on this exciting tech adventure together!",
};

const AboutPage = async () => {
  const [experiences, educations] = await prisma.$transaction([
    prisma.experience.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        work: true,
      },
    }),
    prisma.education.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        info: true,
      },
    }),
  ]);

  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light max-w-[1440px] mx-auto">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="">
            <div className="relative max-w-sm sm:max-w-xs rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 mx-auto my-16">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Axda"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <AnimatedBlock>
              <div className="flex flex-col items-center text-center text-2xl sm:text-xl max-w-4xl mx-auto gap-y-6 sm:gap-y-2">
                <p className="font-medium">
                  Hi! I&apos;m Alyx,{" "}
                  <strong className="font-medium">Web Developer</strong> expert
                  in the{" "}
                  <strong className="font-medium">React.js ecosystem</strong>.
                </p>
                <p className="font-medium mt-4">
                  I have a passion for creating beautiful, functional, and
                  user-centered digital-experiences.
                </p>
                <p className="font-medium my-4">
                  I believe that <strong className="font-medium">Design</strong>{" "}
                  is about more than just making things look pretty. It&apos;s
                  about solving problems and creating intuitive, enjoyable
                  experiences for users.{" "}
                </p>

                <p className="font-medium">
                  I look forward to having the opportunity to bring my skills
                  and passion to your next project.
                </p>
              </div>
            </AnimatedBlock>
          </div>
          <Skills />
          <Experience experiences={experiences as unknown as Experiences} />
          <Education educations={educations as unknown as Educations} />
        </Layout>
      </main>
    </>
  );
};
export default AboutPage;
