import Button from 'src/components/atoms/button';
import SearchIcon from 'src/components/atoms/icons/search';

const HomePage = (): React.ReactElement => {
  return (
    <div className="w-5/6 lg:w-1/2 items-center justify-center text-center mx-auto mt-[5%]">
      <p>John Smith</p>
      <a href="https://github.com/smithjohn" className="hover:text-sky-500">
        https://github.com/smithjohn
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
  );
};

export default HomePage;
