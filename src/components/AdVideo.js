import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AdVideo = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <Link to="https://www.youtube.com/watch?v=5XxIwPKMlek">
      <div className={`mx-2 my-6 ${isMenuOpen ? "w-[296px]" : "w-[267px]"}`}>
        <img
          className="rounded-xl hover:rounded-none"
          src="https://i.ytimg.com/vi/QVNpTiFsGvw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZfV6zBC_usOgeX4DTeNyfM56fJA"
          alt=""
        />
        <div className="flex justify-between my-2">
          <div className="flex items-center">
            <img
              className="h-9 mr-2 rounded-full"
              alt="user"
              src="https://yt3.ggpht.com/ioD47o1fxrL6SaynAejO20wJ4o_8xQn8K4cWvnyCpahR3X8IifAFdVm8xsEN4oODRddMonkagw=s88-c-k-c0x00ffffff-no-rj"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
          </svg>
        </div>
        <div className="flex justify-between py-1">
          <button className="w-[142px] p-2 rounded-3xl border text-[#3EA6FF] font-medium text-sm dark:border-zinc-700">
            Watch
          </button>
          <button className="w-[142px] p-2 rounded-3xl bg-blue-100 text-[#3EA6FF] font-medium text-sm dark:bg-[#263850]">
            Create Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default AdVideo;
