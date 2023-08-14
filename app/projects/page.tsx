import Layout from "../components/layout";
import AnimatedText from "../components/animated-text";
import Link from "next/link";
import { GithubIcon } from "../components/icons/Icons";
import TransitionEffect from "../components/transition-effect";
import { Project } from "@/types";
import AnimatedImage from "../components/animated-image";
import projectService from "../../services/projects";
import { Metadata } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata: Metadata = {
  title: "Alyx DARENNE | Projects",
  description:
    "Explore my diverse portfolio as a skilled React Front-End Developer, showcasing a curated collection of projects that push boundaries and deliver seamless user experiences. From responsive designs to cutting-edge technologies, discover how I've crafted unique solutions for clients and companies across various industries. Dive into my work and witness the power of code in action.",
};

const Project = ({
  title,
  img,
  link,
  github,
}: Omit<Project, "id" | "featured" | "description">) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg border border-dark/30"
        href={link}
        target="_blank"
      >
        <AnimatedImage
          src={img}
          alt={title}
          classes="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-dark/75 dark:text-light/75 font-medium text-xl lg:text-lg md:text-base">
          Project
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl capitalize">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            className="text-lg font-semibold underline md:text-base text-primary"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedProject = ({
  title,
  description,
  img,
  link,
  github,
}: Omit<Project, "id" | "featured">) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative rouded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full border border-dark/30"
        href={link}
        target="_blank"
      >
        <AnimatedImage
          src={img}
          alt={title}
          classes="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-dark/75 dark:text-light/75 font-medium text-xl xs:text-base">
          Featured Project
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {description}
        </p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-primary text-light p-2 px-6 text-lg font-semibold border border-transparent hover:bg-light hover:dark:bg-dark hover:text-primary hover:border-primary sm:px-4 sm:text-base transition-colors"
            href={link}
            target="_blank"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectsPage = async () => {
  // const projects = await projectService.getAll();
  const projects = await prisma.project.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light max-w-[1800px] mx-auto">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
            {projects.map(
              ({ id, title, description, img, link, github, featured }) => {
                if (featured) {
                  return (
                    <div className="col-span-12" key={id}>
                      <FeaturedProject
                        title={title}
                        description={description}
                        img={`/images/projects/${img}-project-thumbnail.jpg`}
                        link={link}
                        github={github}
                      />
                    </div>
                  );
                }

                return (
                  <div className="col-span-6 sm:col-span-12" key={id}>
                    <Project
                      title={title}
                      img={`/images/projects/${img}-project-thumbnail.jpg`}
                      link={link}
                      github={github}
                    />
                  </div>
                );
              }
            )}
          </div>
        </Layout>
      </main>
    </>
  );
};
export default ProjectsPage;
