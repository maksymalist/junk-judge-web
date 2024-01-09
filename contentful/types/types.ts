/* types.ts */
import { Document } from "@contentful/rich-text-types";

export type Author = {
  name: string;
  picture: string;
};

export type CoverImage = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
    };
  };
};

export type BlogItem = {
  fields: {
    title: string;
    slug: string;
    date: Date;
    author: Author;
    coverImage: CoverImage;
    content: Document;
    tags: string[];
  };
};
export type BlogItems = BlogItem[];

export type BlogQueryResult = {
  items: BlogItems;
};
