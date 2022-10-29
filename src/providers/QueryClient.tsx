import { QueryClient, QueryClientProvider } from 'react-query';

const config = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const QueryProvider = (props: any) => (
  <QueryClientProvider client={config} {...props} />
);

export default QueryProvider;
