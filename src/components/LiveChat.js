import { useEffect, useState } from "react";
import Dropdown from "../assets/icons/Dropdown";
import DotsMenu from "../assets/icons/DotsMenu";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomImg,
  generateRandomName,
  makeRandomMessage,
} from "../utils/helper";
import ChatMessage from "./ChatMessage";
import Close from "../assets/icons/Close";
import Emoji from "../assets/icons/Emoji";
import Send from "../assets/icons/Send";
import userImg from "../assets/images/userImg.jpg";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(),
          image: generateRandomImg(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-[402px] h-[596px] border rounded-xl mb-6 dark:text-white dark:border-zinc-700">
      <div className="flex justify-between py-3 px-6">
        <div className="flex items-center">
          <h2>Top Chat</h2>
          <div className="">
            <Dropdown />
          </div>
        </div>
        <div className="flex gap-2">
          <DotsMenu />
          <Close />
        </div>
      </div>
      <div className="px-6 pb-1 h-[488px] border overflow-y-scroll flex flex-col-reverse dark:border-zinc-700">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage
              key={i}
              name={c.name}
              message={c.message}
              image={c.image}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full py-2 px-6 flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Simran Gangwani",
              message: liveMessage,
              img: userImg,
            })
          );
          setLiveMessage("");
        }}
      >
        <div className="flex basis-[86%] justify-between py-2 px-4 rounded-full bg-gray-100 dark:bg-[#272727]">
          <input
            className="bg-gray-100 outline-none dark:bg-[#272727]"
            placeholder="Chat..."
            type="text"
            value={liveMessage}
            onChange={(e) => {
              setLiveMessage(e.target.value);
            }}
          />
          <button>
            <Emoji />
          </button>
        </div>
        <button className="bg-gray-100 px-2 rounded-full dark:bg-[#272727]">
          <Send />
        </button>
      </form>
    </div>
  );
};
export default LiveChat;
