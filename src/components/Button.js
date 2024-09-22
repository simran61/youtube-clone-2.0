import React from "react";
import { useSearchParams } from "react-router-dom";

const Button = ({ name, id }) => {
  const [videoId] = useSearchParams();
  return (
    <button
      className={
        videoId.get("v") === id
          ? "w-fit px-3 py-1.5 m-3 bg-black rounded-lg font-semibold text-sm text-white dark:bg-[#f1f1f1] dark:text-black"
          : "px-3 py-1.5 m-3 ml-0 bg-gray-200 rounded-lg font-semibold text-sm w-fit dark:bg-[#ffffff1A] dark:text-white"
      }
    >
      {name}
    </button>
  );
};

export default Button;
