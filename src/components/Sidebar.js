import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 border-r-2 w-52 h-[87.5vh]">
      <ul>
        <li className="py-1.5 flex items-center">
          <img
            className="h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
            alt=""
          />
          Home
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
            alt=""
          />
          Shorts
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
            alt=""
          />
          Subscriptions
        </li>
      </ul>
      <hr className="my-4" />
      <div className="flex items-center ">
        <h1 className="font-bold">You</h1>
        <img
          className="h-3 ml-3"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
          alt=""
        />
      </div>
      <ul>
        <li className="py-1.5 flex items-center">
          <img
            className="h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
            alt=""
          />
          Your channel
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
            alt=""
          />
          History
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
            alt=""
          />
          Playlists
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
            alt=""
          />
          Your videos
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
            alt=""
          />
          Watch later
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
            alt=""
          />
          Liked videos
        </li>
      </ul>
      <hr className="my-4" />
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li className="py-1.5 flex items-center">
          <img
            className="h-7 mr-2"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt=""
          />
          Akshay Saini
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-7 mr-2"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt=""
          />
          Technical Guruji
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-7 mr-2"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt=""
          />
          T Series
        </li>
        <li className="py-1.5 flex items-center">
          <img
            className="h-7 mr-2"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt=""
          />
          Roadside Coder
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
