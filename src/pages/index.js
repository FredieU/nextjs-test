import Head from "next/head";
import Link from "next/link";
import "fontsource-roboto";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";
import { API_URL } from "../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary,
    justifySelf: "center",
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: "1.2rem",
  },
  titleBar: {
    background: "rgba(0, 0, 0, 0.6)",
    // "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)",
    height: "100%",
  },
  image: {
    width: "100vw",
  },
}));

export default function Home({ apiUrl, classes }) {
  const classesClassNames = useStyles();

  return (
    <>
      <Head>
        <title>PT App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GridList cellHeight={160} cols={1}>
        {classes.map(({ image, name, uid }) => (
          <Link href={`/classes/${uid}`}>
            <GridListTile key={uid} cols={1}>
              <img
                className={classesClassNames.image}
                src={`${apiUrl}${image.url}`}
                alt={name}
              />
              <GridListTileBar
                title={name}
                classes={{
                  root: classesClassNames.titleBar,
                  title: classesClassNames.title,
                }}
              />
            </GridListTile>
          </Link>
        ))}
      </GridList>
    </>
  );
}

export async function getStaticProps() {
  const classes_res = await fetch(`${API_URL}/classes/`);
  const classes = await classes_res.json();

  return {
    props: {
      apiUrl: API_URL,
      classes,
    },
  };
}
