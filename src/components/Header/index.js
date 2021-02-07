import Link from "next/link";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { FitnessCenter as AppIcon } from "@material-ui/icons";
import styles from "./Header.module.css";
import { HeaderActions } from "./HeaderAction";
import { MainRoutes } from "../../routes";

export function Header() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar className={styles.container}>
        <Link href={MainRoutes.Root}>
          <div className={styles.logo}>
            <AppIcon />
            <Typography variant="h6">PT App</Typography>
          </div>
        </Link>
        <HeaderActions />
      </Toolbar>
    </AppBar>
  );
}
