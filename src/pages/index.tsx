import Button from 'src/components/atoms/button';

const Root = (): React.ReactElement => {
  return (
    <div className="w-5/6 lg:w-1/2 justify-center items-center mx-auto mt-[20%]">
      <p className="mb-12">
        Welcome to the weather forecast web application Please login with your
        Github user to use the application and view the weather in your city
      </p>
      <Button>Login</Button>
    </div>
  );
};

export default Root;
