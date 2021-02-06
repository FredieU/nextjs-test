import { Footer, Header } from "../components";
import { AuthProvider } from "../context/AuthContext";
import "./global.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}
