import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import AdVideo from "./AdVideo";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import useVideoList from "../utils/useVideoList";

const VideoContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const videoList = useVideoList();

  return videoList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className={`overflow-hidden w-full mt-14 grid grid-flow-row ${
        isMenuOpen ? "grid-cols-4" : "grid-cols-5"
      }`}
    >
      <AdVideo />
      {videoList.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
