import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "relative",
    // padding: theme.spacing(0, 4),
  },
  Container: {
    display: "flex",
    // padding: theme.spacing(2),
    // overflow: "hidden",
    // "& > *": {
    //   flex: 1,
    // },
  },
  Card: {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    // height: "100%",
    height: 140,
    borderRadius: theme.spacing(1),
    "&:hover": {
      boxShadow: "0 0 0 3px #00b14f",
      cursor: "pointer",

      // "& .makeStyles-cover-23": {
      //   backgroundColor: "rgba(0,177,79,.6)"
      // }
    },
  },
  Title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1.3rem"
  },
  cover: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .35)",
    backgroundBlendMode: "overlay",
  },
}));
