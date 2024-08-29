import React, { useContext, useEffect, useState } from "react";
import AdContainer from "./AdContainer";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";
import moment from "moment";
import { themeContext } from "../context/context";

const SuggestedVideos = ({ videoData }) => {
  const value = useContext(themeContext);
  const [suggestedVd, setSuggestedVd] = useState([]);

  const videoTitle = videoData[0]?.snippet?.localized?.title;
  console.log(videoTitle);

  useEffect(() => {
    if (videoTitle) suggestedData(videoTitle);
  }, [videoTitle]);

  const suggestedData = async (videoTitle) => {
    const suggestedUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${encodeURIComponent(
      videoTitle
    )}%2023&key=${GOOGLE_API_KEY}`;
    const data = await fetch(suggestedUrl);
    const json = await data.json();
    setSuggestedVd(json.items);
  };

  console.log(suggestedVd);

  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails, publishedAt } = snippet;
  // const { viewCount } = statistics;

  // const viewCount= ;

  const calculateViews = (viewCount) => {
    const views = viewCount;
    if (views > 999999) return (views / 1000000).toFixed(1) + "M";
    else if (views > 99999) return (views / 1000).toFixed(1) + "k";
  };

  return (
    <>
      <AdContainer />
      <div className="my-4 flex items-center justify-between">
        <div>
          <button className="text-sm px-3 py-1.5 mr-2 bg-black text-white rounded-lg dark:bg-[#f1f1f1] dark:text-black">
            All
          </button>
          <button className="text-sm px-3 py-1.5 mr-2 bg-gray-200 rounded-lg dark:bg-[#ffffff1A] dark:text-white">
            From the series
          </button>
          <button className="text-sm px-3 py-1.5 mr-2 bg-gray-200 rounded-lg dark:bg-[#ffffff1A] dark:text-white">
            JavaScript
          </button>
        </div>
        <svg
          className="-rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
        >
          <path
            d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"
            fill={`${value.darkMode ? "white" : ""}`}
          ></path>
        </svg>
      </div>

      <div className="w-full">
        {suggestedVd?.map((video) => (
          <Link to={"/watch?v=" + video.id.videoId} key={video.id.videoId}>
            <div className="my-4 flex">
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
                <div>
                  {/* <span className="text-[#606060] text-xs">{calculateViews(viewCount)} views •{" "}</span> */}
                  <span className="text-[#606060] text-xs dark:text-[#aaaaaa]">
                    {moment(video.snippet.publishedAt)
                      .startOf("hour")
                      .fromNow()}
                  </span>
                </div>
              </div>

              <div className="h-5">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
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
          </Link>
        ))}
      </div>
    </>
  );
};

export default SuggestedVideos;
