import Layout from "./components/layout";
import Image from "next/image";
import profilePic from "../public/images/profile/hero.png";
import AnimatedText from "./components/animated-text";
import Link from "next/link";
import { LinkArrow } from "./components/icons/Icons";
// import HireMe from "./components/hire-me";
import TransitionEffect from "./components/transition-effect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alyx DARENNE | Web Developer",
  description:
    "Welcome to the world of captivating web experiences! As a skilled React Front-End Developer, I specialize in crafting high-performance, user-centric websites that leave a lasting impression. Explore my portfolio of cutting-edge projects that blend seamless design with efficient functionality. Whether it's responsive interfaces, interactive components, or pixel-perfect layouts, I've got you covered. Join me on this journey of innovation and let's bring your digital vision to life!",
};

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex text-dark dark:text-light w-full min-h-screen items-center max-w-[1800px] mx-auto">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col sm:gap-y-10">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Axda"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality with Code And Design."
                className="!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a{" "}
                <strong className="font-medium">
                  skilled Front-End Developer
                </strong>
                , I am dedicated to turning ideas into{" "}
                <strong className="font-medium">
                  innovative Web Applications
                </strong>
                . Explore my latest projects and articles, showcasing my{" "}
                <strong className="font-medium">
                  expertise in React.js and Web Development
                </strong>
                .
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/resume__alyx-darenne.pdf"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-primary text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-primary hover:border-primary hover:dark:bg-dark border-2 border-solid border-transparent md:p-2 md:px-4 md:text-base transition-colors"
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:darenne.alyx@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-primary underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
      </main>
    </>
  );
}
