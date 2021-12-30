import { NextPage } from "next";
import { getAllPostFilenames, getPost } from "../../utils";
import { PostType } from "../../types";
import Link from "next/link";

import { marked } from "marked";

const PostPage: NextPage<PostType> = ({
  slug,
  frontmatter: { title, date, cover_image },
  content,
}) => {
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
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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
