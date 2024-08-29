import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
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
    // console.log("API CALL-" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between items-center px-5 py-2 fixed w-full bg-white dark:bg-[#0F0F0F]">
      <div className="flex items-center">
        <svg
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
        <img
          className="h-5 mx-7"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="px-10 flex items-center">
        <div>
          <div className="flex h-10">
            <input
              placeholder="Search"
              className="px-5 py-1.5 w-[536px] border border-gray-300 rounded-l-full dark:bg-[#121212] dark:border-zinc-800"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border w-16 border-gray-300 px-5 py-2 rounded-r-full bg-gray-50 dark:bg-[#ffffff14] dark:border-zinc-700">
              <img
                className="h-5"
                src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
                alt="search"
              />
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed bg-white w-[536px] rounded-lg shadow-md border border-gray-100 outline-none">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="m-1 flex items-center font-semibold py-1.5 px-3 rounded-md hover:bg-gray-100"
                  >
                    <img
                      className="h-4 mr-2"
                      src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
                      alt="search"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mx-4 bg-gray-100 h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:bg-[#ffffff14]">
          <img
            className="h-6 mix-blend-multiply"
            src="https://i.pinimg.com/564x/f7/26/64/f726649c44ad675da83a91fe99bf1955.jpg"
            alt="voice"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mx-1 hover:bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
          </svg>
        </div>
        <div className="mx-1 hover:bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full">
          <svg
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
          </svg>
        </div>
        <img
          className="h-8 rounded-full mx-1 "
          alt="user"
          src="https://yt3.ggpht.com/yti/ANjgQV-PuyNus7lBiaAwA8XzgzIwE9Em0nSFZGvNxeFVQiNcvokr=s88-c-k-c0x00ffffff-no-rj"
        />
      </div>
    </div>
  );
};

export default Head;
