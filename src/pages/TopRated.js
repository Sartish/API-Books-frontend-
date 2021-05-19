import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { CardActionArea, CardContent, CardMedia, Typography, Grid, Paper, Button, Box, Container } from "@material-ui/core";
import image from "./one.png"
import Loader from "../components/Loader"
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const font =  "'Montserrat', sans-serif";

const defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
  },
  paper: {
    textAlign: 'left',
    padding: "20px",
    width: "300px",
    height: "500px",
    margin: "20px",
    backgroundColor: "#fcecdd",

  },
  text: {
    fontFamily: font,
    fontSize: "30px",
    marginLeft: "20px",
    color: "#989898",
    fontWeight: "bold",
    marginBottom: "0"
  },
  paragraph:{
    fontFamily: font,
    fontSize: "20px",
    marginLeft: "20px",
    color: "#989898",
    fontWeight: "bold",
    marginBottom: "40px"
  },
  note: {
    color: "#f05945",
    fontSize: "35px",
    marginBottom: "0",
    marginTop: "40px"
  },
  button: {
    backgroundColor: "#f05945",
    fontWeight: "bold",
    fontFamily: font,
    color: "#404040",
  },
  link: {
    textDecoration: "none"
  },
  heading: {
  borderRadius: "10px",
  backgroundColor: "#5eaaa8",
  color: "#404040",
  padding: "20px"
  },
  span: {
    fontWeight: "bold"
  },
});

// The Effect Hook lets you perform side effects in function components:
export const TopRated = () => {
  const classes = useStyles();
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://saras-mongo-api.herokuapp.com/songs/top-rated")
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data) 
      });
      setIsLoading(false)
  }, []);


  return (

    <>
    {isLoading && <Loader/>}
      <Container>
        <Box {...defaultProps} borderLeft={0} borderRight={0} >
          <p className={classes.text}>All nr One songs <MusicNoteIcon className={classes.note} /> </p>
          </Box>
          <Box {...defaultProps} borderLeft={0} borderRight={0} >
          <p className={classes.paragraph}>Here you find all songs that has been number ONE on Billboard</p>
        </Box>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {/* <div className={classes.wrapper}> */}
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
            height="100"
            image={image}
            title="CD image"
          />
          <CardContent>
            <Typography 
            height="200"
            gutterBottom variant="h5" 
            component="h2">
              {song.artist}
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary" 
              height="200"
              className={classes.body}
              component="p">
                <p><span className={classes.span}>✏️Writers:</span> {song.writers}</p>
                <p><span className={classes.span}>Released:</span> {song.released}</p>
                <p><span className={classes.span}>About the song:</span> {song.description.length > 80 ?
                  `${song.description.substring(0, 80)}...` : song.description
                    }</p>
          </Typography>
            <Link className={classes.link} to={`/songs/song/${song.id}`} exact>
                  <Button className={classes.button}>
                  Read more
                  </Button>
                </Link>
          </CardContent>
        </CardActionArea>
        </Paper>
        ))}
        {/* </div> */}
        </Grid>
      </Container>
    </>
  );
};
