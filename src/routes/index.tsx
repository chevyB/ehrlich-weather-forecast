import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from 'src/components/templates/error';
import Root from 'src/pages';
import HomePage from 'src/pages/home';
import Weather from 'src/pages/weather';

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
      {
        path: 'weather',
        element: <Weather />,
      },
    ],
  },
]);
