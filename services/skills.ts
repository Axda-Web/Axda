import { SkillsSchema } from "../models/zod-schemas";

const BASE_URL = `https://${process.env.VERCEL_URL}`;

const getAll = async () => {
  const res = await fetch(`${BASE_URL}/api/skills`);
  const data = await res.json();
  return SkillsSchema.parse(data);
};

// eslint-disable-next-line
export default { getAll };
