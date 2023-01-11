import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { SingleNewsArticle } from "./pages/SingleNewsArticle";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {<Route index element={<Home />} />}
        {
          <Route
            path="single-news-article/:id"
            element={<SingleNewsArticle />}
          />
        }
      </Routes>
    </div>
  );
};

export default App;
