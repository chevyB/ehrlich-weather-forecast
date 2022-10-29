/* eslint-disable @typescript-eslint/no-misused-promises */
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const Logout = (): React.ReactElement => {
  const { logout } = useAuth0();

  useEffect(() => {
    logout({ returnTo: window.location.origin });
  }, []);

  return (
    <>
      <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <p className="text-2xl font-semibold md:text-3xl">Logging out...</p>
            <p>Pls wait.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logout;
