import { Button } from "@material-ui/core";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

export default function Login() {
  const { loginUser } = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    loginUser(email);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>PT App | Log In</title>
        <meta name="description" content="Log in to PT App" />
      </Head>

      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          placeholder="Email address"
        />
        <Button type="submit">Log In</Button>
      </form>
    </>
  );
}
