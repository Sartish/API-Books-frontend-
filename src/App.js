import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { FrontPage } from "./pages/FrontPage";
import { FrontPage } from "./pages/FrontPage";
import { BooksList } from "./pages/BooksList";
import { OneBook } from "./pages/OneBook";
import { TopRated } from "./pages/TopRated";
import { BooksPages } from "./pages/BooksPages";
import { PageSearch } from "./pages/PagesSearch";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <FrontPage />
        </Route>

        <Route path="/books">
          <BooksList />
        </Route>

        <Route path="/books/:id">
          <OneBook />
        </Route>

        <Route path="/books/top-rated">
          <TopRated />
        </Route>

        <Route path="/books/pages">
          <BooksPages />
        </Route>

        <Route path="/books/pages/:pageCount">
          <PageSearch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
