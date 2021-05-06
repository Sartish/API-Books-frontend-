import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, Card, Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px",
    color: "#0a043c",
  },
  containter: {
    display: "flex",
    justifyContent: "space-between",
  },
  select: {
    marginRight: "10px",
    minWidth: 275,
  },
  input: {
    minWidth: 275,
    marginBottom: "10px",
    color: "#FF0066",
  },
  add: {
    backgroundColor: "#FF0066",
  },
  card: {
    width: "140px",
    margin: "10px",
    padding: "10px",
  },
  heading: {
    display: "flex",
  },
});

const AuthorSearch = () => {
  const classes = useStyles();

  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://saras-books.herokuapp.com/books?author=${author}`)
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
        setAuthor("");
      })
      .catch(() => {
        console.error();
        setAuthor("");
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Author name"
            variant="outlined"
            onChange={(event) => setAuthor(event.target.value)}
            value={author}
          />
          <Button className="add" type="submit" onClick={handleSubmit}>
            Search Author
          </Button>
        </form>
      </div>

      <Container>
        {books.map((book) => (
          <Link to={`/books/${book.bookID}`} key={book.bookID}>
            <Card className={classes.card}>
              <p className="book-title">{book.title}</p>
              <p className="book-author">{book.authors}</p>
            </Card>
          </Link>
        ))}
      </Container>
    </>
  );
};
export default AuthorSearch;
