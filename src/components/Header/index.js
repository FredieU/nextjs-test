import Link from "next/link";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { FitnessCenter as AppIcon, Person } from "@material-ui/icons";
import styles from "./Header.module.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

export function Header() {
  const { user } = useContext(AuthContext);

  return (
    <AppBar position="static" color="default">
      <Toolbar className={styles.container}>
        <Link href="/">
          <div className={styles.logo}>
            <AppIcon />
            <Typography variant="h6">PT App</Typography>
          </div>
        </Link>
        {user ? (
          <Link href="/account">
            <Person />
          </Link>
        ) : (
          <Link href="/login">
            <Button className={styles.logInBtn} variant="contained">
              Log in
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
