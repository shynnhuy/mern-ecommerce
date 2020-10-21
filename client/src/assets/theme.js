import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import orange from "@material-ui/core/colors/deepOrange";

export default createMuiTheme({
  palette: {
    primary: orange,
    secondary: pink,
    lighter: {
      main: pink[50],
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    htmlFontSize: 16,
  },
  overrides: {
    MuiFormControl: {
      marginNormal: {
        marginTop: "8px",
      },
    },
    MuiCssBaseline: {
      "@global": {
        // "@font-face": [josefin],
        "*::-webkit-scrollbar": {
          width: "0.5em",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0, 0.85)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          outline: "1px solid slategrey",
        },
      },
    },
  },
});
