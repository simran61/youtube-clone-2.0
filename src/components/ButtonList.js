import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Live",
    "Javascript",
    "Information Technology",
    "MacBooks",
    "Smartphones",
    "Comedy",
  ];

  return (
    <div className="flex m-2">
      {list.map((btnCat, i) => (
        <Button key={i} name={btnCat} />
      ))}
    </div>
  );
};

export default ButtonList;
