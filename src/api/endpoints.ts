export const API_ENDPOINTS = {
  PROPERTIES: {
    BASE: '/properties',
    GET_ALL: '/properties',
    GET_BY_ID: (id: string) => `/properties/${id}`,
    GET_BY_SLUG: (slug: string) => `/properties/slug/${slug}`,
    CREATE: '/properties',
    UPDATE: (id: string) => `/properties/${id}`,
    DELETE: (id: string) => `/properties/${id}`,
    SEARCH: '/properties/search',
    FEATURED: '/properties/featured',
    SIMILAR: (id: string) => `/properties/${id}/similar`,
    FAVORITE: (id: string) => `/properties/${id}/favorite`,
  },
  
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile',
  },
} as const;