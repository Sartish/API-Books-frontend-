import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { CardActionArea, CardMedia, CardContent, Typography, Grid, Paper, Button, Container, Box } from "@material-ui/core";
import image from "./cd.png"
import { FrontPage } from "./FrontPage";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const font =  "'Montserrat', sans-serif";

const defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px"
};

const useStyles = makeStyles({
  pages: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    marginLeft: "40px",
    marginRight: "40px",
    color: "#989898",
    fontSize: "20px",
    fontWeight: "bold"
  },
  text: {
    fontFamily: font,
    fontSize: "40px",
    marginLeft: "20px",
    color: "#989898",
    fontWeight: "bold"
  },
  note: {
    color: "#f05945",
    fontSize: "35px"
  },
  paper: {
    textAlign: 'left',
    padding: "20px",
    width: "300px",
    height: "470px",
    margin: "20px",
    backgroundColor: "#fcecdd",
    fontFamily: font,
    color: "#404040",
  },
  heading: {
    backgroundColor: "#5eaaa8",
    borderRadius: "10px",
    padding: "20px",
    fontFamily: font,
    color: "#404040",
  },
  header: {
    height: "400px",
    width: "300px"
  },
  span: {
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "lightgrey",
    margin: "5px",
    color: "#f05945",
    fontWeight: "bold",
    fontFamily: font
  },
  link: {
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
      <FrontPage />
      <Container>
      <Box {...defaultProps} borderLeft={0} borderRight={0} >
        <p className={classes.text}>All 500 songs</p>
        <MusicNoteIcon className={classes.note} />
      </Box>
      <div className={classes.pages}>
        <Button variant="primary" className={classes.button} onClick={movePreviousPage} disabled={pageNumber === 1}>Previous</Button>
        <p>{`Page ${pageNumber} / 15`}</p>
        <Button className={classes.button} onClick={moveNextPage} disabled={pageNumber === 15}>Next</Button>
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
            {song.title}
          </Typography>
        <CardMedia
          component="img"
          alt="CD image"
          height="80"
          width="80"
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
     </Grid>
    </Container>
    </>
  );
};
