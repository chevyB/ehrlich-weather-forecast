import { Route, Routes } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import ErrorPage from 'src/components/templates/error';
import Root from 'src/pages';
import HomePage from 'src/pages/home';
import Logout from 'src/pages/logout';
import Weather from 'src/pages/weather';

const ProtectedRoute = ({ component, ...args }: any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/home" element={<ProtectedRoute component={HomePage} />} />
      <Route path="/weather" element={<ProtectedRoute component={Weather} />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}
