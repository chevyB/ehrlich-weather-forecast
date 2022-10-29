/* eslint-disable @typescript-eslint/no-misused-promises */
import Button from 'src/components/atoms/button';
import { useAuth0 } from '@auth0/auth0-react';
import Template from 'src/components/templates/template';

const Root = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Template>
      <div className="w-5/6 lg:w-1/2 justify-center items-center mx-auto mt-[20%]">
        <p className="mb-12">
          Welcome to the weather forecast web application Please login with your
          Github user to use the application and view the weather in your city
        </p>
        <Button onClick={async () => await loginWithRedirect()}>Login</Button>
      </div>
    </Template>
  );
};

export default Root;
