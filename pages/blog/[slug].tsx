import { NextPage } from "next";
import { getAllPostFilenames, getPost } from "../../utils";
import { PostType } from "../../types";
import Link from "next/link";

// https://stackoverflow.com/questions/64332569/highlight-code-with-markdown-it-js-and-highlight-js

import md from "markdown-it";
import hljs from "highlight.js/lib/core";
import markdown_highlight from "markdown-it-highlightjs";

const highlight_options = {
  hljs: hljs,
};

const PostPage: NextPage<PostType> = ({
  slug,
  frontmatter: { title, date, cover_image },
  content,
}) => {
  const htmlContent = md()
    .use(markdown_highlight, highlight_options)
    .render(content);

  return (
    <>
      <Link href="/">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">{date}</div>
        <img src={cover_image} alt="" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const filenames = await getAllPostFilenames();

  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".md", ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPost(slug);
  return {
    props: post,
  };
}

export default PostPage;
