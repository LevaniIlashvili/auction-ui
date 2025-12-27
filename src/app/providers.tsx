import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { SignalRProvider } from "./SignalRProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      refetchOnWindowFocus: true,
    },
  },
});

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <SignalRProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SignalRProvider>
  );
};
