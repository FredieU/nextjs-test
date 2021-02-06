import { API_URL } from "../../constants";

export default function ClassName({ ptClass }) {
  return (
    <>
      <h1>{ptClass.name}</h1>
      <p>{ptClass.description}</p>
    </>
  );
}

export async function getStaticProps({ params: { uid } }) {
  const class_res = await fetch(`${API_URL}/classes/?uid=${uid}`);
  const ptClass = await class_res.json();

  return {
    props: {
      ptClass: ptClass[0],
    },
  };
}

export async function getStaticPaths() {
  const classes_res = await fetch(`${API_URL}/classes/`);
  const classes = await classes_res.json();

  return {
    paths: classes.map(({ uid }) => ({
      params: { uid: String(uid) },
    })),
    fallback: false,
  };
}
