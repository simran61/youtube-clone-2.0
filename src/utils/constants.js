export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`;

export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_VIDEOS_CATEGORY = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_API_KEY}&videoCategoryId=`;

export const VIDEO_DETAILS = `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics&id=`;

export const CHANNEL_INFO = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_API_KEY}&id=`;
