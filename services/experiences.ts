import { ExperiencesSchema } from "../models/zod-schemas";

const BASE_URL = "http://localhost:3000";

const getAll = async () => {
  const res = await fetch(`${BASE_URL}/api/experiences`);
  const data = await res.json();
  return ExperiencesSchema.parse(data);
};

// eslint-disable-next-line
export default { getAll };
