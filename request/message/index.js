import http from "../http";

export function fetchHomeMessage() {
  return http.get("/msg/all", {
    custom: {
      auth: true,
    },
  });
}

export function fetchFriendReqList() {
  return http.get("/msg/friend-req-list", {
    custom: {
      auth: true,
    },
  });
}


export function latestReqMsg(fid) {
  return http.get(`/msg/latest-friend-msg?fid=${fid}`, {
    custom: {
      auth: true,
    },
  });
}