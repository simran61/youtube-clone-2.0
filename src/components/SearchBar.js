import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../assets/icons/Search";
import VoiceSearch from "../assets/icons/VoiceSearch";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-10 flex items-center">
      <div>
        <div className="flex h-10">
          <input
            placeholder="Search"
            className="px-5 py-1.5 w-[536px] border border-gray-300 rounded-l-full dark:bg-[#121212] dark:border-zinc-800 dark:text-white outline-blue-400"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border w-16 border-gray-300 px-5 py-2 rounded-r-full bg-gray-50 dark:bg-[#ffffff14] dark:border-zinc-700">
            <Search />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white w-[536px] rounded-lg shadow-md border border-gray-100 outline-none dark:bg-[#222222] dark:border-zinc-800">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="m-1 flex items-center font-semibold py-1.5 px-3 rounded-md hover:bg-gray-100 dark:text-white dark:hover:bg-[#494949]"
                >
                  <div className="mr-2">
                    <Search />
                  </div>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="mx-4 bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:bg-[#ffffff14]">
        <VoiceSearch />
      </div>
    </div>
  );
};

export default SearchBar;
