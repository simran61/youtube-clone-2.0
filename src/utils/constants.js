const GOOGLE_API_KEY = "AIzaSyAkAub7dRchC3D5yIJpTEGxwlqOQ-U9pKk";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;
