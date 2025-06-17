// filepath: src/utils/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://inno4-production.up.railway.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
