import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [
    TanStackRouterVite(),
    tailwindcss(), // Plugin Tailwind v4 diletakkan di sini
    react(),
  ],
  base: command === 'serve' ? '/' : '/My-Portofolio-web/',
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));