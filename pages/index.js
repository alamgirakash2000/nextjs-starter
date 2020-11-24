import "../styles/index.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My First Next app</title>
        <meta name="description" content="A image for NextJs" />
      </Head>

      <main className="home text-center">
        <h1>My First Next App</h1>
        <p>Remove this and start from here.</p>
      </main>
    </>
  );
}
