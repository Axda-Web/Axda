"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LinkedInIcon, GithubIcon, FrontendMentorIcon } from "../icons/Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import Logo from "../logo";
import { SunIcon, MoonIcon } from "../icons/Icons";

type NavLink = {
  id?: number;
  url: string;
  title: string;
};

const navLinks: NavLink[] = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/about",
    title: "About",
  },
  {
    id: 3,
    url: "/projects",
    title: "Projects",
  },
  // {
  //   id: 4,
  //   url: "/blog",
  //   title: "Blog",
  // },
];

type CustomLink = NavLink & { className?: string };

const CustomLink = ({ url, title, className = "" }: CustomLink) => {
  // @ts-ignore
  const { asPath } = useRouter();
  return (
    <Link href={url} className={`${className} relative group`}>
      {title}
      <span
        className={`h-px inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          asPath === url ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  url,
  title,
  className = "",
  toggle,
}: CustomLink & { toggle: () => void }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2 text-3xl`}
    >
      {title}
      <span
        className={`h-px inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          // @ts-ignore
          router.asPath === url ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        onClick={handleClick}
        className="flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex items-center justify-between lg:hidden max-w-[1800px] mx-auto">
        <nav className="space-x-8">
          {navLinks.map(({ id, url, title }: NavLink) => (
            <CustomLink key={id} url={url} title={title} />
          ))}
        </nav>
        <div className="flex justify-between items-center gap-x-6">
          <motion.a
            href="https://www.linkedin.com/in/alyx-darenne/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Axda-Web"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.frontendmentor.io/profile/Axda-Web"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6"
          >
            <FrontendMentorIcon />
          </motion.a>
          <button
            // @ts-ignore
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-12 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col items-center justify-between z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 sm:py-24 xs:py-16 gap-y-8"
        >
          <nav className="flex items-center flex-col justify-center flex-wrap mt-2">
            {navLinks.map(({ id, url, title }) => (
              <CustomMobileLink
                key={id}
                url={url}
                title={title}
                toggle={handleClick}
              />
            ))}
          </nav>
          <div className="flex justify-between items-center gap-x-6">
            <motion.a
              href="https://www.linkedin.com/in/alyx-darenne/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Axda-Web"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 bg-light dark:bg-dark rounded-full"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.frontendmentor.io/profile/Axda-Web"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6"
            >
              <FrontendMentorIcon />
            </motion.a>
          </div>
          <button
            // @ts-ignore
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center rounded-full p-1 mt-6 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </motion.div>
      )}
      <div className="absolute left-2/4 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};
export default Navbar;
