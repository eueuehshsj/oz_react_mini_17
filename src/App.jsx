import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail.jsx";
import Home from "";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
