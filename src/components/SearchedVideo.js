import React from "react";
import DotsMenu from "../assets/icons/DotsMenu";
import { publishedDate } from "../utils/videoCalulations";
import useChannelDetails from "../utils/useChannelDetails";

const SearchedVideo = ({ info }) => {
  const { snippet } = info;
  const {
    channelTitle,
    title,
    thumbnails,
    publishedAt,
    channelId,
    description,
  } = snippet;

  const channelInfo = useChannelDetails(channelId);

  return (
    <div className="mx-2 my-5 w-full flex">
      <img
        className="rounded-xl hover:rounded-none w-[500px] h-[280px]"
        src={thumbnails.medium.url}
        alt="video-thumbnail"
      />
      <div className="mx-4">
        <div className="w-full flex justify-between">
          <h2 className="text-lg font-semibold dark:text-white">{title}</h2>
          <div className="h-4">
            <DotsMenu />
          </div>
        </div>
        <div>
          {/* {statistics?.viewCount && (
          <span className="text-[#606060] text-xs dark:text-[#aaaaaa]">
            {calculateNumber(statistics?.viewCount)} 
            views •{" "}
          </span>
          )} */}
          <span className="text-[#606060] text-xs dark:text-[#aaaaaa]">
            {publishedDate(publishedAt)}
          </span>
        </div>
        <div className="flex my-3 items-center">
          <img
            className="h-6 mr-2 rounded-full"
            alt="user"
            src={channelInfo?.snippet?.thumbnails?.default?.url}
          />
          <h3 className="text-[#606060] text-xs dark:text-[#aaaaaa]">
            {channelTitle}
          </h3>
        </div>
        <h2 className="text-ellipsis overflow-hidden line-clamp-1 text-[#606060] text-xs dark:text-white">
          {description}
        </h2>
      </div>
    </div>
  );
};

export default SearchedVideo;
