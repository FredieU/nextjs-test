import Head from "next/head";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Button, Loader } from "../../components";
import { Container, TextField } from "@material-ui/core";

export default function Login() {
  const { loginUser, userLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    loginUser(email);
  }

  if (userLoading) return <Loader />;

  return (
    <Container>
      <Head>
        <meta name="description" content="Log in to PT App" />
      </Head>

      <h2>Log in {`${userLoading}`}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          value={email}
          id="email-input"
          label="Email address"
          type="email"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <Button type="submit">Log In</Button>
      </form>
    </Container>
  );
}
