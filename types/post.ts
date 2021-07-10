import { AuthorType } from "./author";

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: AuthorType;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};
