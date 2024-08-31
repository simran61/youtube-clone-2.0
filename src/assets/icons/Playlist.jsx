import React, { useContext } from "react";
import { themeContext } from "../../context/context";

const Playlist = () => {
  const value = useContext(themeContext);
  return (
    <svg
      className="mr-6"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"
        fill={`${value.darkMode ? "white" : ""}`}
      ></path>
    </svg>
  );
};

export default Playlist;
