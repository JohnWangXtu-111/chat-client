import moment from "moment";

export function tinyTime(timestamp) {
  moment.locale("zh-cn");
  let now = +Date.now();

  const day = 1000 * 60 * 60 * 24;
  const tenDays = day * 10;

  if (now - timestamp < day) {
    return moment(new Date(timestamp)).format("h:mm");
  } else if (now - timestamp < tenDays) {
    return moment(new Date(timestamp)).format("MMM Do");
  } else {
    const diff = now - timestamp;
    return Math.floor(diff / day) + "天前";
  }
}
