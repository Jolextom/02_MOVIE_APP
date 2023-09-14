import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Link } from "react-router-dom";
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );

      setSearchResults(response.data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchTerm]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="search"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="What do you want to watch?"
          className=" w-full hidden sm:hidden md:block md:w-[20rem]  lg:w-[25rem]   h-fit border rounded-md border-[#D1D5DB] py-1.5 px-3 text-base font-normal bg-transparent"
        ></input>
        {!searchTerm ? null : (
          <div
            className={`${
              loading ? `h-fit` : `h-[25rem]`
            } bg-white  sm:hidden md:block rounded-md w-full absolute p-1 my-2 flex flex-col gap-2 overflow-y-scroll`}
          >
            {loading ? (
              <Loading />
            ) : (
              <>
                {searchResults.map(
                  ({ poster_path, id, title, release_date }) => {
                    return (
                      <Link to={`/movies/${id}`}>
                        <div className="h-[5rem] outline-1 w-full outline outline-gray-300 rounded-lg text-black flex p-1 ">
                          <img
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            className="flex-auto w-[20%] "
                            alt="card-poster"
                          />
                          <div className="flex-auto w-[80%] flex  justify-between gap-3">
                            <div className="flex flex-col  justify-around  p-2">
                              <h3 className="text-base text-[#111827] font-bold ">
                                {title}
                              </h3>
                              <h4 className="text-xs text-[#9CA3AF] font-bold">
                                {release_date}
                              </h4>
                            </div>
                            <div className="grid place-items-center pr-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                )}
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
