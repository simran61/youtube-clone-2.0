import { useContext, useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API, YOUTUBE_VIDEOS_CATEGORY } from "./constants";
import { loaderContext } from "../context/context";
import { useSearchParams } from "react-router-dom";

const useVideoList = () => {
  const [videoList, setVideoList] = useState([]);
  const loaderValue = useContext(loaderContext);

  const [urlSearchParam] = useSearchParams();
  const category = urlSearchParam.get("v");

  useEffect(() => {
    getVideoList(category);
  }, [category]);

  const getVideoList = async (videoCategory) => {
    try {
      loaderValue.setLoader(true);
      let data;
      if (videoCategory) {
        data = await fetch(YOUTUBE_VIDEOS_CATEGORY + videoCategory);
      } else data = await fetch(YOUTUBE_VIDEOS_API);

      const json = await data.json();
      setVideoList(json.items ?? []);
      loaderValue.setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };
  return videoList;
};

export default useVideoList;
