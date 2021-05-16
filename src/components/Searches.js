import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Author from "./Author";

import ArtistSearch from "./ArtistSearch";
import TitleSearch from "./TitleSearch";

const useStyles = makeStyles({
  // root: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   padding: "30px",
  // },
  // card: {
  //   width: "140px",
  //   margin: "10px",
  //   padding: "10px",
  //   height: "200px",
  // },
});

const Searches = () => {
  const [authorBooks, setAuthorBooks] = useState([]);
  const [titleBooks, setTitleBooks] = useState([]);
  const classes = useStyles();

  const letUsSeeBooksByAuthor = (songs) => {
    setAuthorBooks(songs);
  };

  const letUsSeeBooksByTitle = (songs) => {
    setTitleBooks(songs);
  };
  return (
    <Grid
    container
    direction="row"
    justify="space-around"
    alignItems="center"
    >
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

{/* <Paper className={classes.paper} key={song.id}>
<CardActionArea>
<Typography 
    className={classes.heading}
    gutterBottom variant="h5" 
    component="h2">
      {song.artist}
    </Typography>
  <CardMedia
    component="img"
    alt="CD image"
    height="140"
    image={image}
    title="CD image"
  />
  <CardContent>
    <Typography 
    gutterBottom variant="h5" 
    component="h2">
      {song.title}
    </Typography>
    <Typography 
    variant="body2" 
    color="textSecondary" 
    component="p">
      <p>✏️Writers: {song.writers}</p>
      <p>Released: {song.released}</p>
      <p>{song.description.length > 80 ?
        `${song.description.substring(0, 80)}...` : song.description
          }</p>
    </Typography>
    <Link to={`/songs/song/${song.id}`} exact>
          <Button className={classes.button}>
          Read more
          </Button>
        </Link>
  </CardContent>
</CardActionArea>
</Paper> */}