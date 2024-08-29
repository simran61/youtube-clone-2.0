import React, { useContext } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { themeContext } from "../context/context";

const VideoCard = ({ info }) => {
  const value = useContext(themeContext);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  const calculateViews = (viewCount) => {
    const views = viewCount;
    if (views > 999999) return (views / 1000000).toFixed(1) + "M";
    else if (views > 99999) return (views / 1000).toFixed(1) + "k";
  };

  const publishedDate = moment(publishedAt).startOf("hour").fromNow();

  return (
    <div
      className={`mx-2 my-6 mb-12 ${isMenuOpen ? "w-[296px]" : "w-[267px]"}`}
    >
      <img
        className="rounded-xl hover:rounded-none"
        src={thumbnails.medium.url}
        alt=""
      />
      <div className="flex my-2">
        <img
          className="h-8 mr-2 rounded-full"
          alt="user"
          src="https://i.pinimg.com/564x/20/05/e2/2005e27a39fa5f6d97b2e0a95233b2be.jpg"
        />
        <div>
          <h2 className="mb-1 font-semibold text-ellipsis overflow-hidden line-clamp-2 dark:text-white">
            {title}
          </h2>
          <h3 className="text-[#606060] text-sm dark:text-[#aaaaaa]">
            {channelTitle}
          </h3>
          <div>
            <span className="text-[#606060] text-sm dark:text-[#aaaaaa]">
              {calculateViews(viewCount)} views •{" "}
            </span>
            <span className="text-[#606060] text-sm dark:text-[#aaaaaa]">
              {publishedDate}
            </span>
          </div>
        </div>
        <div className="h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
              fill={`${value.darkMode ? "white" : ""}`}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div>
      <VideoCard info={info} />
      {console.log(info)}
      <div className="-mt-5">
        <span className="font-bold ml-14 pr-2 text-sm">Sponsered:</span>
        <span className="text-sm text-gray-600">Gov of India</span>
      </div>
    </div>
  );
};

export default VideoCard;
