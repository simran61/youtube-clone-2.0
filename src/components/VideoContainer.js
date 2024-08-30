import React, { useContext, useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import AdVideo from "./AdVideo";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import { loaderContext } from "../context/context";

const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [videos, setVideos] = useState([]);
  const loaderValue = useContext(loaderContext);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    loaderValue.setLoader(true);
    setTimeout(async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
      console.log(json.items);
      loaderValue.setLoader(false);
    }, 2000);
  };

  return videos?.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className={`overflow-hidden w-full mt-14 grid grid-flow-row ${
        isMenuOpen ? "grid-cols-4" : "grid-cols-5"
      }`}
    >
      {/* {videos[29] && <AdVideoCard info={videos[29]} />} */}
      <AdVideo />
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
