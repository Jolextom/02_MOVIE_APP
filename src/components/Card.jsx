import React from "react";

const Card = () => {
  let amount = 10;
  return Array(amount)
    .fill("*")
    .map((item) => {
      return (
        <div className="flex flex-col gap-3 bg-transparent">
          <img
            src="./card_poster.png"
            className="w-[15.625rem]"
            alt="card-poster"
          />
          <h4 className="text-xs text-[#9CA3AF] font-bold">
            USA, 2016 - Current
          </h4>
          <h3 className="text-lg text-[#111827] font-bold">Stranger Things</h3>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src="./IMDB.png" alt="IMDB" />

              <h4 className="text-xs font-normal">86.0 / 100</h4>
            </div>
            <div className="flex items-center gap-3">
              <img src="./orange.png" alt="ORANGE" />

              <h4 className="text-xs font-normal">97%</h4>
            </div>
          </div>
          <h4 className="text-xs text-[#9CA3AF] font-bold">
            Action, Adventure / Horror
          </h4>
        </div>
      );
    });
};

export default Card;
