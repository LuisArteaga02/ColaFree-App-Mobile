import { create } from 'axios';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL?.trim();

if (!API_BASE_URL) {
  throw new Error('EXPO_PUBLIC_API_URL must be configured before starting the app.');
}

export const apiClient = create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);