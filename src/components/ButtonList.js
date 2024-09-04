import React from "react";
import Button from "./Button";
import { btnList } from "../utils/helper";
import { Link } from "react-router-dom";

const ButtonList = () => {
  return (
    <div className="w-full fixed bg-white dark:bg-[#0F0F0F]">
      <div>
        <button className="w-fit px-3 py-1.5 m-3 bg-black rounded-lg font-semibold text-sm text-white dark:bg-[#f1f1f1] dark:text-black">
          All
        </button>
        {btnList.map((btnCat, index) => (
          <Link to={btnCat.url} key={index}>
            <Button name={btnCat.btnName} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
