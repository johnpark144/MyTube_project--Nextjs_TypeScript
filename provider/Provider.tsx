// 다크모드, 리액트, 쿼리리덕스
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store/store";
import { ThemeProvider } from "next-themes";

function Provider({ children }: ProviderProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true, // stale 상태일 경우 윈도우 포커싱 될 때 마다 refetch
        refetchOnMount: false, //  stale 상태일 경우 마운트 시 마다 refetch
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
