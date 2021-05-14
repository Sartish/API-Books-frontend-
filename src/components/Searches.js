import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Author from "./Author";

import ArtistSearch from "./ArtistSearch";
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
    height: "200px",
  },
});

const Searches = () => {
  const [authorBooks, setAuthorBooks] = useState([]);
  const [titleBooks, setTitleBooks] = useState([]);
  const classes = useStyles();

  const letUsSeeBooksByAuthor = (books) => {
    setAuthorBooks(books);
  };

  const letUsSeeBooksByTitle = (books) => {
    setTitleBooks(books);
  };
  return (
    <Grid container className={classes.root} spacing={1}>
      <div>
        <ArtistSearch onSearchResult={letUsSeeBooksByAuthor} />
      </div>
      <div>
        <TitleSearch setBookForParentComponent={letUsSeeBooksByTitle} />
      </div>
      <Author books={authorBooks} />
      <Author books={titleBooks} />
    </Grid>
  );
};

export default Searches;
