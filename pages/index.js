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
      </main>
    </div>
  );
}
