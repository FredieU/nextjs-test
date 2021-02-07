import Head from "next/head";
import { useRouter } from "next/router";
import { Container, ThemeProvider } from "@material-ui/core";
import { Footer, Header } from "../components";
import { AuthProvider } from "../context/AuthContext";
import { theme } from "../theme";
import styles from "./App.module.css";
import "./global.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>PT App | {router.pathname}</title>
        </Head>
        <Header />
        <Container
          className={styles.root}
          disableGutters={true}
          component="main"
        >
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}
