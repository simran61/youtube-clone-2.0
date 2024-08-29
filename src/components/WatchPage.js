import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggestedVideos from "./SuggestedVideos";
import { GOOGLE_API_KEY } from "../utils/constants";
import { themeContext } from "../context/context";

const WatchPage = () => {
  const value = useContext(themeContext);
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const [videoData, setVideoData] = useState([]);
  const [channelInfo, setChannelInfo] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
    getChannelDetails();
  }, []);

  const getVideoDetails = async () => {
    const videoDetails = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${GOOGLE_API_KEY}&part=snippet,statistics&id=${searchParams.get(
        "v"
      )}`
    );
    const data = await videoDetails.json();
    setVideoData(data.items);
  };

  console.log(videoData);
  const channelId = videoData[0]?.snippet?.channelId;
  console.log(channelId);

  const getChannelDetails = async () => {
    const channelDetails = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=${channelId}`
    );
    const channelData = await channelDetails.json();
    setChannelInfo(channelData.items);
  };

  return (
    <div className="flex justify-between mt-[76px] mx-[90px]">
      <div className="watch-page left mr-6">
        <div className="video-deatils">
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
          <div className="videodetails">
            <h1 className="font-bold text-xl my-3 dark:text-[#f1f1f1]">
              {videoData[0]?.snippet?.localized?.title}
            </h1>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  className="rounded-full w-10 h-10"
                  src={channelInfo[0]?.snippet?.thumbnails?.default?.url}
                  alt=""
                />
                <div className="ml-3">
                  <h3 className="font-bold -mb-1 dark:text-[#f1f1f1]">
                    {videoData[0]?.snippet?.channelTitle}
                  </h3>
                  <span className="text-xs dark:text-[#aaaaaa]">
                    {channelInfo[0]?.statistics?.subscriberCount} subscribers
                  </span>
                </div>
                <button className="bg-black text-white font-semibold py-1.5 px-4 rounded-3xl mx-4 dark:bg-[#f1f1f1] dark:text-black">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex bg-gray-100 rounded-3xl px-4 py-1 mx-2 dark:bg-[#272727] dark:text-white">
                  <button className="flex items-center mr-2">
                    <svg
                      fill={`${value.darkMode ? "#ffffff" : "#000000"}`}
                      height="19px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 490.2 490.2"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path d="M490.1,234.464c0-37.6-30.6-68.3-68.3-68.3H316.2v-76.1c0-32.2-9.4-55.4-28-69c-29.4-21.6-69.8-9.3-71.5-8.7 c-5.1,1.6-8.6,6.3-8.6,11.7v85.5c0,67.3-78.1,90.2-81.4,91.2c-1,0.3-1.9,0.6-2.7,1.1c-5.8-11.6-17.8-19.6-31.6-19.6H35.2 c-19.4,0-35.2,15.8-35.2,35.2v207.9c0,19.4,15.8,35.2,35.2,35.2h33.1c6.8,0,12.3-5.5,12.3-12.3s-5.6-12.2-12.3-12.2H35.2 c-5.9,0-10.7-4.8-10.7-10.7v-207.9c0-5.9,4.8-10.7,10.7-10.7h57.3c5.9,0,10.7,4.8,10.7,10.7v196.1c0,37.6,30.6,68.3,68.3,68.3 h209.2c46.4,0,75.9-24.3,81.1-66.3l28.2-177c0.1-0.6,0.2-1.3,0.2-1.9v-2.2H490.1z M465.6,235.564l-28.1,176.5 c-3.7,30-22.8,45.3-56.8,45.3h-7.8H171.5c-24.1,0-43.8-19.6-43.8-43.8v-189.1c1.8,0.4,3.7,0.3,5.6-0.2 c4.1-1.1,99.3-28.7,99.3-114.8v-75.6c10.4-1.6,28.2-2.5,41.1,6.9c11.9,8.8,18,25.3,18,49.3v88.4c0,6.8,5.5,12.3,12.3,12.3h117.9 c24.1,0,43.8,19.6,43.8,43.8v1H465.6z"></path>{" "}
                        </g>
                      </g>
                    </svg>
                    <span className="mx-2">
                      {videoData[0]?.statistics?.likeCount}
                    </span>
                  </button>
                  <button className="pl-2 border-l-2 dark:border-zinc-700">
                    <div className="rotate-180">
                      <svg
                        fill={`${value.darkMode ? "#ffffff" : "#000000"}`}
                        height="19px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 490.2 490.2"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path d="M490.1,234.464c0-37.6-30.6-68.3-68.3-68.3H316.2v-76.1c0-32.2-9.4-55.4-28-69c-29.4-21.6-69.8-9.3-71.5-8.7 c-5.1,1.6-8.6,6.3-8.6,11.7v85.5c0,67.3-78.1,90.2-81.4,91.2c-1,0.3-1.9,0.6-2.7,1.1c-5.8-11.6-17.8-19.6-31.6-19.6H35.2 c-19.4,0-35.2,15.8-35.2,35.2v207.9c0,19.4,15.8,35.2,35.2,35.2h33.1c6.8,0,12.3-5.5,12.3-12.3s-5.6-12.2-12.3-12.2H35.2 c-5.9,0-10.7-4.8-10.7-10.7v-207.9c0-5.9,4.8-10.7,10.7-10.7h57.3c5.9,0,10.7,4.8,10.7,10.7v196.1c0,37.6,30.6,68.3,68.3,68.3 h209.2c46.4,0,75.9-24.3,81.1-66.3l28.2-177c0.1-0.6,0.2-1.3,0.2-1.9v-2.2H490.1z M465.6,235.564l-28.1,176.5 c-3.7,30-22.8,45.3-56.8,45.3h-7.8H171.5c-24.1,0-43.8-19.6-43.8-43.8v-189.1c1.8,0.4,3.7,0.3,5.6-0.2 c4.1-1.1,99.3-28.7,99.3-114.8v-75.6c10.4-1.6,28.2-2.5,41.1,6.9c11.9,8.8,18,25.3,18,49.3v88.4c0,6.8,5.5,12.3,12.3,12.3h117.9 c24.1,0,43.8,19.6,43.8,43.8v1H465.6z"></path>{" "}
                          </g>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
                <button className="flex items-center bg-gray-100 rounded-3xl px-4 py-1.5 mx-2 dark:bg-[#272727] dark:text-white">
                  {/* <img
                    className="h-4 mr-2"
                    src="https://cdn-icons-png.flaticon.com/256/222/222322.png"
                    alt=""
                  /> */}
                  <svg
                    className="mr-2"
                    fill={`${value.darkMode ? "#ffffff" : "#000000"}`}
                    height="19px"
                    // width="200px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 489 489"
                    // xml:space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g>
                        <path d="M59.7,255.005c-44,53.5-59.7,116.5-59.7,157.6c0,5.6,3.7,10.4,9.1,11.8c1,0.3,2.1,0.4,3.1,0.4c4.3,0,8.4-2.3,10.7-6.2 c62.3-109.8,179.8-115.6,256.5-115.9v79.5c0,4.7,2.7,9.1,7,11.1s9.4,1.4,13-1.6l185.2-153.2c2.8-2.3,4.4-5.8,4.4-9.4 c0-3.7-1.6-7.1-4.5-9.4l-185-152.7c-3.7-3-8.7-3.7-13-1.6c-4.3,2-7,6.3-7,11.1v79.8C161.7,160.605,95.1,211.905,59.7,255.005z M291.8,180.405c6.7-0.1,12.1-5.5,12.1-12.3v-65.7l153.6,126.7l-153.6,127.1v-65.7c0-3.2-1.3-6.4-3.6-8.7c-2.3-2.3-5.4-3.6-8.7-3.6 c-71.3,0-184.7,0-260.6,86.6C50.1,289.405,115.8,182.105,291.8,180.405z"></path>{" "}
                      </g>
                    </g>
                  </svg>
                  <span>Share</span>
                </button>
                <button className="flex items-center bg-gray-100 rounded-3xl px-4 py-1.5 mx-2 dark:bg-[#272727] dark:text-white">
                  {/* <img
                    className="h-4 mr-2"
                    src="https://i.pinimg.com/originals/b7/70/58/b770587b01d6ca8fdd230bf7050b5689.png"
                    alt=""
                  /> */}
                  <svg
                    className="mr-2"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <g id="Interface / Download">
                        <path
                          id="Vector"
                          d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                          stroke={`${value.darkMode ? "white" : ""}`}
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </g>
                  </svg>

                  <span>Download</span>
                </button>
                <button className="bg-gray-100 rounded-3xl p-2 mx-2 dark:bg-[#272727]">
                  <div className="rotate-90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
                        fill={`${value.darkMode ? "white" : ""}`}
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="video-desc bg-gray-100 my-4 rounded-lg py-2 px-3 dark:bg-[#272727]">
            <div className="text-sm dark:text-[#f1f1f1]">
              <span className="font-bold">
                {videoData[0]?.statistics?.viewCount} views{" "}
              </span>
              <span className="font-bold">
                {videoData[0]?.snippet?.publishedAt}
              </span>

              <div>
                {videoData[0]?.snippet?.localized?.description
                  .split("\n")
                  .map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <CommentsContainer videoData={videoData} />
      </div>

      <div className="watch-page-right">
        {/* <LiveChat /> */}
        <SuggestedVideos videoData={videoData} />
      </div>
    </div>
  );
};

export default WatchPage;
