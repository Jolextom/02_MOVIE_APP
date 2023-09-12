import React from "react";

const Card = ({
  title,
  poster_path,
  release_date,
  vote_average,
  popularity,
}) => {
  return (
    <div className="flex flex-col gap-3 bg-transparent relative">
      <div className="absolute top-0 flex p-4 justify-between w-full items-center">
        <h3 className="text-xs text-[#111827] uppercase font-bold bg-[#f3f4f680] rounded-xl px-2 py-1">
          TV Series
        </h3>
        <div className="bg-[#f3f4f680] p-1 rounded-full">
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
              d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
              fill="#D1D5DB"
            />
          </svg>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        className="w-[15.625rem]"
        alt="card-poster"
      />
      <h4 className="text-xs text-[#9CA3AF] font-bold">{release_date}</h4>
      <h3 className="text-lg text-[#111827] font-bold">{title}</h3>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="./IMDB.png" alt="IMDB" />

          <h4 className="text-xs font-normal">{popularity.toFixed(2)}</h4>
        </div>
        <div className="flex items-center gap-3">
          <img src="./orange.png" alt="ORANGE" />

          <h4 className="text-xs font-normal">{vote_average * 10}%</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
