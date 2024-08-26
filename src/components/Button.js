import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-3 py-1.5 m-3 ml-0 bg-gray-200 rounded-lg font-semibold text-sm w-fit">
      {name}
    </button>
  );
};

export default Button;
