import { NextResponse } from "next/server";

const posts = [
  {
    id: 1,
    title: "Build A Custom Pagination Component In Reactjs From Scratch Learn",
    summary:
      "Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",
    content:
      "Enim incididunt non voluptate reprehenderit. Duis duis in aute proident nisi. Veniam aliqua ut eu culpa id commodo enim Lorem id eu ipsum cillum. Pariatur exercitation ipsum occaecat irure est officia sit officia pariatur ipsum ut. Et exercitation culpa laborum aliquip aliqua. Elit in officia tempor Lorem officia quis. Quis culpa dolore officia irure elit. Veniam esse magna proident labore duis excepteur sit. Occaecat mollit deserunt ad sint laborum id non est aliqua proident eiusmod pariatur reprehenderit officia. Sunt do eiusmod ad sit dolore dolore ex quis pariatur laborum laboris. Sit commodo sunt tempor exercitation proident esse aliquip. Sit irure aute esse ex dolor culpa enim. Aute officia labore sunt elit consequat nulla mollit in occaecat labore ad tempor officia.Nulla proident quis aliqua ea in cillum deserunt anim dolor. Cupidatat magna ea ea qui amet eu dolore do ea Lorem est Lorem. Ut cupidatat irure sit minim reprehenderit. Excepteur veniam non consectetur occaecat nisi aliquip fugiat ipsum sit mollit. Labore sunt ut ut nulla ea commodo tempor aliquip sit quis esse labore. Consequat laboris labore cillum pariatur amet. Esse id anim eu duis adipisicing sint laboris pariatur aliquip commodo. Pariatur irure dolor excepteur do cupidatat ea excepteur minim occaecat excepteur occaecat. Excepteur fugiat laboris fugiat ex non ad qui non est.",
    img: "pagination_component_in_reactjs.jpg",
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
    img: "create_loading_screen_in_reactjs.jpg",
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
    img: "form_validation_in_reactjs_using_custom_react_hook.png",
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
    img: "smooth_scrolling_in_reactjs.png",
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
    img: "create_modal_component_in_react_using_react_portals.png",
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
    img: "todo_list_app_built_using_react_redux_and_framer_motion.png",
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
    img: "What_is_Redux_with_easy_explanation.png",
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
    img: "What_is_higher_order_component_in_React.jpg",
    link: "/",
    date: "01/01/2023",
    time: "5 min read",
    featured: false,
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
