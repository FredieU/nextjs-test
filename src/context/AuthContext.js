import { createContext, useState } from "react";
import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUser] = useState();
  const router = useRouter();

  async function loginUser(email) {
    setUser({ email });
  }

  async function logoutUser() {
    setUser(null);
    router.push("/");
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
