import { NextResponse } from "next/server";

const educations = [
  {
    id: 1,
    type: "Software Developer Diploma (HBO-ICT)",
    place: "OpenClassrooms",
    placeLink: "https://openclassrooms.com",
    time: "Nov 2021 - Aug 2022",
    info: [
      {
        id: 1.1,
        description: "Responsive Design with HTML, CSS / Sass and Bootstrap",
      },
      {
        id: 1.2,
        description: "Creation of dynamic and interactive websites with JS",
      },
      {
        id: 1.3,
        description: "Build SPA with React & Redux",
      },
      {
        id: 1.4,
        description: "Code testing with Jest & React Testing Library",
      },
      {
        id: 1.5,
        description: "Code versioning and collaboration with Git & GitHub",
      },
      {
        id: 1.6,
        description: "SEO & Accessibility",
      },
      {
        id: 1.7,
        description: "UI & UX Design with Figma",
      },
    ],
  },
  {
    id: 2,
    type: "Professional training - Digital Referent",
    place: "AFPA",
    placeLink: "https://www.afpa.fr/",
    time: "Sept 2019 - Jan 2020",
    info: [
      {
        id: 2.1,
        description: "Full Stack Web Development with WordPress CMS",
      },
      {
        id: 2.2,
        description: "WebMarketing: SEO, SEA, Facebook Ads, SMM",
      },
      {
        id: 2.3,
        description:
          "Introduction to Cybersecurity, Data Protection Officer (GDPR)",
      },
    ],
  },
  {
    id: 3,
    type: "Advanced IT Support Technician Diploma",
    place: "ADRAR",
    placeLink: "https://www.adrar-formation.com/",
    time: "Sept 2017 - Apr 2018",
    info: [
      {
        id: 3.1,
        description: "OSI / TCPIP model",
      },
      {
        id: 3.2,
        description: "Cisco Networking",
      },
      {
        id: 3.3,
        description: "Windows Server / Linux Server Administration",
      },
      {
        id: 3.4,
        description: "VMware / HyperV Virtualization",
      },
    ],
  },
  {
    id: 4,
    type: "Bachelor of Science in Psychology",
    place: "Jean Jaures University",
    placeLink: "https://www.univ-tlse2.fr/",
    time: "2011 - 2014",
    info: [
      {
        id: 4.1,
        description: "Cognitive Psychology - Neuroscience - Ergonomics",
      },
      {
        id: 4.2,
        description: "Minor in Sociology",
      },
    ],
  },
  {
    id: 5,
    type: "Baccalauréat ES (High School Degree)",
    place: "Castella High School",
    placeLink: "https://castella.mon-ent-occitanie.fr",
    time: "2007 - 2008",
    info: [
      {
        id: 5.1,
        description: "Economics and Social Sciences",
      },
      {
        id: 5.2,
        description: "Minor in Mathematics",
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json(educations);
}
