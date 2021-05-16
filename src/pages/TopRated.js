import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { CardActionArea, CardContent, CardMedia, Typography, Grid, Paper, Button } from "@material-ui/core";
import image from "./one.png"

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
  },
  paper: {
    width: "400px",
    height: "450px",
    margin: "20px",
    padding: "30px",
    backgroundColor: "#a3d2ca"

  },
  button: {
    backgroundColor: "#f05945"
  },
  Link: {
    textDecoration: "none"
  },
  heading: {
  borderRadius: "10px",
  backgroundColor: "#5eaaa8",
  padding: "20px"
  }
});

// The Effect Hook lets you perform side effects in function components:
export const TopRated = () => {
  const classes = useStyles();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://saras-mongo-api.herokuapp.com/songs/top-rated")
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data) 
      });
  }, []);

  return (
    <>
      <Grid className={classes.grid}
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      >
        <div className={classes.wrapper}>
        {songs.map((song) => (
          <Paper className={classes.paper} key={song.id}>
          <CardActionArea>
            <Typography 
            className={classes.heading}
            gutterBottom variant="h5" 
            component="h2">
              {song.title}
            </Typography>
            <CardMedia className={classes.image}
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
            {song.artist}
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
      </div>
      </Grid>
    </>
  );
};
