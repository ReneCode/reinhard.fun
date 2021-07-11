import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { Cms } from "./cms";

const postsDirectory = join(process.cwd(), "_posts");

const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = async (slug: string) => {
  const cms = new Cms();
  const post = await cms.getEntry(slug);
  return post;
};

export const getAllPosts = async () => {
  const cms = new Cms();
  const posts = await cms.getEntries();
  return posts;
};
