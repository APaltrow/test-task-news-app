import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      Working !!
      <Routes>
        {/*<Route index element={<Home />} />*/}
        {/*<Route path="news/:id" element={<NewsPage />} />*/}
      </Routes>
    </div>
  );
};

export default App;
