import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const OneBook = () => {
  const { id } = useParams;
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`https://saras-books.herokuapp.com/books/book/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setBook(json);
      });
  }, [id]);
  return <div>{book}</div>;
};
