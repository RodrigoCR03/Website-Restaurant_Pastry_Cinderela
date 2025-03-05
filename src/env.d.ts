/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_NODE_ENV: string;
  readonly VITE_GOOGLE_MAPS_API_KEY?: string;
  readonly VITE_EMAIL_SERVICE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 