import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { CardActionArea, CardMedia, CardContent, Typography, Grid, Paper, Button, Container } from "@material-ui/core";
import image from "./cd.png"
import { FrontPage } from "./FrontPage";


const useStyles = makeStyles({
  paper: {
    textAlign: 'left',
    padding: "20px",
    width: "300px",
    height: "500px",
    margin: "20px",
    backgroundColor: "#fcecdd"
  },
  heading: {
    backgroundColor: "#ffc288",
    borderRadius: "10px",
    padding: "20px",
 
  },
  header: {
    height: "400px",
    width: "300px"
  },

  // top: {
  //   backgroundImage: `url(${front})`,
  //   backgroundRepeat: "no-repeat",
  //   height: "300px",
  //   width: "300px",
  //   margin: "20px"

  // },
  // bottom: {
  //   backgroundImage: `url(${header})`,
  //   backgroundRepeat: "no-repeat",
  //   height: "400px",
  //   width: "600px",
  //   margin: "20px"
  // },
  button: {
    textDecoration: "none",
    backgroundColor: "lightgrey",
    margin: "5px",
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
    <Container>
      <FrontPage />
      <div className="page-buttons">
        <Button variant="primary" className={classes.button} onClick={movePreviousPage} disabled={pageNumber === 1}>Previous Page</Button>
        <Button className={classes.button} onClick={moveNextPage} disabled={pageNumber === 15}>Next Page</Button>
        <p>{`Page ${pageNumber} / 15`}</p>
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
