import { z } from "zod";
import {
  ProjectSchema,
  ProjectsSchema,
  PostSchema,
  PostsSchema,
  EducationSchema,
  EducationsSchema,
  ExperienceSchema,
  ExperiencesSchema,
  SkillSchema,
  SkillsSchema,
} from "./models/zod-schemas";

type Project = z.infer<typeof ProjectSchema>;
type Projects = z.infer<typeof ProjectsSchema>;

type Post = z.infer<typeof PostSchema>;
type Posts = z.infer<typeof PostsSchema>;

type Education = z.infer<typeof EducationSchema>;
type Educations = z.infer<typeof EducationsSchema>;

type Experience = z.infer<typeof ExperienceSchema>;
type Experiences = z.infer<typeof ExperiencesSchema>;

type Skill = z.infer<typeof SkillSchema>;
type Skills = z.infer<typeof SkillsSchema>;
