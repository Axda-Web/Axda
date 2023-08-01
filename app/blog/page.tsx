"use client";

import { MouseEventHandler, useRef } from "react";
import Layout from "../components/layout";
import AnimatedText from "../components/animated-text";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "../components/transition-effect";
import { Blog, Blogs } from "../../types";

import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article5 from "../../public/images/articles/create modal component in react using react portals.png";
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article7 from "../../public/images/articles/What is Redux with easy explanation.png";
import article8 from "../../public/images/articles/What is higher order component in React.jpg";

const FramerImage = motion(Image);

const blogData: Blogs = [
  {
    id: 1,
    title: "Build A Custom Pagination Component In Reactjs From Scratch Learn",
    summary:
      "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
    content:
      "Enim incididunt non voluptate reprehenderit. Duis duis in aute proident nisi. Veniam aliqua ut eu culpa id commodo enim Lorem id eu ipsum cillum. Pariatur exercitation ipsum occaecat irure est officia sit officia pariatur ipsum ut. Et exercitation culpa laborum aliquip aliqua. Elit in officia tempor Lorem officia quis. Quis culpa dolore officia irure elit. Veniam esse magna proident labore duis excepteur sit. Occaecat mollit deserunt ad sint laborum id non est aliqua proident eiusmod pariatur reprehenderit officia. Sunt do eiusmod ad sit dolore dolore ex quis pariatur laborum laboris. Sit commodo sunt tempor exercitation proident esse aliquip. Sit irure aute esse ex dolor culpa enim. Aute officia labore sunt elit consequat nulla mollit in occaecat labore ad tempor officia.Nulla proident quis aliqua ea in cillum deserunt anim dolor. Cupidatat magna ea ea qui amet eu dolore do ea Lorem est Lorem. Ut cupidatat irure sit minim reprehenderit. Excepteur veniam non consectetur occaecat nisi aliquip fugiat ipsum sit mollit. Labore sunt ut ut nulla ea commodo tempor aliquip sit quis esse labore. Consequat laboris labore cillum pariatur amet. Esse id anim eu duis adipisicing sint laboris pariatur aliquip commodo. Pariatur irure dolor excepteur do cupidatat ea excepteur minim occaecat excepteur occaecat. Excepteur fugiat laboris fugiat ex non ad qui non est.",
    img: article1 as unknown as string,
    link: "/",
    date: "01/01/2023",
    time: "10 min read",
    featured: true,
  },
  {
    id: 2,
    title:
      "Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens",
    summary:
      "Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience.",
    content:
      "Enim incididunt non voluptate reprehenderit. Duis duis in aute proident nisi. Veniam aliqua ut eu culpa id commodo enim Lorem id eu ipsum cillum. Pariatur exercitation ipsum occaecat irure est officia sit officia pariatur ipsum ut. Et exercitation culpa laborum aliquip aliqua. Elit in officia tempor Lorem officia quis. Quis culpa dolore officia irure elit. Veniam esse magna proident labore duis excepteur sit. Occaecat mollit deserunt ad sint laborum id non est aliqua proident eiusmod pariatur reprehenderit officia. Sunt do eiusmod ad sit dolore dolore ex quis pariatur laborum laboris. Sit commodo sunt tempor exercitation proident esse aliquip. Sit irure aute esse ex dolor culpa enim. Aute officia labore sunt elit consequat nulla mollit in occaecat labore ad tempor officia.Nulla proident quis aliqua ea in cillum deserunt anim dolor. Cupidatat magna ea ea qui amet eu dolore do ea Lorem est Lorem. Ut cupidatat irure sit minim reprehenderit. Excepteur veniam non consectetur occaecat nisi aliquip fugiat ipsum sit mollit. Labore sunt ut ut nulla ea commodo tempor aliquip sit quis esse labore. Consequat laboris labore cillum pariatur amet. Esse id anim eu duis adipisicing sint laboris pariatur aliquip commodo. Pariatur irure dolor excepteur do cupidatat ea excepteur minim occaecat excepteur occaecat. Excepteur fugiat laboris fugiat ex non ad qui non est.",
    img: article2 as unknown as string,
    link: "/",
    date: "01/01/2023",
    time: "10 min read",
    featured: true,
  },
  {
    id: 3,
    title:
      "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    summary:
      "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    content:
      "Enim incididunt non voluptate reprehenderit. Duis duis in aute proident nisi. Veniam aliqua ut eu culpa id commodo enim Lorem id eu ipsum cillum. Pariatur exercitation ipsum occaecat irure est officia sit officia pariatur ipsum ut. Et exercitation culpa laborum aliquip aliqua. Elit in officia tempor Lorem officia quis. Quis culpa dolore officia irure elit. Veniam esse magna proident labore duis excepteur sit. Occaecat mollit deserunt ad sint laborum id non est aliqua proident eiusmod pariatur reprehenderit officia. Sunt do eiusmod ad sit dolore dolore ex quis pariatur laborum laboris. Sit commodo sunt tempor exercitation proident esse aliquip. Sit irure aute esse ex dolor culpa enim. Aute officia labore sunt elit consequat nulla mollit in occaecat labore ad tempor officia.Nulla proident quis aliqua ea in cillum deserunt anim dolor. Cupidatat magna ea ea qui amet eu dolore do ea Lorem est Lorem. Ut cupidatat irure sit minim reprehenderit. Excepteur veniam non consectetur occaecat nisi aliquip fugiat ipsum sit mollit. Labore sunt ut ut nulla ea commodo tempor aliquip sit quis esse labore. Consequat laboris labore cillum pariatur amet. Esse id anim eu duis adipisicing sint laboris pariatur aliquip commodo. Pariatur irure dolor excepteur do cupidatat ea excepteur minim occaecat excepteur occaecat. Excepteur fugiat laboris fugiat ex non ad qui non est.",
    img: article3 as unknown as string,
    link: "/",
    date: "01/01/2023",
    time: "5 min read",
    featured: false,
  },
  {
    id: 4,
    title:
      "Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers",
    summary:
      "Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers",
    content:
      "Enim incididunt non voluptate reprehenderit. Duis duis in aute proident nisi. Veniam aliqua ut eu culpa id commodo enim Lorem id eu ipsum cillum. Pariatur exercitation ipsum occaecat irure est officia sit officia pariatur ipsum ut. Et exercitation culpa laborum aliquip aliqua. Elit in officia tempor Lorem officia quis. Quis culpa dolore officia irure elit. Veniam esse magna proident labore duis excepteur sit. Occaecat mollit deserunt ad sint laborum id non est aliqua proident eiusmod pariatur reprehenderit officia. Sunt do eiusmod ad sit dolore dolore ex quis pariatur laborum laboris. Sit commodo sunt tempor exercitation proident esse aliquip. Sit irure aute esse ex dolor culpa enim. Aute officia labore sunt elit consequat nulla mollit in occaecat labore ad tempor officia.Nulla proident quis aliqua ea in cillum deserunt anim dolor. Cupidatat magna ea ea qui amet eu dolore do ea Lorem est Lorem. Ut cupidatat irure sit minim reprehenderit. Excepteur veniam non consectetur occaecat nisi aliquip fugiat ipsum sit mollit. Labore sunt ut ut nulla ea commodo tempor aliquip sit quis esse labore. Consequat laboris labore cillum pariatur amet. Esse id anim eu duis adipisicing sint laboris pariatur aliquip commodo. Pariatur irure dolor excepteur do cupidatat ea excepteur minim occaecat excepteur occaecat. Excepteur fugiat laboris fugiat ex non ad qui non est.",
    img: article4 as unknown as string,
    link: "/",
    date: "01/01/2023",
    time: "5 min read",
    featured: false,
  },
  {
    id: 5,
    title:
      "Creating An Efficient Modal Component In React Using Hooks And Portals",
    summary:
      "Creating An Efficient Modal Component In React Using Hooks And Portals",
    content:
      "Enim incididunt non voluptate reprehenderit. Duis duis in aute proident nisi. Veniam aliqua ut eu culpa id commodo enim Lorem id eu ipsum cillum. Pariatur exercitation ipsum occaecat irure est officia sit officia pariatur ipsum ut. Et exercitation culpa laborum aliquip aliqua. Elit in officia tempor Lorem officia quis. Quis culpa dolore officia irure elit. Veniam esse magna proident labore duis excepteur sit. Occaecat mollit deserunt ad sint laborum id non est aliqua proident eiusmod pariatur reprehenderit officia. Sunt do eiusmod ad sit dolore dolore ex quis pariatur laborum laboris. Sit commodo sunt tempor exercitation proident esse aliquip. Sit irure aute esse ex dolor culpa enim. Aute officia labore sunt elit consequat nulla mollit in occaecat labore ad tempor officia.Nulla proident quis aliqua ea in cillum deserunt anim dolor. Cupidatat magna ea ea qui amet eu dolore do ea Lorem est Lorem. Ut cupidatat irure sit minim reprehenderit. Excepteur veniam non consectetur occaecat nisi aliquip fugiat ipsum sit mollit. Labore sunt ut ut nulla ea commodo tempor aliquip sit quis esse labore. Consequat laboris labore cillum pariatur amet. Esse id anim eu duis adipisicing sint laboris pariatur aliquip commodo. Pariatur irure dolor excepteur do cupidatat ea excepteur minim occaecat excepteur occaecat. Excepteur fugiat laboris fugiat ex non ad qui non est.",
    img: article5 as unknown as string,
    link: "/",
    date: "01/01/2023",
    time: "5 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Build A Fabulous Todo List App With React, Redux And Framer-Motion",
    summary:
      "Build A Fabulous Todo List App With React, Redux And Framer-Motion",
    content:
      "Enim incididunt non voluptate reprehenderit. Duis duis in aute proident nisi. Veniam aliqua ut eu culpa id commodo enim Lorem id eu ipsum cillum. Pariatur exercitation ipsum occaecat irure est officia sit officia pariatur ipsum ut. Et exercitation culpa laborum aliquip aliqua. Elit in officia tempor Lorem officia quis. Quis culpa dolore officia irure elit. Veniam esse magna proident labore duis excepteur sit. Occaecat mollit deserunt ad sint laborum id non est aliqua proident eiusmod pariatur reprehenderit officia. Sunt do eiusmod ad sit dolore dolore ex quis pariatur laborum laboris. Sit commodo sunt tempor exercitation proident esse aliquip. Sit irure aute esse ex dolor culpa enim. Aute officia labore sunt elit consequat nulla mollit in occaecat labore ad tempor officia.Nulla proident quis aliqua ea in cillum deserunt anim dolor. Cupidatat magna ea ea qui amet eu dolore do ea Lorem est Lorem. Ut cupidatat irure sit minim reprehenderit. Excepteur veniam non consectetur occaecat nisi aliquip fugiat ipsum sit mollit. Labore sunt ut ut nulla ea commodo tempor aliquip sit quis esse labore. Consequat laboris labore cillum pariatur amet. Esse id anim eu duis adipisicing sint laboris pariatur aliquip commodo. Pariatur irure dolor excepteur do cupidatat ea excepteur minim occaecat excepteur occaecat. Excepteur fugiat laboris fugiat ex non ad qui non est.",
    img: article6 as unknown as string,
    link: "/",
    date: "01/01/2023",
    time: "5 min read",
    featured: false,
  },
  {
    id: 7,
    title: "Redux Simplified: A Beginner's Guide For Web Developers",
    summary: "Redux Simplified: A Beginner's Guide For Web Developers",
    content:
      "Enim incididunt non voluptate reprehenderit. Duis duis in aute proident nisi. Veniam aliqua ut eu culpa id commodo enim Lorem id eu ipsum cillum. Pariatur exercitation ipsum occaecat irure est officia sit officia pariatur ipsum ut. Et exercitation culpa laborum aliquip aliqua. Elit in officia tempor Lorem officia quis. Quis culpa dolore officia irure elit. Veniam esse magna proident labore duis excepteur sit. Occaecat mollit deserunt ad sint laborum id non est aliqua proident eiusmod pariatur reprehenderit officia. Sunt do eiusmod ad sit dolore dolore ex quis pariatur laborum laboris. Sit commodo sunt tempor exercitation proident esse aliquip. Sit irure aute esse ex dolor culpa enim. Aute officia labore sunt elit consequat nulla mollit in occaecat labore ad tempor officia.Nulla proident quis aliqua ea in cillum deserunt anim dolor. Cupidatat magna ea ea qui amet eu dolore do ea Lorem est Lorem. Ut cupidatat irure sit minim reprehenderit. Excepteur veniam non consectetur occaecat nisi aliquip fugiat ipsum sit mollit. Labore sunt ut ut nulla ea commodo tempor aliquip sit quis esse labore. Consequat laboris labore cillum pariatur amet. Esse id anim eu duis adipisicing sint laboris pariatur aliquip commodo. Pariatur irure dolor excepteur do cupidatat ea excepteur minim occaecat excepteur occaecat. Excepteur fugiat laboris fugiat ex non ad qui non est.",
    img: article7 as unknown as string,
    link: "/",
    date: "01/01/2023",
    time: "5 min read",
    featured: false,
  },
  {
    id: 8,
    title: "What Is Higher Order Component (Hoc) In React?",
    summary: "What Is Higher Order Component (Hoc) In React?",
    content:
      "Enim incididunt non voluptate reprehenderit. Duis duis in aute proident nisi. Veniam aliqua ut eu culpa id commodo enim Lorem id eu ipsum cillum. Pariatur exercitation ipsum occaecat irure est officia sit officia pariatur ipsum ut. Et exercitation culpa laborum aliquip aliqua. Elit in officia tempor Lorem officia quis. Quis culpa dolore officia irure elit. Veniam esse magna proident labore duis excepteur sit. Occaecat mollit deserunt ad sint laborum id non est aliqua proident eiusmod pariatur reprehenderit officia. Sunt do eiusmod ad sit dolore dolore ex quis pariatur laborum laboris. Sit commodo sunt tempor exercitation proident esse aliquip. Sit irure aute esse ex dolor culpa enim. Aute officia labore sunt elit consequat nulla mollit in occaecat labore ad tempor officia.Nulla proident quis aliqua ea in cillum deserunt anim dolor. Cupidatat magna ea ea qui amet eu dolore do ea Lorem est Lorem. Ut cupidatat irure sit minim reprehenderit. Excepteur veniam non consectetur occaecat nisi aliquip fugiat ipsum sit mollit. Labore sunt ut ut nulla ea commodo tempor aliquip sit quis esse labore. Consequat laboris labore cillum pariatur amet. Esse id anim eu duis adipisicing sint laboris pariatur aliquip commwodo. Pariatur irure dolor excepteur do cupidatat ea excepteur minim occaecat excepteur occaecat. Excepteur fugiat laboris fugiat ex non ad qui non est.",
    img: article8 as unknown as string,
    link: "/",
    date: "01/01/2023",
    time: "5 min read",
    featured: false,
  },
];

type MovingImgProps = {
  title: string;
  img: string;
  link: string;
};

const MovingImg = ({ title, img, link }: MovingImgProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef();

  const handleMouse = (event: any) => {
    // @ts-ignore
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = (event: any) => {
    // @ts-ignore
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };
  return (
    <Link
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      href={link}
      target="_blank"
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        // @ts-ignore
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  );
};

const Article = ({
  img,
  title,
  date,
  link,
}: Omit<Blog, "id" | "content" | "summary" | "time">) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col sm:gap-y-4"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: Omit<Blog, "id" | "content" | "date">) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};
const ArticlesPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
            {blogData
              .filter((article) => article.featured)
              .map((article) => (
                <FeaturedArticle key={article.id} {...article} />
              ))}
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All articles
          </h2>
          <ul>
            {blogData
              .filter((article) => !article.featured)
              .map((article) => (
                <Article key={article.id} {...article} />
              ))}
          </ul>
        </Layout>
      </main>
    </>
  );
};
export default ArticlesPage;
