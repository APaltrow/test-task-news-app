import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { News } from "./pages/News";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {<Route index element={<Home />} />}
        {<Route path="news/:id" element={<News />} />}
      </Routes>
    </div>
  );
};

export default App;
