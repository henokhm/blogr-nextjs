import Head from "next/head";
import Link from "next/link";

import ButtonPrimaryCTA from "../components/elements/ButtonPrimaryCTA";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Frontend Mentor | Blogr</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1>Hello World!</h1>
        <ButtonPrimaryCTA text="Click Me!" linkTo="#" />
      </main>
    </div>
  );
}
