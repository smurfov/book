import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  }

  return config;
});

export const api = {
  async login(email: string, password: string) {
    const response = await axios.post("/auth/login", { email, password });
    return response.data;
  },
};
