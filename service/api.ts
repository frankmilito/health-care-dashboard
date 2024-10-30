import axios from "axios";
// import { store } from "../GlobalRedux/store";
// import { toast } from "react-toast";

const baseUrl =
  // process.env.NODE_ENV === "production"
  //   ? process.env.REACT_APP_BASE_URL_PROD
  //   : process.env.REACT_APP_BASE_URL_DEV;
  process.env.NODE_ENV === "production"
    ? "https://prod.tailorte.com/api/v1"
    : "https://testing.tailorte.com/api/v1";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Retrieve the token from the Redux store
//     const token = store?.getState().user.token;
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.code === "ERR_NETWORK") {
//       toast.error("Please check your network connection!");
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
