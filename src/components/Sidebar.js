import React from "react";
import { useSelector } from "react-redux";
import Dropdown from "../assets/icons/Dropdown";
import { sidebarBasic, sidebarYou, subscriptionList, explore } from "../icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="side-bar p-3 h-[calc(100vh-56px)] fixed bg-white overflow-hidden mt-14 dark:bg-[#0F0F0F]">
      <ul className="dark:text-[#f1f1f1] text-sm">
        {sidebarBasic.map((basic, index) => (
          <Link key={index} to={basic.url}>
            <li className="px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
              {basic.icon}
              {basic.title}
            </li>
          </Link>
        ))}
      </ul>
      <hr className="my-3.5" />
      <h1 className="font-semibold px-3 py-1 dark:text-[#f1f1f1]">Explore</h1>
      <ul className="text-sm dark:text-[#f1f1f1]">
        {explore.map((explore, index) => (
          <Link to={explore.url} key={index}>
            <li className="px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
              {explore.icon}
              {explore.title}
            </li>
          </Link>
        ))}
      </ul>
      <hr className="my-4" />
      <h1 className="font-semibold px-3 py-1 dark:text-[#f1f1f1]">
        Subscriptions
      </h1>
      <ul className="text-sm dark:text-[#f1f1f1]">
        {subscriptionList.map((subscription, index) => (
          <li
            key={index}
            className="px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]"
          >
            <img
              className="h-7 rounded-full mr-6"
              src={subscription.avatar}
              alt="subscription"
            />
            {subscription.name}
          </li>
        ))}
        <li className="px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <div className="rotate-90 mr-4">
            <Dropdown />
          </div>
          Show more
        </li>
      </ul>
      <hr className="my-3.5" />
      <div className="flex items-center px-3 h-10">
        <h1 className="font-semibold dark:text-[#f1f1f1]">You</h1>
        <Dropdown />
      </div>
      <ul className="dark:text-[#f1f1f1] text-sm">
        {sidebarYou.map((you, index) => (
          <li
            key={index}
            className="px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]"
          >
            {you.icon}
            {you.title}
          </li>
        ))}
      </ul>

      <hr className="my-4" />
    </div>
  );
};

export default Sidebar;
