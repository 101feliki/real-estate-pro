/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_USE_MOCK_API: string;
  readonly VITE_MOCK_API_DELAY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}