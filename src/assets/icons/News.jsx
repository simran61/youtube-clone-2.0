import React, { useContext } from "react";
import { themeContext } from "../../context/context";

const News = () => {
  const value = useContext(themeContext);
  return (
    <svg
      className="mr-6"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"
        fill={`${value.darkMode ? "white" : ""}`}
      ></path>
    </svg>
  );
};

export default News;
