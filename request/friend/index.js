import http from "../http";

export function requestFriend(fid, reqMsg = '请求添加你为好友') {
  return http.post(
    "/friend/request-friend",
    {
      fid,
      reqMsg
    },
    {
      custom: {
        auth: true,
      },
    }
  );
}

export function acceptRequest(fid) {
  return http.post(
    "/friend/accept-friend",
    {
      fid
    },
    {
      custom: {
        auth: true,
      },
    }
  );
}
