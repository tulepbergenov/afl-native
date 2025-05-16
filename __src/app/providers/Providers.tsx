import { LayoutType } from "@/shared/types";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const Providers = ({ children }: LayoutType) => {
  return (
    <ReactQueryProvider>
      <>{children}</>
    </ReactQueryProvider>
  );
};
