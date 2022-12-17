import http from "../http";

export function getUser(id) {
  return http.get(`/user/get/${id}`, {
    custom: {
      auth: true,
    },
  });
}
