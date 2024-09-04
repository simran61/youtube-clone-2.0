import React from "react";
import adBanner from "../assets/images/adBanner.jpg";
import adChannel from "../assets/images/adChannel.jpg";
import DotsMenu from "../assets/icons/DotsMenu";
import { Link } from "react-router-dom";

const AdContainer = () => {
  return (
    <Link to="https://www.nivea.in/">
      <div className="border rounded-xl w-[402px] h-[139px] dark:border-zinc-700">
        <img className="rounded-t-xl" src={adBanner} alt="adImg" />
        <div className="flex justify-between items-center ml-4 my-3">
          <div className="flex items-center">
            <img
              className="w-9 h-9 rounded-full"
              src={adChannel}
              alt="adChannel"
            />
            <div className="mx-4 dark:text-white">
              <h3>NIVEA India</h3>
              <div className="text-xs">
                <span className="font-bold">Sponsered</span>
                <span className="text-[#606060] dark:text-[#aaaaaa]">
                  {" "}
                  • www.nivea.in
                </span>
              </div>
            </div>
          </div>
          <button className="bg-blue-600 px-4 py-2 rounded-3xl font-semibold text-white">
            Know more
          </button>
          <div className="flex items-center justify-between h-9 w-9 mr-1">
            <DotsMenu />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdContainer;
