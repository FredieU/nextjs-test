import { Chip, Container } from "@material-ui/core";
import { AccessTime, Event } from "@material-ui/icons";
import { API_URL } from "../../constants";
import styles from "./ClassPage.module.css";
import { getDateFromISODate, getTimeFromISODate } from "../../utils/dates";

export default function ClassName({ ptClass }) {
  const { date, description, image, name } = ptClass;

  return (
    <>
      <img className={styles.image} src={image} alt={name} />
      <Container component="section">
        <h2>{name}</h2>
        <Chip
          className={styles.tag}
          label={getDateFromISODate(date)}
          variant="outlined"
          color="primary"
          icon={<Event />}
        />
        <Chip
          className={styles.tag}
          label={getTimeFromISODate(date)}
          variant="outlined"
          color="primary"
          icon={<AccessTime />}
        />
        <p>{description}</p>
      </Container>
    </>
  );
}

export async function getStaticProps({ params: { uid } }) {
  const class_res = await fetch(`${API_URL}/classes/?uid=${uid}`);
  const [ptClass] = await class_res.json();
  const classImgUrl = `${API_URL}${ptClass.image.url}`;

  return {
    props: {
      ptClass: { ...ptClass, image: classImgUrl },
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
