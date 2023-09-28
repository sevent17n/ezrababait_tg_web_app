"use client";


import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactNode } from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools  initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};
