import Head from "next/head";
import Link from "next/link";
import { API_URL } from "../constants";
import "fontsource-roboto";

export default function Home({ classes }) {
  return (
    <>
      <Head>
        <title>PT App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {classes.map(({ name, uid }) => (
          <div>
            <Link href={`/classes/${uid}`}>{name}</Link>
          </div>
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const classes_res = await fetch(`${API_URL}/classes/`);
  const classes = await classes_res.json();

  return {
    props: {
      classes,
    },
  };
}
