import Button from 'src/components/atoms/button';
import SearchIcon from 'src/components/atoms/icons/search';
import Template from 'src/components/templates/template';
import { useAuth0 } from '@auth0/auth0-react';

const HomePage = (): React.ReactElement => {
  const { user }: any = useAuth0();

  return (
    <Template>
      <div className="w-5/6 lg:w-1/2 items-center justify-center text-center mx-auto mt-[5%]">
        <p>{user?.name ?? ''}</p>
        <a
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          href={`https://github.com/${user?.nickname ?? ''}`}
          className="hover:text-sky-500"
        >
          https://github.com/{user?.nickname}
        </a>
        <div className="flex items-center justify-center mt-[50px] mb-[20px] w-full">
          <form>
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon />
              </span>
              <input
                type="search"
                name="q"
                className="w-[250px] lg:w-[350px] py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none"
                placeholder="City"
              />
            </div>
          </form>
        </div>
        <Button type="submit">Display Weather</Button>
      </div>
    </Template>
  );
};

export default HomePage;
