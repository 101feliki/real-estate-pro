import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Create axios instance with base configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('access_token');
      window.location.href = '/login';
    }
    
    // You can add more error handling here
    return Promise.reject(error);
  }
);

// Generic request function
export const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient.request<T>(config);
    return response.data;
  } catch (error) {
    // Log error for debugging
    console.error('API Request Error:', error);
    throw error;
  }
};

// Export the axios instance for direct use if needed
export { apiClient };

// Helper functions for common HTTP methods
export const api = {
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => 
    request<T>({ ...config, method: 'GET', url }),

  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => 
    request<T>({ ...config, method: 'POST', url, data }),

  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => 
    request<T>({ ...config, method: 'PUT', url, data }),

  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => 
    request<T>({ ...config, method: 'PATCH', url, data }),

  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => 
    request<T>({ ...config, method: 'DELETE', url }),
};

// Export default apiClient for backward compatibility
export default apiClient;