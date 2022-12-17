import http from "../http";

export function token() {
  return http.get("/user/check-token", {
    custom: {
      auth: true,
    },
  });
}

export function login(email, password) {
  return http.post("/user/login", {
    email,
    password,
  });
}

export function signup(email, password, username = "") {
  return http.post('/user/signup', {
    username,
    email,
    password
  })
}
