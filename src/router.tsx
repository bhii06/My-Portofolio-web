import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Tulis langsung nama repositori GitHub Pages kamu agar router tidak tersesat
    basepath: process.env.NODE_ENV === 'production' ? '/Abhinaya-portofolio' : '/',
  });

  return router;
};