import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AFSIC/',
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 1000, // Set to 1000 kB (1 MB) to increase the warning limit
  },
});
