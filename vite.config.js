import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/vps-media": {
        target: "http://74.208.167.229:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/vps-media/, ""),
      },
      "/api": {
        target: "http://localhost:3000",
      }
    }
  }
});
