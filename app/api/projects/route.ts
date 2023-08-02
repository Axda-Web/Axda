import { NextResponse } from "next/server";

const projectData = [
  {
    id: 1,
    title: "Newsletter sign-up form",
    description:
      "The challenge was to build out a newsletter form and get it looking as close to the design as possible.",
    img: "newsletter",
    link: "https://fe-newsletter-bret.vercel.app/",
    github: "https://github.com/Axda-Web/fe-newsletter",
    featured: true,
  },
  {
    id: 2,
    title: "Daily Quotes App",
    description:
      "The challenge was to build out an App that displays random motivational quotes with changing background.",
    img: "daily_quotes",
    link: "https://daily-quotes-beryl.vercel.app/",
    github: "https://github.com/Axda-Web/dailyQuotes",
    featured: false,
  },
  {
    id: 3,
    title: "Todo List App",
    description:
      "The challenge was to build out a Todo List App allowing users to add, edit, delete and archive taks to do.",
    img: "todo_list",
    link: "https://to-do-app-sooty-ten.vercel.app",
    github: "https://github.com/Axda-Web/toDoApp",
    featured: false,
  },
  {
    id: 4,
    title: "My Travel Journal Blog",
    description:
      "The challenge was to build out a blog page displaying a list of blog posts.",
    img: "my_travel_journal",
    link: "https://my-travel-journal-smoky.vercel.app",
    github: "https://github.com/Axda-Web/myTravelJournal",
    featured: true,
  },
  {
    id: 5,
    title: "Fisheye App",
    description:
      "The challenge was to build out a Fiverr like platform for photographers.",
    img: "fisheye",
    link: "https://fisheye-phi.vercel.app",
    github: "https://github.com/Axda-Web/fisheye",
    featured: false,
  },
  {
    id: 6,
    title: "ohmyfood",
    description:
      "The challenge was to build out a website showing a list of restaurants and their menus.",
    img: "ohmyfood",
    link: "https://oh-my-food-kappa.vercel.app",
    github: "https://github.com/Axda-Web/ohMyFood",
    featured: false,
  },
];

export async function GET() {
  return NextResponse.json(projectData);
}
