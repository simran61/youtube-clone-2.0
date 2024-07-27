import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      <div className="flex my-2">
        <img
          className="h-8 mr-2"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div>
          <h2 className="font-bold">{title}</h2>
          <h3 className="text-gray-500">{channelTitle}</h3>
          <span className="text-gray-500">{statistics.viewCount} views</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
