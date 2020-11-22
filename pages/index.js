import "../styles/index.scss";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>First Next app</title>
      </Head>

      <main className="home text-center">
        <h1>My First Next App</h1>
        <h3>Remove this and start from here.</h3>
      </main>
    </div>
  );
}
