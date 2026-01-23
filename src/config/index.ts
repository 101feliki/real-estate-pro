export const CONFIG = {
  APP_NAME: import.meta.env.VITE_APP_NAME || 'RealEstate Pro',
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  USE_MOCK_API: import.meta.env.VITE_USE_MOCK_API === 'true',
  MOCK_DELAY: parseInt(import.meta.env.VITE_MOCK_API_DELAY || '500', 10),
} as const;