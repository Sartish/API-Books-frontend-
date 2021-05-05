import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid, Card } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  card: {
    width: "140px",
    margin: "10px",
    padding: "10px",
  },
});

// The Effect Hook lets you perform side effects in function components:
export const BooksList = () => {
  const classes = useStyles();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://saras-books.herokuapp.com/books")
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
      });
  }, []);

  return (
    <Grid container className={classes.root} spacing={1}>
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <Card className={classes.card}>
            <Link to={`/book/${book.id}`}>
              <h3>{book.title}</h3>
              <p>{book.authors}</p>
            </Link>
          </Card>
        </div>
      ))}
    </Grid>
  );
};
