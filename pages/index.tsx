import Head from "next/head";
import { getAllPosts } from "../lib/api";
import styles from "../styles/index.module.css";
import Layout from "../components/Layout";
import { PostType } from "../types/post";
import Container from "../components/Container";
import BlogListItem from "../components/BlogListItem";

type Props = {
  allPosts: PostType[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Layout>
        <Container>
          {allPosts.map((post, idx) => {
            return <BlogListItem key={idx} post={post}></BlogListItem>;
          })}
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();
  return {
    props: { allPosts },
  };
};

export default Index;
