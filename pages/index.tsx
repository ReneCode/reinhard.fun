import Head from "next/head";
import Image from "next/image";
import { getAllPosts } from "../lib/api";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { PostType } from "../types/post";
import Container from "../components/Container";
import Intro from "../components/Intro";
import HeroPost from "../components/HeroPost";

type Props = {
  allPosts: PostType[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Head>
          <title>reinhard.fun Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              author={heroPost.author}
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            ></HeroPost>
          )}
          {allPosts.map((post, idx) => {
            return <div key={idx}>{post.title}</div>;
          })}
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  return {
    props: { allPosts },
  };
};

export default Index;
