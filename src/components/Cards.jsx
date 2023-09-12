import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

const Cards = () => {
  const [topMovies, setTopMovies] = useState([]);

  const fetchTopMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
      );
      setTopMovies(response.data.results.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopMovies();
  }, []);

  return (
    <div className="grid grid-cols-4 py-11 gap-x-20 gap-y-24">
      {topMovies.map((movie) => {
        console.log(movie);
        {
          return <Card key={movie.id} {...movie} />;
        }
      })}
    </div>
  );
};

export default Cards;
