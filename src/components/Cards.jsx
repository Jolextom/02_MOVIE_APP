import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import Loading from "./Loading";
const apiKey = import.meta.env.VITE_API_KEY;

const Cards = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTopMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
      );
      setTopMovies(response.data.results.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopMovies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="card-container py-11 gap-x-20 gap-y-24">
      {topMovies.map((movie) => {
        {
          return <Card key={movie.id} {...movie} />;
        }
      })}
    </div>
  );
};

export default Cards;
