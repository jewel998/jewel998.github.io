/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Feature-flag / remote-config client key (public cid_ frontend key). */
  readonly VITE_CONFIG_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
