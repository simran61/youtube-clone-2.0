import React, { useContext } from "react";
import { themeContext } from "../../context/context";

const Dropdown = () => {
  const value = useContext(themeContext);
  return (
    <svg
      className="-rotate-90 ml-3"
      xmlns="http://www.w3.org/2000/svg"
      height="22"
      viewBox="0 0 24 24"
      width="22"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"
        fill={`${value.darkMode ? "white" : ""}`}
      ></path>
    </svg>
  );
};

export default Dropdown;
