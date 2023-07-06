import Link from "next/link";
import { useRouter } from "next/router";
import { TwitterIcon, LinkedInIcon, GithubIcon } from "./Icons";
import { motion } from "framer-motion";

import Logo from "./Logo";

const navLinks = [
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
  {
    id: 4,
    url: "/articles",
    title: "Articles",
  },
];

const CustomLink = ({ url, title }) => {
  const { asPath } = useRouter();
  return (
    <Link href={url} className="relative group">
      {title}
      <span
        className={`h-px inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          asPath === url ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between">
      <nav className="space-x-8">
        {navLinks.map(({ id, url, title }) => (
          <CustomLink key={id} url={url} title={title} />
        ))}
      </nav>
      <nav className="flex justify-between items-center gap-x-6">
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6"
        >
          <GithubIcon />
        </motion.a>
      </nav>
      <div className="absolute left-2/4 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};
export default Navbar;
