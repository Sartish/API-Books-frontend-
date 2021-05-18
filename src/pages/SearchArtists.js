import React, { useState } from 'react'
// import ArtistList from "./SearchResult"

import { makeStyles } from "@material-ui/styles";
import { TextField, Button } from "@material-ui/core";



const useStyles = makeStyles({
  select: {
    marginRight: "10px",
    minWidth: 275,
  },
  input: {
    minWidth: 275,
    marginBottom: "10px",
    color: "#FF0066",
  },


});

const SearchArtists = ({ onSearchResult }) => {
  const classes = useStyles();

  const [artist, setArtist] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://saras-mongo-api.herokuapp.com/songs/artist/${artist}`)
      .then((response) => response.json())
      .then((json) => {
        onSearchResult(json);
        setArtist("");
      })
      .catch(() => {
        console.error();
        setArtist("");
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Artist name"
            variant="outlined"
            onChange={(event) => setArtist(event.target.value)}
            value={artist}
          />
          <Button className="add" type="submit" onClick={handleSubmit}>
            Search Artist
          </Button>
        </form>
      </div>
      {/* <SearchResult songs={songs} /> */}
    </>
  );
};

export default SearchArtists