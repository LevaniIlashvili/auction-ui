import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
