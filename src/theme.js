import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
});
