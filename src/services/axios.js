import axios from "axios";

import { API_BASE_URL } from "../constants/api";

export const api = axios.create({
  baseURL: API_BASE_URL,

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {

    const originalRequest =
      error.config;

    /**
     * Prevent infinite loop
     */
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes(
        "/auth/refresh-token"
      )
    ) {

      originalRequest._retry = true;

      try {

        await api.post(
          "/auth/refresh-token"
        );

        return api(originalRequest);

      } catch (refreshError) {

        window.location.href =
          "/login";

        return Promise.reject(
          refreshError
        );
      }
    }

    return Promise.reject(error);
  }
);