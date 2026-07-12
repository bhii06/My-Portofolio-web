import { defineConfig } from "vinxi";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
      base: "/",
    },
    {
      name: "client",
      type: "spa", // Kita paksa jalankan sebagai Single Page Application murni agar fitur Node.js mati di browser
      handler: "./src/start.ts",
      target: "browser",
      plugins: () => [
        TanStackRouterVite(),
        react(),
      ],
    },
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});