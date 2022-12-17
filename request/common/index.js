import http from "../http";

export function searchUserAndGroup(keyword) {
  return http.get(`/search/global?keyword=${keyword}`, {
    custom: {
      auth: true,
    },
  });
}
