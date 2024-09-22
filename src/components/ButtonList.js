import React from "react";
import Button from "./Button";
import { btnList } from "../utils/helper";
import { Link, useSearchParams } from "react-router-dom";

const ButtonList = () => {
  const [videoId] = useSearchParams();
  console.log(videoId.size);
  return (
    <div className="w-full fixed bg-white dark:bg-[#0F0F0F]">
      <div>
        <Link to={"/"}>
          <button
            className={
              videoId.size === 0
                ? "w-fit px-3 py-1.5 m-3 bg-black rounded-lg font-semibold text-sm text-white dark:bg-[#f1f1f1] dark:text-black"
                : "px-3 py-1.5 m-3 ml-0 bg-gray-200 rounded-lg font-semibold text-sm w-fit dark:bg-[#ffffff1A] dark:text-white"
            }
          >
            All
          </button>
        </Link>
        {btnList.map((btnCat, index) => (
          <Link to={btnCat.url} key={index}>
            <Button name={btnCat.btnName} id={btnCat.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
