import { createClient } from "contentful";

const spaceId = process.env.CONTENTFUL_SPACE_ID || "";
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || "";

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});
