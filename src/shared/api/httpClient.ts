import axios from "axios";

export const http = axios.create({ baseURL: "https://localhost:7144/api" });

http.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);
