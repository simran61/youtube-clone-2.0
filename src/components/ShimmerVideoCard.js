import React from "react";
import { useSelector } from "react-redux";

const ShimmerVideoCard = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`mx-2 my-6 mb-12 ${isMenuOpen ? "w-[296px]" : "w-[267px]"}`}
    >
      <div className="rounded-xl w-full bg-gray-200 dark:bg-zinc-800 h-[166px]"></div>
      <div className="flex my-3">
        <div className="h-8 w-8 mr-2 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
        <div>
          <div className="mb-2.5 h-4 w-[220px] rounded-sm bg-gray-200 dark:bg-zinc-800"></div>
          <div className="mb-1 h-4 w-[150px] bg-gray-200 dark:bg-zinc-800"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoCard;
