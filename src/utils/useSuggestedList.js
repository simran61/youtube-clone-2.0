import { useEffect, useState } from "react";

const useSuggestedList = (videoTitle, isInitialSearch = true) => {
  const [suggestedVideo, setSuggestedVideo] = useState([]);

  useEffect(() => {
    if (videoTitle && isInitialSearch) fetchSuggestedData(videoTitle);
  }, [videoTitle]);

  const fetchSuggestedData = async (videoTitle) => {
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

  return { suggestedVideo, fetchSuggestedData };
};

export default useSuggestedList;
