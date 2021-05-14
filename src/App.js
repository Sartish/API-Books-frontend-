import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { FrontPage } from "./pages/FrontPage";
import { SongsList } from "./pages/SongsList";
import { OneSong } from "./pages/OneSong";
import { TopRated } from "./pages/TopRated";

//path  Its most basic responsibility is to render some UI when its path matches the current URL.
export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FrontPage />
        </Route>

        <Route path="/songs" exact>
          <SongsList />
        </Route>

        <Route path="/songs/song/:id" exact>
          <OneSong />
        </Route>

        <Route path="/songs/top-rated">
          <TopRated />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
