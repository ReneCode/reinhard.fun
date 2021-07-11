import Link from "next/link";
import { PostType } from "../types/post";

type Props = {
  post: PostType;
};

const BlogListItem = ({ post }: Props) => {
  return (
    <>
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        <h2>
          <a aria-label={post.title}>{post.title}</a>
        </h2>
      </Link>
    </>
  );
};

export default BlogListItem;
