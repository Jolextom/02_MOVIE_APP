import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center gap-5">
          <div className=" w-[2.2rem] md:w-[3.125rem] aspect-square">
            <img src="./logo.png" alt="movie app logo" />
          </div>
          <h3 className="text-lg md:text-2xl font-bold ">MovieBox</h3>
        </div>
        <Search />

        <div className="flex items-center gap-6">
          <h3 className="text-sm md:text-base font-bold">Sign in</h3>
          <div className="p-2 bg-[#BE123C] rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-3 h-3 md:w-5 md:h-5"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
