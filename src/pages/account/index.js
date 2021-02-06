import { Button } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function Account() {
  const { user, logoutUser } = useContext(AuthContext);
  const router = useRouter();

  if (!user) {
    return (
      <Button variant="contained" onClick={() => router.push("/login")}>
        Log in
      </Button>
    );
  }

  return (
    <>
      <Head>
        <title>PT App | Account</title>
      </Head>

      <h2>Account page</h2>
      <Button variant="contained" color="primary" onClick={logoutUser}>
        Log Out
      </Button>
    </>
  );
}
