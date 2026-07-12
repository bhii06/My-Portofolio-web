import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    tailwindcss(),
    react(),
  ],
  // Mengunci jalur dasar agar semua aset dikompilasi ke dalam subfolder repositori kamu
  base: "/My-Portofolio-web/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});