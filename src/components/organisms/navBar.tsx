import type React from 'react';
import Button from '../atoms/button';
import Logo from '../atoms/icons/logo';

const NavBar = (): React.ReactElement => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <Logo />
          <h1 className="ml-2 text-sky-500">Weather Forecast</h1>
        </div>
        <Button> Logout </Button>
      </div>
    </nav>
  );
};

export default NavBar;
