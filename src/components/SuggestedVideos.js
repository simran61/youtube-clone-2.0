import React, { useEffect, useState } from "react";
import AdContainer from "./AdContainer";
import { GOOGLE_API_KEY } from "../utils/constants";
import { Link } from "react-router-dom";
import moment from "moment";

const SuggestedVideos = ({ videoData }) => {
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
        <img
          className="w-4"
          src="https://cdn-icons-png.flaticon.com/512/130/130884.png"
          alt=""
        />
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

              <img
                className="h-5"
                src="https://www.svgrepo.com/show/345223/three-dots-vertical.svg"
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SuggestedVideos;
