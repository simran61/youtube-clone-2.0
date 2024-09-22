import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DotsMenu from "../assets/icons/DotsMenu";
import adVideoChannel from "../assets/images/adVideoChannel.jpg";
import adVideoBanner from "../assets/images/adVideoBanner.webp";

const AdVideo = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <Link to="https://www.youtube.com/watch?v=5XxIwPKMlek">
      <div
        className={`mx-2 my-6 ${isMenuOpen ? "w-[399.71px]" : "w-[337.79px]"}`}
      >
        <img
          className="rounded-xl hover:rounded-none"
          src={adVideoBanner}
          alt="thumbnail"
        />
        <div className="flex justify-between my-2">
          <div className="flex items-center">
            <img
              className="h-9 mr-2 rounded-full"
              alt="channel"
              src={adVideoChannel}
            />
            <div>
              <h2 className="font-semibold text-ellipsis overflow-hidden line-clamp-2 dark:text-white">
                For web pros
              </h2>
              <div>
                <span className="font-semibold text-sm dark:text-white">
                  Sponsered •{" "}
                </span>
                <span className="text-[#606060] text-sm dark:text-[#aaaaaa]">
                  Wix Studio
                </span>
              </div>
            </div>
          </div>
          <DotsMenu />
        </div>
        <div className="flex justify-between py-1">
          <button
            className={`${
              isMenuOpen ? "w-[172px]" : "w-[142px]"
            } p-2.5 rounded-3xl border text-[#3EA6FF] font-medium text-sm dark:border-zinc-700`}
          >
            Watch
          </button>
          <button
            className={`${
              isMenuOpen ? "w-[172px]" : "w-[142px]"
            }  p-2.5 rounded-3xl bg-blue-100 text-[#3EA6FF] font-medium text-sm dark:bg-[#263850]`}
          >
            Create Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default AdVideo;
