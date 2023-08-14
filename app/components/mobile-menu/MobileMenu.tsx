"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLinks } from "@/types";
import { CustomLink } from "../navbar/Navbar";
import {
  LinkedInIcon,
  GithubIcon,
  FrontendMentorIcon,
  SunIcon,
  MoonIcon,
} from "../icons/Icons";
import { Dispatch, SetStateAction } from "react";

const CustomMobileLink = ({
  url,
  title,
  className = "",
  toggle,
}: Omit<CustomLink, "id"> & { toggle: () => void }) => {
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

type MobileMenuProps = {
  navLinks: NavLinks;
  mode: string | Dispatch<SetStateAction<string>>;
  setMode: string | Dispatch<SetStateAction<string>>;
};

const MobileMenu = ({ navLinks, mode, setMode }: MobileMenuProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLightModeClick = () => {
    // @ts-ignore
    setMode(mode === "light" ? "dark" : "light");
    onClose();
  };

  return (
    <>
      <button
        onClick={onOpen}
        className="flex-col justify-center items-center hidden lg:flex lg:mt-2"
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
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="bg-dark/90 dark:bg-light/75 backdrop-blur-md">
          <DrawerCloseButton className="w-fit absolute top-8 right-8 stroke-white dark:stroke-0" />
          <DrawerBody className="flex flex-col justify-center items-center h-full gap-y-12">
            <nav className="flex items-center flex-col justify-center flex-wrap mt-2">
              {navLinks.map(({ id, url, title }) => (
                <CustomMobileLink
                  key={id}
                  url={url}
                  title={title}
                  toggle={onClose}
                />
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
                className="w-6 bg-light rounded-full"
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
            </nav>
            <button
              // @ts-ignore
              onClick={handleLightModeClick}
              className={`flex items-center justify-center rounded-full p-1 mt-6 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <MoonIcon className="fill-dark" />
              ) : (
                <SunIcon className="fill-dark" />
              )}
            </button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default MobileMenu;
