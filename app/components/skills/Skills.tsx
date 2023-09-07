"use client";

import { motion } from "framer-motion";

import {
  NextIcon,
  ReactIcon,
  TypescriptIcon,
  TailwindIcon,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  ReduxIcon,
  SassIcon,
  MaterialIcon,
  StyledComponentsIcon,
  JestIcon,
  GraphqlIcon,
  NodejsIcon,
  ExpressIcon,
  MongodbIcon,
  PostgreIcon,
  VScodeIcon,
  GitIcon,
  GithubIcon,
  JiraIcon,
  FigmaIcon,
  SlackIcon,
  WordpressIcon,
  ChakraIcon,
  RtlIcon,
  PrismaIcon,
  CypressIcon,
  RestApiIcon,
} from "../icons/Icons";

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl md:mt-32 mb-10">
        Skills
      </h2>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex justify-center flex-wrap gap-12 sm:gap-8 my-24 sm:my-12"
      >
        <NextIcon className="w-16 h-16 sm:w-12 sm:h-12 fill-primary" />
        <ReactIcon className="w-16 h-16 sm:w-12 sm:h-12 fill-primary" />
        <TypescriptIcon className="w-16 h-16 sm:w-12 sm:h-12 fill-primary" />
        <TailwindIcon className="w-16 h-16 sm:w-12 sm:h-12 fill-primary" />
      </motion.div>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="grid grid-cols-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14"
      >
        <div>
          <h3 className="font-bold text-xl mb-6 border-b-4 py-2 border-b-dark dark:border-b-light">
            Front-End
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-x-2">
              <HtmlIcon className="w-6 h-6 fill-dark dark:fill-light" />
              HTML5
            </li>
            <li className="flex items-center gap-x-2">
              <CssIcon className="w-6 h-6 fill-dark dark:fill-light" />
              CSS3
            </li>
            <li className="flex items-center gap-x-2">
              <JavascriptIcon className="w-6 h-6 fill-dark dark:fill-light" />
              JavaScript
            </li>
            <li className="flex items-center gap-x-2 text-primary">
              <TypescriptIcon className="w-6 h-6 fill-primary" />
              TypeScript
            </li>
            <li className="flex items-center gap-x-2 text-primary">
              <ReactIcon className="w-6 h-6 fill-primary" />
              React
            </li>
            <li className="flex items-center gap-x-2">
              <ReduxIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Redux
            </li>
            <li className="flex items-center gap-x-2 text-primary">
              <NextIcon className="w-6 h-6 fill-primary" />
              Next
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-6 border-b-4 py-2 border-b-dark dark:border-b-light">
            Styling
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-x-2 text-primary">
              <TailwindIcon className="h-6 w-6 fill-primary" />
              Tailwind CSS
            </li>
            <li className="flex items-center gap-x-2">
              <SassIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Sass
            </li>
            <li className="flex items-center gap-x-2">
              <ChakraIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Chakra UI
            </li>
            <li className="flex items-center gap-x-2">
              <MaterialIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Material UI
            </li>
            <li className="flex items-center gap-x-2">
              <StyledComponentsIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Styled Components
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-6 border-b-4 py-2 border-b-dark dark:border-b-light">
            Testing
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-x-2">
              <JestIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Jest
            </li>
            <li className="flex items-center gap-x-2">
              <RtlIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Testing Library
            </li>
            <li className="flex items-center gap-x-2 text-primary">
              <CypressIcon className="w-6 h-6 fill-primary" />
              Cypress
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-6 border-b-4 py-2 border-b-dark dark:border-b-light">
            Back-End
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-x-2 text-primary">
              <RestApiIcon className="w-6 h-6 fill-primary" />
              REST API
            </li>
            <li className="flex items-center gap-x-2">
              <GraphqlIcon className="w-6 h-6 fill-dark dark:fill-light" />
              GraphQL
            </li>
            <li className="flex items-center gap-x-2">
              <NodejsIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Node
            </li>
            <li className="flex items-center gap-x-2">
              <ExpressIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Express
            </li>
            <li className="flex items-center gap-x-2">
              <PrismaIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Prisma
            </li>
            <li className="flex items-center gap-x-2">
              <MongodbIcon className="w-6 h-6 fill-dark dark:fill-light" />
              MongoDB
            </li>
            <li className="flex items-center gap-x-2">
              <PostgreIcon className="w-6 h-6 fill-dark dark:fill-light" />
              PostgreSQL
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-6 border-b-4 py-2 border-b-dark dark:border-b-light">
            Tools
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-x-2 text-primary">
              <VScodeIcon className="w-6 h-6 fill-primary" />
              VS Code
            </li>
            <li className="flex items-center gap-x-2 text-primary">
              <GitIcon className="w-6 h-6 fill-primary" />
              Git
            </li>
            <li className="flex items-center gap-x-2">
              <GithubIcon className="!w-6 !h-6 fill-dark dark:fill-light" />
              GitHub
            </li>
            <li className="flex items-center gap-x-2">
              <JiraIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Jira
            </li>
            <li className="flex items-center gap-x-2">
              <FigmaIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Figma
            </li>
            <li className="flex items-center gap-x-2">
              <SlackIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Slack
            </li>
            <li className="flex items-center gap-x-2">
              <WordpressIcon className="w-6 h-6 fill-dark dark:fill-light" />
              Wordpress
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
export default Skills;
