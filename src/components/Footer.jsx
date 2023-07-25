import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:gap-y-6">
        <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
        <div>
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px">
            &#9825;
          </span>{" "}
          by &nbsp;
          <Link
            className="underline underline-offset-2"
            target={"_blank"}
            href="https://github.com/Axda-Web"
          >
            Axda
          </Link>
        </div>
        <Link
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/alyx-darenne/"
          target={"_blank"}
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};
export default Footer;
