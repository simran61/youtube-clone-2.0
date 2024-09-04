import React from "react";
import { useSelector } from "react-redux";
import ShimmerVideoCard from "./ShimmerVideoCard";

const Shimmer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`overflow-hidden w-full mt-14 grid grid-flow-row ${
        isMenuOpen ? "grid-cols-4" : "grid-cols-5"
      }`}
    >
      <ShimmerVideoCard />
      <ShimmerVideoCard />
      <ShimmerVideoCard />
      <ShimmerVideoCard />
      <ShimmerVideoCard />
      <ShimmerVideoCard />
      <ShimmerVideoCard />
      <ShimmerVideoCard />
      <ShimmerVideoCard />
      <ShimmerVideoCard />
    </div>
  );
};

export default Shimmer;
