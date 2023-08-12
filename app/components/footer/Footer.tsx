"use client";

import { motion } from "framer-motion";
import Layout from "../layout";

import {
  NextjsIcon,
  GithubIcon,
  FrontendMentorIcon,
  LinkedInIcon,
} from "../icons/Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-light text-light font-medium text-lg sm:text-base bg-dark">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:gap-y-6 max-w-[1800px] mx-auto">
        <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
        <div className="flex items-baseline gap-x-2">
          <div>Build with</div>
          <div>
            <NextjsIcon />
          </div>
        </div>
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
        </div>
      </Layout>
    </footer>
  );
};
export default Footer;
