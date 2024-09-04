import React from "react";
import Dropdown from "../assets/icons/Dropdown";

const SuggestedTag = () => {
  return (
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
        <button className="text-sm px-3 py-1.5 mr-2 bg-gray-200 rounded-lg dark:bg-[#ffffff1A] dark:text-white">
          ReactJS
        </button>
      </div>
      <Dropdown />
    </div>
  );
};

export default SuggestedTag;
