import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from 'src/components/templates/error';
import Root from 'src/pages';
import HomePage from 'src/pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
    ],
  },
]);
