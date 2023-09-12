import React from "react";

const MovieDetails = () => {
  return (
    <div className="flex ">
      <div className=" sticky top-0 flex-auto w-[14.125rem] h-screen border border-[#0000004d] bg-white text-[#666666] rounded-e-[2.8125rem]"></div>
      <div className="flex-auto  h-[300rem] w-[74.875rem] p-8">
        <img src="./trailer_poster.png" alt="trailer-poster" />
      </div>
    </div>
  );
};

export default MovieDetails;
