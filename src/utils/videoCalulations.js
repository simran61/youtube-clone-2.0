import moment from "moment";

export const publishedDate = (publishedAt) =>
  moment(publishedAt).startOf("hour").fromNow();

export const calculateNumber = (num) => {
  if (num > 999999) return (num / 1000000).toFixed(1) + "M";
  else if (num > 99999) return (num / 1000).toFixed(1) + "k";
  else if (num > 9999) return (num / 1000).toFixed(1) + "k";
  else if (num > 999) return (num / 1000).toFixed(1) + "k";
  else return num;
};
