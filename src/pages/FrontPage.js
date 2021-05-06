import React from "react";
import { Button, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import library from "./library.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    backgroundImage: `url(${library})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
  },
});

export const FrontPage = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <h3>first page</h3>
      <Link to="/books" exact="true">
        CLick
      </Link>
    </Paper>
  );
};
