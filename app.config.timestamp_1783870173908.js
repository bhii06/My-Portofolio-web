// app.config.ts
import { defineConfig } from "vinxi";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
var app_config_default = defineConfig({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
      base: "/"
    },
    {
      name: "client",
      type: "spa",
      // Kita paksa jalankan sebagai Single Page Application murni agar fitur Node.js mati di browser
      handler: "./src/start.ts",
      target: "browser",
      plugins: () => [
        TanStackRouterVite(),
        react()
      ]
    }
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
export {
  app_config_default as default
};
