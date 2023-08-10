import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  img: z.string(),
  link: z.string(),
  github: z.string(),
  featured: z.boolean(),
});

export const ProjectsSchema = z.array(ProjectSchema);

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  summary: z.string(),
  content: z.string(),
  img: z.string(),
  link: z.string(),
  date: z.string(),
  time: z.string(),
  featured: z.boolean(),
});

export const PostsSchema = z.array(PostSchema);

export const EducationSchema = z.object({
  id: z.number(),
  type: z.string(),
  place: z.string(),
  placeLink: z.string(),
  time: z.string(),
  info: z.array(
    z.object({
      id: z.number(),
      description: z.string(),
    })
  ),
});

export const EducationsSchema = z.array(EducationSchema);

export const ExperienceSchema = z.object({
  id: z.number(),
  position: z.string(),
  company: z.string(),
  companyLink: z.string(),
  time: z.string(),
  address: z.string(),
  work: z.array(
    z.object({
      id: z.number(),
      description: z.string(),
    })
  ),
});

export const ExperiencesSchema = z.array(ExperienceSchema);

export const SkillSchema = z.object({
  id: z.number(),
  name: z.string(),
  x: z.string(),
  y: z.string(),
});

export const SkillsSchema = z.array(SkillSchema);
