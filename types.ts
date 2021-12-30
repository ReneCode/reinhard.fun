type PostType = {
  slug: string;
  frontmatter: {
    title: string;
    cover_image: string;
    date: string;
    excerpt: string;
  };
  content: string;
};

export type { PostType };
