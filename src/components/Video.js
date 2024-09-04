import React from "react";
import Like from "../assets/icons/Like";
import Share from "../assets/icons/Share";
import Download from "../assets/icons/Download";
import DotsMenu from "../assets/icons/DotsMenu";
import { useSearchParams } from "react-router-dom";
import { calculateNumber, publishedDate } from "../utils/videoCalulations";

const Video = ({ videoData, channelInfo }) => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <iframe
        style={{ borderRadius: "15px" }}
        width="914"
        height="514"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        <h1 className="font-bold text-xl my-3 dark:text-[#f1f1f1]">
          {videoData?.snippet?.localized?.title}
        </h1>
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              className="rounded-full w-10 h-10"
              src={channelInfo?.snippet?.thumbnails?.default?.url}
              alt=""
            />
            <div className="ml-3">
              <h3 className="font-bold -mb-1 dark:text-[#f1f1f1]">
                {videoData?.snippet?.channelTitle}
              </h3>
              <span className="text-xs dark:text-[#aaaaaa]">
                {calculateNumber(channelInfo?.statistics?.subscriberCount)}{" "}
                subscribers
              </span>
            </div>
            <button className="bg-black text-white font-semibold py-1.5 px-4 rounded-3xl mx-4 dark:bg-[#f1f1f1] dark:text-black">
              Subscribe
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex bg-gray-100 rounded-3xl px-4 py-1 mx-2 dark:bg-[#272727] dark:text-white">
              <button className="flex items-center mr-2">
                <Like />
                <span className="-ml-4 mr-1">
                  {calculateNumber(videoData?.statistics?.likeCount)}
                </span>
              </button>
              <button className="pl-2 border-l-2 dark:border-zinc-700">
                <div className="rotate-180 -ml-5">
                  <Like />
                </div>
              </button>
            </div>
            <button className="flex items-center bg-gray-100 rounded-3xl px-4 py-1.5 mx-2 dark:bg-[#272727] dark:text-white">
              <Share />
              <span className="ml-2">Share</span>
            </button>
            <button className="flex items-center bg-gray-100 rounded-3xl px-4 py-1.5 mx-2 dark:bg-[#272727] dark:text-white">
              <Download />
              <span className="ml-2">Download</span>
            </button>
            <button className="bg-gray-100 rounded-3xl p-2 mx-2 dark:bg-[#272727]">
              <div className="rotate-90">
                <DotsMenu />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="video-desc bg-gray-100 my-4 rounded-lg py-2 px-3 dark:bg-[#272727]">
        <div className="text-sm dark:text-[#f1f1f1]">
          <span className="font-bold mr-2">
            {calculateNumber(videoData?.statistics?.viewCount)} views
          </span>
          <span className="font-bold">
            {publishedDate(videoData?.snippet?.publishedAt)}
          </span>

          <div>
            {videoData?.snippet?.localized?.description
              .split("\n")
              .map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
