import React, { useState } from 'react'
import SearchResult from "./SearchResult"
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

const SearchTitle = ({ onSearchResult }) => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
//   const [songs, setSongs] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://saras-mongo-api.herokuapp.com/songs/title/${title}`)
      .then((response) => response.json())
      .then((json) => {
        onSearchResult(json);
        setTitle("");
      })
      .catch(() => {
        console.error();
        setTitle("");
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
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <Button className="add" type="submit" onClick={handleSubmit}>
            Search Title 
          </Button>
        </form>
      </div>
    </>
  );
};

export default SearchTitle