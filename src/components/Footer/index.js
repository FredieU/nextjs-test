import { Toolbar } from "@material-ui/core";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root}>
      <Toolbar>PT App</Toolbar>
    </footer>
  );
}
