import { FC, useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
//import Layout from '@components/Layout';
import { globalStyles } from "../stitches.config";

const MyApp: FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      })
  );
  globalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
