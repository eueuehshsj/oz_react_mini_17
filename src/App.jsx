import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail.jsx";
import Home from ".main.jsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route pathe="/detail" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
