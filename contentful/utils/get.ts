import { client } from "../client";
import { BlogQueryResult, BlogItem } from "../types/types";

export const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({
    content_type: "simpleBlog",
  });

  //@ts-ignore
  return entries;
};

export const getBlogEntry = async (slug: string): Promise<BlogItem> => {
  const entries = await client.getEntries({
    content_type: "simpleBlog",
  });

  //@ts-ignore
  return entries.items.find((entry) => entry.fields.slug === slug);
};
