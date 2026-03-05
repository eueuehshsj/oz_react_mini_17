import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={}/>
        <Route pathe="/detail" element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
