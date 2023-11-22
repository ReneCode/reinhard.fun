import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

// import "highlight.js/styles/stackoverflow-dark.min.css";
// import "highlight.js/styles/tokyo-night-dark.min.css";
import "highlight.js/styles/paraiso-dark.min.css";
// import "highlight.js/styles/kimbie-dark.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
