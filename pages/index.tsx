import type { NextPage } from "next";
import Head from "next/head";
import Post from "../components/Post";
import { PostType } from "../types";
import { getAllPosts, sortByDate } from "../utils";

interface Props {
  posts: PostType[];
}
const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}

export default Home;
