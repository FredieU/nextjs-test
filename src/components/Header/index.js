import Link from "next/link";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { FitnessCenter as AppIcon } from "@material-ui/icons";
import styles from "./Header.module.css";

export function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar className={styles.header}>
        <Link href="/">
          <div className={styles.logo}>
            <AppIcon />
            <Typography variant="h6">PT App</Typography>
          </div>
        </Link>
        <div className={styles.action}>
          <Link href="/log-in">
            <Button className={styles.logInBtn} variant="contained">
              Log in
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
