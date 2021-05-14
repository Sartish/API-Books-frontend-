import React from "react";
import { Paper, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import front from "./frontsong.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  paper: {
    position: "relative",
    backgroundImage: `url(${front})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
  },
  container: {
    position: "absolute",
    display: "flex",
    top: "85%",
    left: "50%"
  },
});

export const FrontPage = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Container className={classes.container}>
        <Button><Link to="/songs" exact="true">
          Song Library
        </Link></Button>
        <Button>
        <Link to="/books/top-rated" exact="true">
          Top list
        </Link>
        </Button>
      </Container>
    </Paper>
  );
};
