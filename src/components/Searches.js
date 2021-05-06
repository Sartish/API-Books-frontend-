import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import AuthorSearch from "./AuthorSearch";
import TitleSearch from "./TitleSearch";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
  },
  card: {
    width: "140px",
    margin: "10px",
    padding: "10px",
  },
});

const Searches = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={1}>
      <div>
        <AuthorSearch />
      </div>
      <div>
        <TitleSearch />
      </div>
    </Grid>
  );
};

export default Searches;
