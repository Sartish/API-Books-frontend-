import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Paper, Grid, Box, Container, Button } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';


const font =  "'Montserrat', sans-serif";

const defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px"
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: "600px",
    padding: "20px",
    // backgroundColor: "#f05945",
  },
  wrapper: {
    backgroundColor: '#a3d2ca',
  },
  paper: {
    padding: "50px",
    color: "#686868",
    backgroundColor:"#D3D3D3",
  },
  link: {
    textDecoration: "none"
  },
  text: {
    fontFamily: font,
    fontSize: "40px",
    marginLeft: "20px",
    color: "#989898",
    fontWeight: "bold",
  },
  note: {
    color: "#f05945",
    fontSize: "35px"
  },
  button: {
    backgroundColor:"#f05945",
    margin: "5px",
    color: "lightgrey",
    fontWeight: "bold",
    fontFamily: font
  },

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
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Box {...defaultProps} borderLeft={0} borderRight={0} >
              <p className={classes.text}>About the song...</p>
              <MusicNoteIcon className={classes.note} /> 
        </Box>
        
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
        
        <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
        <Link className={classes.link} to="/songs" exact="true">
        <Button className={classes.button}>Back to library</Button>
        </Link>
          <h1>🎶 {song.title} by {song.artist}</h1> 
            <h3>Writer: {song.writers}</h3>
            <h3>Producer: {song.producer}</h3>
            <h3>Released: {song.released}</h3>
            <h3>Record position: nr {song.position}</h3>
            <h3>Writers thoughts about the song...</h3>
            <p>{song.description}</p>
        </Paper>
      </div>
      </Grid>
    </Container>
  
    </div>
  );
};
