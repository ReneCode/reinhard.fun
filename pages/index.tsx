import Head from "next/head";
import Image from "next/image";
import { getAllPosts } from "../lib/api/api";
import styles from "../styles/Home.module.css";
import PostType from "../types/post";

type Props = {
  allPosts: PostType[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <h1>Reinhard.fun</h1>
      {allPosts.map((post, idx) => {
        return <div key={idx}>{post.title}</div>;
      })}
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date"]);
  console.log(">>>", allPosts);
  return {
    props: { allPosts },
  };
};

export default Index;
