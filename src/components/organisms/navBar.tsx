import type React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atoms/button';
import Logo from '../atoms/icons/logo';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = (): React.ReactElement => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <div className="flex items-center">
            <Logo />
            <h1 className="ml-2 text-sky-500">Weather Forecast</h1>
          </div>
        </Link>
        {isAuthenticated && (
          <Button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
