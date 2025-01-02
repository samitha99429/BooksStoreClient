import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bookstoreserver-4fil.onrender.com/api", // Base URL for all requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
