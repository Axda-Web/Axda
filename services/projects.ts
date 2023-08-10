import { ProjectsSchema } from "../models/zod-schemas";

const BASE_URL = "http://localhost:3000";

const getAll = async () => {
  const res = await fetch(`${BASE_URL}/api/projects`);
  const data = await res.json();
  return ProjectsSchema.parse(data);
};

// eslint-disable-next-line
export default { getAll };
