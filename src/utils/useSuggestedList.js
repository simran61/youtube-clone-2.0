import { useEffect, useState } from "react";

const useSuggestedList = ({ videoData }) => {
  const [suggestedVideo, setSuggestedVideo] = useState([]);
  const videoTitle = videoData?.snippet?.title;

  useEffect(() => {
    if (videoTitle) suggestedData(videoTitle);
  }, [videoTitle]);

  const suggestedData = async (videoTitle) => {
    try {
      const suggestedUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${encodeURIComponent(
        videoTitle
      )}%2023&key=${process.env.REACT_APP_API_KEY}`;
      const data = await fetch(suggestedUrl);
      const json = await data.json();
      setSuggestedVideo(json.items);
    } catch (err) {
      console.log(err);
    }
  };

  return suggestedVideo;
};

export default useSuggestedList;
