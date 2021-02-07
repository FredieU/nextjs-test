import { CircularProgress, Container } from "@material-ui/core";
import styles from "./Loader.module.css";

export function Loader() {
  return (
    <Container className={styles.root}>
      <CircularProgress />
    </Container>
  );
}
