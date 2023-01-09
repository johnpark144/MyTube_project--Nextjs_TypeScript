import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store/store";
import { ThemeProvider } from "next-themes";

function Provider({ children }: ProviderProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnMount: false,
      },
    },
  });

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default Provider;
