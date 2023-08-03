import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const educations = await prisma.education.findMany();
  return NextResponse.json(educations);
}
