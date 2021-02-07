import classnames from "classnames";
import { Button as Btn } from "@material-ui/core";
import styles from "./Button.module.css";

export function Button({ children, className, ...rest }) {
  const classes = classnames("btn", className, styles.root);

  return (
    <Btn className={classes} variant="contained" {...rest}>
      {children}
    </Btn>
  );
}
