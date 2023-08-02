import { NextResponse } from "next/server";

const skills = [
  {
    id: 1,
    name: "HTML",
    x: "-21vw",
    y: "2vw",
  },
  {
    id: 2,
    name: "CSS",
    x: "-5vw",
    y: "-9vw",
  },
  {
    id: 3,
    name: "JavaScript",
    x: "21vw",
    y: "4vw",
  },
  {
    id: 4,
    name: "TypeScript",
    x: "0vw",
    y: "14vw",
  },
  {
    id: 5,
    name: "ReactJS",
    x: "-20vw",
    y: "-15vw",
  },
  {
    id: 6,
    name: "NextJS",
    x: "15vw",
    y: "-10vw",
  },
  {
    id: 7,
    name: "Redux",
    x: "35vw",
    y: "-5vw",
  },
  {
    id: 8,
    name: "Figma",
    x: "-25vw",
    y: "18vw",
  },
  {
    id: 9,
    name: "TailwindCSS",
    x: "24vw",
    y: "18vw",
  },
  {
    id: 10,
    name: "ChakraUI",
    x: "30vw",
    y: "12vw",
  },
  {
    id: 11,
    name: "Sass",
    x: "-5vw",
    y: "-19vw",
  },
  {
    id: 12,
    name: "Styled Components",
    x: "15vw",
    y: "-22vw",
  },
  {
    id: 13,
    name: "Jest",
    x: "-32vw",
    y: "10vw",
  },
  {
    id: 14,
    name: "React Testing Library",
    x: "-30vw",
    y: "-5vw",
  },
  {
    id: 15,
    name: "MongoDB",
    x: "0vw",
    y: "24vw",
  },
  {
    id: 16,
    name: "NodeJS",
    x: "-22vw",
    y: "12vw",
  },
];

export async function GET() {
  return NextResponse.json(skills);
}
