import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/:id" Component={MovieDetails} />
    </Routes>
  );
}

export default App;
