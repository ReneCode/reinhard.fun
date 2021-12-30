import { NextPage } from "next";
import Link from "next/link";
import { PostType } from "../types";

interface Props {
  post: PostType;
}
const Post: NextPage<Props> = ({ post }) => {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt="" />
      <div className="post-date">{post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
};

export default Post;
