import { EducationsSchema } from "../models/zod-schemas";

// const BASE_URL = `https://${process.env.VERCEL_URL}`;

const getAll = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/educations`);
  const data = await res.json();
  return EducationsSchema.parse(data);
};

// eslint-disable-next-line
export default { getAll };
