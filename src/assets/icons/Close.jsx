import React, { useContext } from "react";
import { themeContext } from "../../context/context";

const Close = () => {
  const value = useContext(themeContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 101 101"
      id="cross"
      width="24px"
    >
      <path
        d="M83.9 17.1c-.9-.9-2.5-.9-3.4 0l-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4l30 30-30 30c-.9.9-.9 2.5 0 3.4.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l30-30 30 30c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4l-30-30 30-30c.9-.9.9-2.4 0-3.4z"
        fill={`${value.darkMode ? "white" : ""}`}
      ></path>
    </svg>
  );
};

export default Close;
