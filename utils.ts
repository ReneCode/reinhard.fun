import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { PostType } from "./types";

function createPostType(
  slug: string,
  frontmatter: { [key: string]: any },
  content: string
) {
  return {
    slug,
    frontmatter: {
      title: frontmatter.title,
      date: frontmatter.date,
      cover_image: frontmatter.cover_image ?? "",
      excerpt: frontmatter.excerpt,
    },
    content,
  };
}

async function getAllPostFilenames(): Promise<string[]> {
  const filenames = await fs.readdir(path.join("posts"));
  return filenames;
}

async function getPost(slug: string): Promise<PostType> {
  const markdownWithMeta = await fs.readFile(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return createPostType(slug, frontmatter, content);
}

async function getAllPosts(): Promise<PostType[]> {
  const filenames = await getAllPostFilenames();
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(".md", "");
      const markdownWithMeta = await fs.readFile(
        path.join("posts", filename),
        "utf-8"
      );
      const { data: frontmatter } = matter(markdownWithMeta);
      return createPostType(slug, frontmatter, "");
    })
  );
  return posts;
}

function sortByDate(post1: PostType, post2: PostType) {
  const d1 = new Date(post1.frontmatter.date);
  const d2 = new Date(post2.frontmatter.date);
  return d2.getTime() - d1.getTime();
}

export { getAllPostFilenames, getPost, getAllPosts, sortByDate };
