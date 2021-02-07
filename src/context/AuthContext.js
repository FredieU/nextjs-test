import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../constants";
import { MainRoutes } from "../routes";

let magic;
const AuthContext = createContext();

export const AuthProvider = (props) => {
  const router = useRouter();
  const [user, setUser] = useState();
  const [userLoading, setUserLoading] = useState(true);

  async function checkUserLogin() {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();

      if (isLoggedIn) {
        const { email } = await magic.user.getMetadata();
        setUser({ email });
      } else {
        setUser(null);
      }
    } catch (error) {}

    setUserLoading(false);
  }

  async function loginUser(email) {
    setUserLoading(true);
    try {
      await magic.auth.loginWithMagicLink({ email });
      router.push(MainRoutes.Root);
      setUser({ email });
    } catch (error) {
      setUser(null);
    }

    setUserLoading(false);
  }

  async function logoutUser() {
    try {
      await magic.user.logout();
      setUser(null);
      router.push(MainRoutes.Root);
    } catch (error) {}

    setUserLoading(false);
  }

  useEffect(() => {
    magic = new Magic(MAGIC_PUBLIC_KEY);
    checkUserLogin();
    setUserLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ checkUserLogin, loginUser, logoutUser, user, userLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
