import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8000,
     watch: {
       usePolling: true
     }
  },
  define: {
    global: "globalThis",
    "process.env": {},
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});