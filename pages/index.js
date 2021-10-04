import Head from "next/head";

import Header from "../components/modules/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Frontend Mentor | Blogr</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Header />
      </main>
    </div>
  );
}
