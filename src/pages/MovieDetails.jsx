import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
const apiKey = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      setLoading(false);
      setMovie(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  console.log(movie);
  const { backdrop_path, title, overview, genres, release_date } = movie;
  return (
    <div className="flex ">
      <div className=" sticky top-0 flex-auto w-[14.125rem] h-screen border border-[#0000004d] bg-white text-[#666666] rounded-e-[2.8125rem]"></div>

      <div className="flex-auto flex flex-col gap-5 h-fit w-[74.875rem] p-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt="trailer-poster"
          className="w-full object-cover"
        />
        <div className="flex justify-between items-center">
          <h3 className="text-2xl text-[#404040] font-medium">
            {title} • {release_date.split("-")[0]}
          </h3>
          <div className="flex gap-5">
            {genres.map((item) => {
              return (
                <div className="bg-transparent  px-3 py-1 bg-[#F8E7EB] border-[#F8E7EB] border-2 rounded-xl">
                  <h4 className="text-[#B91C1C]" key={item.id}>
                    {item.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-[#333] font-normal text-xl">{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
