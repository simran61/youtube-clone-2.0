import React from "react";

const ChatMessage = ({ name, message, image }) => {
  return (
    <div className="flex items-center p-0.5">
      <img
        className="h-6 w-6 mr-2 object-cover rounded-full"
        src={image}
        alt=""
      />
      <div>
        <span className="font-semibold text-[13px] pr-2">{name}</span>
        <span className="text-[13px] leading-[4px]">{message}</span>
      </div>
    </div>
  );
};
export default ChatMessage;
