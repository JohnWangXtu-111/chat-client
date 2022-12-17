import Request from "luch-request";

const http = new Request();

http.setConfig((config) => {
  config.baseURL = "http://127.0.0.1:3000/api/v1"; // development

  config.validateStatus = (statusCode) => {
    return statusCode >= 200 && statusCode < 400;
  };

  config.timeout = 5000;

  return config;
});

http.interceptors.request.use(
  (config) => {
    //需要auth的接口
    if (config.custom.auth) {
      const token = uni.getStorageSync("token");
      if (!token) {
        return uni.reLaunch({
          url: "pages/login/login",
        });
      }

      config.header.authorization = "Bearer " + token;
    }

    return config;
  },
  (config) => {
    return Promise.reject(config);
  }
);

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (response) => {

    if (response.statusCode === 401) {
      uni.reLaunch({
        url: "pages/login/login",
      });
    }
    return Promise.reject(response);
  }
);

export default http;
