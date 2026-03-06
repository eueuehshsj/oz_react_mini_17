import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail.jsx";
import HomePage from "./pages/Home.jsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
