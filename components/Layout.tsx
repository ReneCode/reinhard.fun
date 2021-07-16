import Head from "next/head";
import Header from "./Header";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>reinhard.fun Blog</title>
        <link rel="styesheet" href="styles.css" />
      </Head>
      <div className="">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
