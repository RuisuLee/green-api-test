import axiosOrig from "axios";

const axios = axiosOrig.create({
  withCredentials: true,
  maxRedirects: 0,
});

axios.defaults.baseURL = "https://api.green-api.com";

export { axios };
