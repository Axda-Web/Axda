import { ProjectsSchema } from "../models/zod-schemas";

// const BASE_URL = `https://${process.env.VERCEL_URL}`;

const getAll = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/projects`);
  const data = await res.json();
  return ProjectsSchema.parse(data);
};

// eslint-disable-next-line
export default { getAll };
