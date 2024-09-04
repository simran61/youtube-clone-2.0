import { useSelector } from "react-redux";
import { calculateNumber, publishedDate } from "../utils/videoCalulations";
import DotsMenu from "../assets/icons/DotsMenu";
import useChannelDetails from "../utils/useChannelDetails";

const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;
  const { viewCount } = statistics;

  const channelInfo = useChannelDetails(channelId);

  return (
    <div
      className={`mx-2 my-6 mb-12 ${isMenuOpen ? "w-[296px]" : "w-[267px]"}`}
    >
      <img
        className="rounded-xl hover:rounded-none"
        src={thumbnails.medium.url}
        alt="video-thumbnail"
      />
      <div className="flex my-2">
        <img
          className="h-8 mr-2 rounded-full"
          alt="user"
          src={channelInfo?.snippet?.thumbnails?.default?.url}
        />
        <div>
          <h2 className="mb-1 font-semibold text-ellipsis overflow-hidden line-clamp-2 dark:text-white">
            {title}
          </h2>
          <h3 className="text-[#606060] text-sm dark:text-[#aaaaaa]">
            {channelTitle}
          </h3>
          <div>
            <span className="text-[#606060] text-sm dark:text-[#aaaaaa]">
              {calculateNumber(viewCount)} views •{" "}
            </span>
            <span className="text-[#606060] text-sm dark:text-[#aaaaaa]">
              {publishedDate(publishedAt)}
            </span>
          </div>
        </div>
        <div className="h-4">
          <DotsMenu />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
