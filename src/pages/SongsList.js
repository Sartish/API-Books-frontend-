import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { CardActionArea, CardMedia, CardContent, Typography, Grid, Paper, Button } from "@material-ui/core";
import Searches from "../components/Searches";
import image from "./cd.png"

const useStyles = makeStyles({
  paper: {
    textAlign: 'left',
    padding: "20px",
    width: "400px",
    height: "500px",
    margin: "20px",
    backgroundColor: "#fcecdd"
  },
  heading: {
    backgroundColor: "#ffc288",
    borderRadius: "10px",
    padding: "20px"
  },
  button: {
    backgroundColor: "#b34180",
    textDecoration: "none"
  },
  Link: {
    textDecoration: "none"
  }
});

// The Effect Hook lets you perform side effects in function components:
export const SongsList = () => {
  const classes = useStyles();

  const [songs, setSongs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    fetch(`https://saras-mongo-api.herokuapp.com/songs?page=${pageNumber}`)
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data);
      });
  }, [pageNumber]);

  const moveNextPage = () => {
    setPageNumber(pageNumber + 1)
  }

  const movePreviousPage = () => {
    setPageNumber(pageNumber -1)
  }

  return (
    <>
      <Searches />
      <Typography
      className={classes.heading}
      gutterBottom variant="h5" 
      component="h2">
        500 greatest hits of all times
      </Typography>
      <div className="page-buttons">
        <p>{`Page ${pageNumber} / 15`}</p>
        <Button className={classes.button} onClick={movePreviousPage} disabled={pageNumber === 1}>Previous Page</Button>
        <Button className={classes.button} onClick={moveNextPage} disabled={pageNumber === 15}>Next Page</Button>
      </div>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
      {songs.map((song) => (
          <Paper className={classes.paper} key={song.id}>
      <CardActionArea>
      <Typography 
          className={classes.heading}
          gutterBottom variant="h5" 
          component="h2">
            {song.artist}
          </Typography>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
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
      </Paper>
      ))}
     </Grid>
    </>
  );
};
