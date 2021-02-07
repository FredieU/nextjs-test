import { useRouter } from "next/router";
import { useContext } from "react";
import { Link } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import AuthContext from "../../context/AuthContext";
import { MainRoutes } from "../../routes";
import { Button } from "..";

export function HeaderActions() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { Profile, Login } = MainRoutes;

  const showLoginButton =
    user === null && router.pathname !== Login && router.pathname !== Profile;

  if (user)
    return (
      <Link href={Profile}>
        <Person />
      </Link>
    );

  if (showLoginButton)
    return <Button onClick={() => router.push(Login)}>Log in</Button>;

  return <div></div>;
}
