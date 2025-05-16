import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: 0,
      staleTime: 0,
      retry: false,
    },
    mutations: {
      gcTime: 0,
      retry: false,
    },
  },
});
