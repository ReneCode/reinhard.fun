import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { PostType } from "../../types/post";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Header from "../../components/Header";
import PostTitle from "../../components/PostTitle";
import PostHeader from "../../components/PostHeader";
import PostBody from "../../components/PostBody";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { markdownToHtml } from "../../lib/markdownToHtml";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading ...</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title}</title>
              </Head>
              <PostHeader title={post.title} date={post.date}></PostHeader>
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

type Params = {
  params: {
    slug: string;
  };
};
export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  if (post) {
    const content = await markdownToHtml(post.content);
    return {
      props: {
        post: {
          ...post,
          content: content,
        },
      },
    };
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
