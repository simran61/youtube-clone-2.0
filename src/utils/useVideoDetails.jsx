import { useEffect, useState } from "react";
import { VIDEO_DETAILS } from "../utils/constants";

const useVideoDetails = (searchParams) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    getVideoDetails();
  }, [searchParams]);

  const getVideoDetails = async () => {
    try {
      const videoDetails = await fetch(VIDEO_DETAILS + searchParams.get("v"));
      const data = await videoDetails.json();
      setVideoData(data.items[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return videoData;
};

export default useVideoDetails;
