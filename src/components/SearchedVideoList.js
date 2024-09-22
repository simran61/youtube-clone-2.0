import React, { useEffect } from "react";
import SearchedVideo from "./SearchedVideo";
import useSuggestedList from "../utils/useSuggestedList";
import { Link, useSearchParams } from "react-router-dom";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";

const SearchedVideoList = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    searchedResults();
  }, [searchParams.get("q")]);

  const { suggestedVideo, fetchSuggestedData } = useSuggestedList(
    searchParams.get("q"),
    false
  );

  const searchedResults = () => {
    fetchSuggestedData(searchParams.get("q"));
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`px-4 mt-14 ${
        isMenuOpen ? "ml-[240px] basis-[85%]" : "ml-0 basis-[100%]"
      }`}
    >
      <ButtonList />
      <div className=" w-full mt-14">
        {suggestedVideo?.map((video) => (
          <Link key={video.id} to={`/watch?v=${video?.id?.videoId}`}>
            <SearchedVideo info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchedVideoList;
