import React, { useContext } from "react";
import { themeContext } from "../../context/context";

const Share = () => {
  const value = useContext(themeContext);
  return (
    <svg
      fill={`${value.darkMode ? "#ffffff" : "#000000"}`}
      height="19px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 489 489"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M59.7,255.005c-44,53.5-59.7,116.5-59.7,157.6c0,5.6,3.7,10.4,9.1,11.8c1,0.3,2.1,0.4,3.1,0.4c4.3,0,8.4-2.3,10.7-6.2 c62.3-109.8,179.8-115.6,256.5-115.9v79.5c0,4.7,2.7,9.1,7,11.1s9.4,1.4,13-1.6l185.2-153.2c2.8-2.3,4.4-5.8,4.4-9.4 c0-3.7-1.6-7.1-4.5-9.4l-185-152.7c-3.7-3-8.7-3.7-13-1.6c-4.3,2-7,6.3-7,11.1v79.8C161.7,160.605,95.1,211.905,59.7,255.005z M291.8,180.405c6.7-0.1,12.1-5.5,12.1-12.3v-65.7l153.6,126.7l-153.6,127.1v-65.7c0-3.2-1.3-6.4-3.6-8.7c-2.3-2.3-5.4-3.6-8.7-3.6 c-71.3,0-184.7,0-260.6,86.6C50.1,289.405,115.8,182.105,291.8,180.405z"></path>{" "}
        </g>
      </g>
    </svg>
  );
};

export default Share;
