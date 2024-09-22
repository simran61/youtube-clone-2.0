import React from "react";
import AdContainer from "./AdContainer";
import { Link } from "react-router-dom";
import SuggestedTag from "./SuggestedTag";
import SuggestedVideoCard from "./SuggestedVideoCard";
import useSuggestedList from "../utils/useSuggestedList";

const SuggestedVideos = ({ videoData }) => {
  const videoTitle = videoData?.snippet?.title;
  const { suggestedVideo } = useSuggestedList(videoTitle);

  return (
    <>
      <AdContainer />
      <SuggestedTag />
      <div className="w-full">
        {suggestedVideo?.map((video) => (
          <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
            <SuggestedVideoCard video={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default SuggestedVideos;
