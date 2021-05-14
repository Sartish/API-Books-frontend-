import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Paper, Grid } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: "500px",
    padding: "20px"
  },
  paper: {
    padding: "50px",
    color: "#686868"
  }
})



export const OneSong = () => {
  const classes = useStyles();

  const { id } = useParams();
  const [song, setSong] = useState([]);

  useEffect(() => {
    fetch(`https://saras-mongo-api.herokuapp.com/songs/song/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setSong(json);
      });
  }, [id]);
  return (
    <>
      
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
      
      <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
      <Link to="/songs" exact="true">
      Back to library
      </Link>
        <h1>🎶 {song.title} by {song.artist}</h1> 
          <h3>Writer: {song.writer}</h3>
          <h3>Porducer: {song.producer}</h3>
          <h3>Released: {song.released}</h3>
          <h3>Record position: {song.position}</h3>
          <h3>About the song</h3>
          <p>{song.description}</p>
      </Paper>
    </div>
    </Grid>
  
    </>
  );
};
