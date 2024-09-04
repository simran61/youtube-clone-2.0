import React, { useContext } from "react";
import { themeContext } from "../../context/context";

const Download = () => {
  const value = useContext(themeContext);
  return (
    <svg height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="Interface / Download">
          <path
            id="Vector"
            d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
            stroke={`${value.darkMode ? "white" : ""}`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default Download;
