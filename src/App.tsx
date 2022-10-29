import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { router } from './routes';
import { queryClient } from './configs/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';

function App(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<div>loading</div>} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
