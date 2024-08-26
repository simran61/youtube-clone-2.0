import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "JavaScript",
    "Music",
    "T-Series",
    "Live",
    "News",
    "User interface design",
    "Bedrooms",
    "Information Technology",
    "Resumes",
    "Mixes",
    "Sales",
    "Comedy",
    // "Graphic Design",
    // "Asian music",
  ];

  return (
    <div className="w-full fixed bg-white">
      <div>
        <button className="w-fit px-3 py-1.5 m-3 bg-black rounded-lg font-semibold text-sm text-white">
          All
        </button>
        {list.map((btnCat, i) => (
          <Button key={i} name={btnCat} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
