import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex m-2">
      <Button name="All" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="Javascript" />
      <Button name="Information Technology" />
      <Button name="MacBooks" />
      <Button name="Smartphones" />
      <Button name="Comedy" />
    </div>
  );
};

export default ButtonList;
