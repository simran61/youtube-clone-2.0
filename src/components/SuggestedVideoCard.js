import React from "react";
import { publishedDate } from "../utils/videoCalulations";
import DotsMenu from "../assets/icons/DotsMenu";

const SuggestedVideoCard = ({ video }) => {
  return (
    <div className="my-4 flex justify-between">
      <div className="flex">
        <img
          className="w-[168px] h-[94px] object-cover rounded-md"
          src={video.snippet.thumbnails.medium.url}
          alt=""
        />

        <div className="ml-3">
          <h2 className="text-sm font-semibold overflow-hidden text-ellipsis line-clamp-2 dark:text-white">
            {video.snippet.title}
          </h2>
          <p className="text-xs text-[#606060] mt-2 dark:text-[#aaaaaa]">
            {video.snippet.channelTitle}
          </p>
          <span className="text-[#606060] text-xs dark:text-[#aaaaaa]">
            {publishedDate(video.snippet.publishedAt)}
          </span>
        </div>
      </div>

      <div className="h-5">
        <DotsMenu />
      </div>
    </div>
  );
};

export default SuggestedVideoCard;
