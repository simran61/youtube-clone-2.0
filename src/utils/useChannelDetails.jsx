import { useEffect, useState } from "react";
import { CHANNEL_INFO } from "./constants";

const useChannelDetails = (channelId) => {
  const [channelInfo, setChannelInfo] = useState([]);

  useEffect(() => {
    getChannelDetails();
  }, [channelId]);

  const getChannelDetails = async () => {
    try {
      const channelDetails = await fetch(CHANNEL_INFO + channelId);
      const channelData = await channelDetails.json();
      setChannelInfo(channelData?.items[0]);
    } catch (err) {
      console.log(err);
    }
  };
  return channelInfo;
};

export default useChannelDetails;
