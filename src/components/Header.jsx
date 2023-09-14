import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
const apiKey = import.meta.env.VITE_API_KEY;
import axios from "axios";

// 458156
const Header = () => {
  const [movie, setMovie] = useState([]);

  const fetchMovieDetails = async () => {
    const id = 458156;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );
      setMovie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);
  return (
    <>
      <div className="font-DM_Sans text-white">
        <div className="h-[37.5rem] w-full bg-cover bg-no-repeat relative">
          <img
            src="./hero_poster.png"
            className="absolute top-0 -z-10 h-full object-cover"
            alt="hero-poster"
          />
          <div className="container_lg h-full">
            <Navbar />
            <div className=" py-[6.5rem] mt-5 flex flex-col">
              <div className=" space-y-4 w-full">
                <h1 className="sm:text-5xl leading-[2.7rem] text-[2.75rem]  font-bold max-w-[26rem]">
                  {movie.title}
                </h1>
                <div className="flex gap-8">
                  <div className="flex items-center gap-3">
                    <img src="./IMDB.png" alt="IMDB" />

                    <h4 className="text-xs font-normal">86.0 / 100</h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="./orange.png" alt="ORANGE" />

                    <h4 className="text-xs font-normal">97%</h4>
                  </div>
                </div>
                <p className="text-sm max-w-[18.875rem] line-clamp-3">
                  {movie.overview}
                </p>
                <div className="flex items-center w-fit gap-2 px-4 py-2.5 bg-[#BE123C] rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                      fill="white"
                    />
                  </svg>
                  <h3 className="uppercase text-sm font-bold">Watch trailer</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
