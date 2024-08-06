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
    console.log("API CALL-" + searchQuery);
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
    <div className="flex justify-between items-center px-5 py-2">
      <div className="flex items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <img
          className="h-6 mx-4"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="px-10 flex items-center">
        <div>
          <div className="flex">
            <input
              placeholder="Search"
              className="px-5 py-1.5 w-[30rem] border border-gray-400 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
              <img
                className="h-4"
                src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                alt="search"
              />
            </button>
          </div>
          {showSuggestions && (
            <div className="fixed bg-white p-2 w-[30rem] rounded-lg shadow-md border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="flex items-center font-semibold py-1.5 px-3 rounded-md hover:bg-gray-100"
                  >
                    <img
                      className="h-3 mr-2"
                      src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                      alt="search"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mx-4 bg-gray-200 h-11 w-11 flex items-center justify-center rounded-full">
          <img
            className="h-5"
            src="https://static-00.iconduck.com/assets.00/microphone-icon-820x1024-sm9b2ks9.png"
            alt="voice"
          />
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="h-8"
          alt="video-camera"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
        />
        <img
          className="h-7 mx-3"
          alt="notification"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
        />
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
