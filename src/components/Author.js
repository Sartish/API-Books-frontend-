import React from "react";
import { Card, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  containter: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
    flexDirection: "column",
  },
  card: {
    width: "140px",
    margin: "10px",
    padding: "10px",
    height: "200px",
  },
});

const Author = ({ books }) => {
  const classes = useStyles();

  return (
    <Container className={classes.containter} fixed>
      {books.map((book) => (
        <Link to={`/books/${book.bookID}`} key={book.bookID}>
          <Card className={classes.card}>
            <p className="book-title">{book.title}</p>
            <p className="book-author">{book.authors}</p>
          </Card>
        </Link>
      ))}
    </Container>
  );
};

export default Author;
