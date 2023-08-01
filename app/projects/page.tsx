"use client";

import Layout from "../components/layout";
import AnimatedText from "../components/animated-text";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon } from "../components/icons/Icons";
import projectNewsletterImg from "../../public/images/projects/newsletter-project-thumbnail.jpg";
import projectDailyQuotesImg from "../../public/images/projects/daily_quotes-project-thumbnail.jpg";
import projectTodoListImg from "../../public/images/projects/todo_list-project-thumbnail.jpg";
import projectMyTravelJournalImg from "../../public/images/projects/my_travel_journal-project-thumbnail.jpg";
import projectFisheyeImg from "../../public/images/projects/fisheye-project-thumbnail.jpg";
import projectOhmyfoodImg from "../../public/images/projects/ohmyfood-project-thumbnail.jpg";
import TransitionEffect from "../components/transition-effect";
import { Project, Projects } from "@/types";

const FramerImage = motion(Image);

const projectData: Projects = [
  {
    id: 1,
    title: "Newsletter sign-up form",
    description:
      "The challenge was to build out a newsletter form and get it looking as close to the design as possible.",
    img: projectNewsletterImg as unknown as string,
    link: "https://fe-newsletter-bret.vercel.app/",
    github: "https://github.com/Axda-Web/fe-newsletter",
    featured: true,
  },
  {
    id: 2,
    title: "Daily Quotes App",
    description:
      "The challenge was to build out an App that displays random motivational quotes with changing background.",
    img: projectDailyQuotesImg as unknown as string,
    link: "https://daily-quotes-beryl.vercel.app/",
    github: "https://github.com/Axda-Web/dailyQuotes",
    featured: false,
  },
  {
    id: 3,
    title: "Todo List App",
    description:
      "The challenge was to build out a Todo List App allowing users to add, edit, delete and archive taks to do.",
    img: projectTodoListImg as unknown as string,
    link: "https://to-do-app-sooty-ten.vercel.app",
    github: "https://github.com/Axda-Web/toDoApp",
    featured: false,
  },
  {
    id: 4,
    title: "My Travel Journal Blog",
    description:
      "The challenge was to build out a blog page displaying a list of blog posts.",
    img: projectMyTravelJournalImg as unknown as string,
    link: "https://my-travel-journal-smoky.vercel.app",
    github: "https://github.com/Axda-Web/myTravelJournal",
    featured: true,
  },
  {
    id: 5,
    title: "Fisheye App",
    description:
      "The challenge was to build out a Fiverr like platform for photographers.",
    img: projectFisheyeImg as unknown as string,
    link: "https://fisheye-phi.vercel.app",
    github: "https://github.com/Axda-Web/fisheye",
    featured: false,
  },
  {
    id: 6,
    title: "ohmyfood",
    description:
      "The challenge was to build out a website showing a list of restaurants and their menus.",
    img: projectOhmyfoodImg as unknown as string,
    link: "https://oh-my-food-kappa.vercel.app",
    github: "https://github.com/Axda-Web/ohMyFood",
    featured: false,
  },
];

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
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
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
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
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
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
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
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
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

const ProjectsPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
            {projectData.map(
              ({ id, title, description, img, link, github, featured }) => {
                if (featured) {
                  return (
                    <div className="col-span-12" key={id}>
                      <FeaturedProject
                        title={title}
                        description={description}
                        img={img}
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
                      img={img}
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
