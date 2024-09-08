import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggestedVideos from "./SuggestedVideos";
import useChannelDetails from "../utils/useChannelDetails";
import useVideoDetails from "../utils/useVideoDetails";
import Video from "./Video";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const videoData = useVideoDetails(searchParams);
  const channelId = videoData?.snippet?.channelId;
  const channelInfo = useChannelDetails(channelId);

  return (
    <div className="flex justify-between mt-[76px] mx-[90px]">
      <div className="watch-page left mr-6">
        <Video videoData={videoData} channelInfo={channelInfo} />
        <CommentsContainer videoData={videoData} />
      </div>

      <div className="watch-page-right">
        {videoData?.snippet?.liveBroadcastContent === "live" && <LiveChat />}
        <SuggestedVideos videoData={videoData} />
      </div>
    </div>
  );
};

export default WatchPage;
