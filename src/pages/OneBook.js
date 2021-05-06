import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const OneBook = () => {
  const { bookID } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`https://saras-books.herokuapp.com/books/book/${bookID}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setBook(json);
      });
  }, [bookID]);
  return (
    <>
      <Link to="/books" exact="true">
        Back to library
      </Link>
      <div>
        <p> Book title {book.title}</p>
        <p>Author: {book.authors}</p>{" "}
        <p>Average rating: {book.average_rating}</p>
        <p>Number of pages: {book.num_pages}</p>
      </div>
    </>
  );
};
