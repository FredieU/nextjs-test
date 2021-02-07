import { useRouter } from "next/router";
import { useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import { Button, Loader } from "../../components";
import AuthContext from "../../context/AuthContext";
import { MainRoutes } from "../../routes";
import styles from "./Profile.module.css";

export default function Profile() {
  const { logoutUser, user } = useContext(AuthContext);
  const router = useRouter();

  if (user === undefined) return <Loader />;

  return (
    <Container component="section" className={styles.root}>
      <h2>Profile</h2>
      {user ? (
        <>
          <Typography>Logged in as {user.email}</Typography>
          <Button onClick={logoutUser}>Log Out</Button>
        </>
      ) : (
        <Button onClick={() => router.push(MainRoutes.Login)}>Log In</Button>
      )}
    </Container>
  );
}
