import React, { useState } from 'react'
import SearchResult from "./SearchResult"
import { makeStyles } from "@material-ui/styles";
import { TextField, Button, Grid, Box } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import SorryNotFound from "../components/SorryNotFound"

const font =  "'Montserrat', sans-serif";

const defaultProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const useStyles = makeStyles({
  select: {
    marginRight: "10px",
    minWidth: 275,
  },
  input: {
    minWidth: 275,
    marginTop: "20px",
    color: "#FF0066",
  },
  button: {
    backgroundColor: "lightgrey",
    margin: "5px",
    color: "#f05945",
    fontWeight: "bold",
    marginTop: "40px",
    fontFamily: font
  },
  grid: {
    backgroundColor: "#a3d2ca",
    padding: "20px",
  },
  text: {
    fontFamily: font,
    fontSize: "30px",
    marginLeft: "20px",
    color: "#989898",
    fontWeight: "bold"
  },
  note: {
    color: "#f05945",
    fontSize: "35px"
  },
  paragraph:{
    fontFamily: font,
    fontSize: "20px",
    marginLeft: "20px",
    color: "#989898",
    fontWeight: "bold",
    marginBottom: "40px"
  }
  


});

const SearchTitle = () => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [songs, setSongs] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://saras-mongo-api.herokuapp.com/songs/title/${title}`)
      .then((response) => response.json())
      .then((json) => {
        setSongs(json);
        setTitle("");
      })
      .catch(() => {
        console.error();
        setTitle("");
      });
  };

  return (
    <>
       <Box {...defaultProps} borderLeft={0} borderRight={0} >
          <p className={classes.text}>Search for a song <MusicNoteIcon className={classes.note} /> </p>
          </Box>
          <Box {...defaultProps} borderLeft={0} borderRight={0} >
          <p className={classes.paragraph}>Search for your favorite song and see if it is amongst 500 of the greatest songs!</p>
        </Box>
      <Grid
        className={classes.grid}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <Button className={classes.button} type="submit" onClick={handleSubmit}>
            Search Title 
          </Button>
        </form>
      </Grid>
      {typeof songs === 'string' ? <SorryNotFound /> : <SearchResult songs={songs}/>}
    </>
  );
};

export default SearchTitle