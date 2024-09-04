import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { loaderContext } from "../context/context";
import Logo from "../assets/images/Logo";
import Loader from "./Loader";
import Hamburger from "../assets/icons/Hamburger";
import Create from "../assets/icons/Create";
import Notifications from "../assets/icons/Notifications";
import userImg from "../assets/images/userImg.jpg";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Head = () => {
  const loaderValue = useContext(loaderContext);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      {loaderValue.loader && <Loader />}

      <div className="flex z-50 justify-between items-center px-5 py-3 fixed w-full bg-white dark:bg-[#0F0F0F]">
        <div className="flex items-center">
          <div
            className="mr-7 cursor-pointer"
            onClick={() => toggleMenuHandler()}
          >
            <Hamburger />
          </div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <SearchBar />
        <div className="flex items-center">
          <div className="mx-1 hover:bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full">
            <Create />
          </div>
          <div className="mx-1 hover:bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full">
            <Notifications />
          </div>
          <img className="h-8 rounded-full mx-1 " alt="user" src={userImg} />
        </div>
      </div>
    </>
  );
};

export default Head;
