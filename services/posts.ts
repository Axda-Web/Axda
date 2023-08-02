import { PostsSchema } from "../models/zod-schemas";

const BASE_URL = "http://localhost:3000";

const getAll = async () => {
  const res = await fetch(`${BASE_URL}/api/posts`);
  const data = await res.json();
  return PostsSchema.parse(data);
};

// eslint-disable-next-line
export default { getAll };
