import { orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    secondary: {
      main: red[500],
    },
  },
});

export default theme;
