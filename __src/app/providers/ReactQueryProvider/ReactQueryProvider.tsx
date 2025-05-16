import { LayoutType } from "@/shared/types";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./ReactQueryProvider.config";

export const ReactQueryProvider = ({ children }: LayoutType) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
