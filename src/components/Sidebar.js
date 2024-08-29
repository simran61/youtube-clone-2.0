import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="side-bar p-3 h-[calc(100vh-56px)] fixed bg-white overflow-hidden mt-14 dark:bg-[#0F0F0F]">
      <ul className="dark:text-[#f1f1f1]">
        <li className="text-sm px-3 h-10 w-[204px] flex items-center font-semibold bg-gray-100 rounded-lg dark:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path>
          </svg>
          Home
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
          </svg>
          Shorts
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
          </svg>
          Subscriptions
        </li>
      </ul>
      <hr className="my-3.5" />
      <div className="flex items-center px-3 h-10">
        <h1 className="font-semibold dark:text-[#f1f1f1]">You</h1>
        <img
          className="h-2.5 ml-3"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
          alt=""
        />
      </div>
      <ul className="dark:text-[#f1f1f1]">
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path>
          </svg>
          Your channel
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <g>
              <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
            </g>
          </svg>
          History
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path>
          </svg>
          Playlists
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
          </svg>
          Your videos
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
          </svg>
          Watch later
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
          </svg>
          Liked videos
        </li>
      </ul>
      <hr className="my-4" />

      <h1 className="font-semibold px-3 py-1 dark:text-[#f1f1f1]">
        Subscriptions
      </h1>
      <ul className="dark:text-[#f1f1f1]">
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <img
            className="h-7 rounded-full mr-6"
            src="https://yt3.ggpht.com/ytc/AIdro_md2CfeGP7cDguRmrpRdM3a1r_gOniMzennD6141VLFw70=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          Akshay Saini
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <img
            className="h-7 rounded-full mr-6"
            src="https://yt3.ggpht.com/ytc/AIdro_l_j492nkzqD1_nA9DqHl-r4L5pe9AI_jzhy9BX-af45JI=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          Tharun Speaks
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <img
            className="h-7 rounded-full mr-6"
            src="https://yt3.ggpht.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          freeCodeCamp
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <img
            className="h-7 rounded-full mr-6"
            src="https://yt3.ggpht.com/VLOvpKYxd_ZTrjrorHo5VkqaO0lM1Zs2Zbe-Nrfx7UkWnUGKNbpgEcDxhSjDWS4UONdtyKddLQ=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          Hitesh Choudhary
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <img
            className="h-7 rounded-full mr-6"
            src="https://yt3.ggpht.com/ytc/AIdro_k2O-2O1fL6S58poofnawszoBfzsl1YBpciM9BDhupgLToC=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          Nishant Chahar
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <img
            className="h-7 rounded-full mr-6"
            src="https://yt3.ggpht.com/Xxr9GvsePwYQ3b8LYaPjTmSxtbQIHzjG2X-Z_VqzSxD9lPhAByovkFCrAguwViYM9PyXuFAV=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          Sasha Alex Sloan
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <img
            className="h-7 rounded-full mr-6"
            src="https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s88-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          Fireship
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
          </svg>
          Show more
        </li>
      </ul>

      <hr className="my-3.5" />
      <h1 className="font-semibold px-3 py-1">Explore</h1>
      <ul className="dark:text-[#f1f1f1]">
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
          </svg>
          Trending
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2c-.46-2.28-2.48-4-4.9-4S7.56 3.72 7.1 6H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"></path>
          </svg>
          Shopping
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
          </svg>
          Music
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path>
          </svg>
          Movies
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <g>
              <path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path>
            </g>
          </svg>
          Live
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
          </svg>
          Gaming
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
          </svg>
          News
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>
          </svg>
          Sports
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M16 21h-2.28c-.35.6-.98 1-1.72 1s-1.38-.4-1.72-1H8v-1h8v1zm4-11c0 2.96-1.61 5.54-4 6.92V19H8v-2.08C5.61 15.54 4 12.96 4 10c0-4.42 3.58-8 8-8s8 3.58 8 8zm-5 8v-1.66l.5-.29C17.66 14.8 19 12.48 19 10c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.48 1.34 4.8 3.5 6.06l.5.28V18h6z"></path>
          </svg>
          Courses
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12 12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"></path>
          </svg>
          Fashion & Beauty
        </li>
        <li className="text-sm px-3 h-10 w-[204px] flex items-center hover:bg-gray-100 rounded-lg dark:hover:bg-[#272727]">
          <svg
            className="mr-6"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M6 12c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.66-.67 3.16-1.77 4.25l-.71-.71C16.44 14.63 17 13.38 17 12c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 1.38.56 2.63 1.47 3.54l-.71.71C6.67 15.16 6 13.66 6 12zm8 0c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.38 1 1.72V22h2v-8.28c.6-.34 1-.98 1-1.72zm-9.06 7.08.71-.71C4.01 16.74 3 14.49 3 12c0-4.96 4.04-9 9-9s9 4.04 9 9c0 2.49-1.01 4.74-2.65 6.37l.71.71C20.88 17.27 22 14.77 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 2.77 1.12 5.27 2.94 7.08z"></path>
          </svg>
          Podcasts
        </li>
      </ul>
      <hr className="my-4" />
    </div>
  );
};

export default Sidebar;
