import Layout from "../components/layout";
import AnimatedText from "../components/animated-text";
import Link from "next/link";
import TransitionEffect from "../components/transition-effect";
import { Post } from "../../types";
import AnimatedImage from "../components/animated-image";
import Article from "../components/article";
import postService from "@/services/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alyx DARENNE | Blog",
  description:
    "Unlock the world of web development through my insightful blog! Delve into a treasure trove of React/Next.js knowledge, best practices, and practical tips that will supercharge your frontend skills. Stay updated with the latest trends, tutorials, and industry insights as we explore the dynamic landscape of web development together. Whether you're a beginner or a seasoned pro, my blog is your go-to resource for all things React/Next.js. Let's embark on this enriching learning journey and master the art of building exceptional web experiences!",
};

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: Omit<Post, "id" | "content" | "date">) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <AnimatedImage
          src={`/images/posts/${img}`}
          alt={title}
          classes="w-full h-auto"
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
const BlogPage = async () => {
  const posts = await postService.getAll();
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light max-w-[1800px] mx-auto">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1">
            {posts
              .filter((article) => article.featured)
              .map((article) => (
                <FeaturedArticle key={article.id} {...article} />
              ))}
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All articles
          </h2>
          <ul>
            {posts
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
export default BlogPage;
