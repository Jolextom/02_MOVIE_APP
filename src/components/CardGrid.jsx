import React from "react";
import Cards from "./Cards";

const CardGrid = () => {
  return (
    <div className="container_lg py-20">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">Featured Movie</h2>
        <div className="flex items-center gap-3">
          <h5 className="text-[1.125rem] font-normal text-[#BE123C]">
            See more
          </h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
              stroke="#B91C1C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default CardGrid;
