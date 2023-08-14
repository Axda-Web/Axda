"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LinkedInIcon, GithubIcon, FrontendMentorIcon } from "../icons/Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import Logo from "../logo";
import { SunIcon, MoonIcon } from "../icons/Icons";
import MobileMenu from "../mobile-menu/MobileMenu";
import type { NavLink, NavLinks } from "@/types";

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

export type CustomLink = Omit<NavLink, "id"> & { className?: string };

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

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between lg:justify-end dark:text-light z-10 lg:px-16 md:px-12 sm:px-8">
      <MobileMenu navLinks={navLinks} mode={mode} setMode={setMode} />
      <div className="w-full flex items-center justify-between lg:hidden max-w-[1800px] mx-auto">
        <nav className="space-x-8">
          {navLinks.map(({ id, url, title }: NavLink) => (
            <CustomLink key={id} url={url} title={title} />
          ))}
        </nav>
        <nav className="flex justify-between items-center gap-x-6">
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
              <MoonIcon className="fill-dark" />
            ) : (
              <SunIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-2/4 lg:left-16 sm:left-[32px] lg:translate-x-0 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};
export default Navbar;
