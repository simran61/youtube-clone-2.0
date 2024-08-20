import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import SuggestedVideos from "./SuggestedVideos";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchPage = () => {
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
  console.log(channelInfo);

  return (
    <div className="flex justify-between mx-24 my-8">
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
            <h1 className="font-bold text-xl my-3">
              {videoData[0]?.snippet?.localized?.title}
            </h1>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img
                  className="rounded-full w-10 h-10"
                  src="https://yt3.ggpht.com/CExws1pYCJOMWoE_aPHSwr-nLM7YHbZWF6a4fxwX5hYPLKJi8A4aUoqhRk-23WLkiAyj6bCBUw=s88-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
                <div className="ml-3">
                  <h3 className="font-bold -mb-1">
                    {videoData[0]?.snippet?.channelTitle}
                  </h3>
                  <span className="text-xs">3.12k subscribers</span>
                </div>
                <button className="bg-black text-white font-semibold py-1.5 px-4 rounded-3xl mx-4">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex bg-gray-100 rounded-3xl px-4 py-1 mx-2">
                  <button className="flex items-center mr-2">
                    <img
                      className="h-7 mix-blend-multiply"
                      src="https://static.vecteezy.com/system/resources/thumbnails/000/423/558/small/Multimedia__287_29.jpg"
                      alt=""
                    />
                    <span>{videoData[0]?.statistics?.likeCount}</span>
                  </button>
                  <button className="pl-2 border-l-2">
                    <img
                      className="rotate-180 h-7 mix-blend-multiply"
                      src="https://static.vecteezy.com/system/resources/thumbnails/000/423/558/small/Multimedia__287_29.jpg"
                      alt=""
                    />
                  </button>
                </div>
                <button className="flex items-center bg-gray-100 rounded-3xl px-4 py-1.5 mx-2">
                  <img
                    className="h-4 mr-2"
                    src="https://cdn-icons-png.flaticon.com/256/222/222322.png"
                    alt=""
                  />
                  <span>Share</span>
                </button>
                <button className="flex items-center bg-gray-100 rounded-3xl px-4 py-1.5 mx-2">
                  <img
                    className="h-4 mr-2"
                    src="https://i.pinimg.com/originals/b7/70/58/b770587b01d6ca8fdd230bf7050b5689.png"
                    alt=""
                  />
                  <span>Download</span>
                </button>
                <button className="bg-gray-100 rounded-3xl p-2 mx-2">
                  <img
                    className="h-4"
                    src="https://www.svgrepo.com/show/345223/three-dots-vertical.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="video-desc bg-gray-100 my-4 rounded-lg py-2 px-3">
            <div>
              <span>{videoData[0]?.statistics?.viewCount} views </span>
              <span>{videoData[0]?.snippet?.publishedAt}</span>

              <p>{videoData[0]?.snippet?.localized?.description}</p>
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
