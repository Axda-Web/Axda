import { NextResponse } from "next/server";

const experiences = [
  {
    id: 1,
    position: "Front-End developer (traineeship)",
    company: "Dept",
    companyLink: "https://www.deptagency.com",
    time: "Sept 2022 - May 2023",
    address: "Amsterdam, NL",
    work: [
      {
        id: 1.1,
        description:
          "Create front-end templates with focus on UX and accessibility",
      },
      {
        id: 1.2,
        description:
          "Build performant Web App using Next.js, TypeScript and Chakra UI",
      },
      {
        id: 1.3,
        description:
          "Collaborate with members of a multidisciplinary Scrum team",
      },
      {
        id: 1.4,
        description: "Work on international, large-scale projects",
      },
    ],
  },
  {
    id: 2,
    position: "IT System Technician",
    company: "Econocom",
    companyLink: "https://www.econocom.com",
    time: "Jan 2021 - Oct 2021",
    address: "Toulouse, FR",
    work: [
      {
        id: 2.1,
        description: "Exchange & Skype Server administration",
      },
      {
        id: 2.2,
        description: "Windows Server 2016 - AD administration",
      },
      {
        id: 2.3,
        description: "N2 User Support",
      },
    ],
  },
  {
    id: 3,
    position: "Web Designer",
    company: "SwotDigital",
    companyLink: "https://www.swotdigital.com/",
    time: "Sept 2020 - Dec 2020",
    address: "Dublin, IE",
    work: [
      {
        id: 3.1,
        description: "WordPress Webdesign",
      },
      {
        id: 3.2,
        description: "Content creation / Copywriting",
      },
      {
        id: 3.3,
        description: "Mobile First / Responsive Design",
      },
      {
        id: 3.4,
        description: "Graphics design (logo, banner)",
      },
      {
        id: 3.5,
        description: "SEO Strategy",
      },
    ],
  },
  {
    id: 4,
    position: "IT Deployment Technician",
    company: "Computacenter",
    companyLink: "https://www.computacenter.com/who-we-are",
    time: "Feb 2020 - Jul 2020",
    address: "Toulouse, FR",
    work: [
      {
        id: 4.1,
        description: "Hardware / Software Install + Configuration",
      },
      {
        id: 4.2,
        description: "User Data migration + Backup management",
      },
      {
        id: 4.3,
        description: "Customer relationship + Activity report",
      },
    ],
  },
  {
    id: 5,
    position: "IT System & Network Technician",
    company: "Balma",
    companyLink: "https://www.computacenter.com/who-we-are",
    time: "Feb 2020 - Jul 2020",
    address: "Toulouse, FR",
    work: [
      {
        id: 5.1,
        description: "Hardware / Software Install + Configuration",
      },
      {
        id: 5.2,
        description: "User Data migration + Backup management",
      },
      {
        id: 5.3,
        description: "Customer relationship + Activity report",
      },
    ],
  },
  {
    id: 6,
    position: "Web Moderator",
    company: "Atchik",
    companyLink: "https://atchik.com/",
    time: "Dec 2017 - Aug 2017",
    address: "Toulouse, FR",
    work: [
      {
        id: 6.1,
        description: "Web content moderation on Social Media / Forum",
      },
      {
        id: 6.2,
        description: "Editorial charter and style guide implementation",
      },
      {
        id: 6.3,
        description: "Community management",
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(experiences);
}
