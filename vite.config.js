import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/vps-media": {
          target: env.VPS_3001_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/vps-media/, ""),
        },
        "/api": {
          target: "http://localhost:3000",
        }
      }
    }
  };
});
