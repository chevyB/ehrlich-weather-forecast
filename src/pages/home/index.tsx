import Button from 'src/components/atoms/button';
import SearchIcon from 'src/components/atoms/icons/search';
import Template from 'src/components/templates/template';
import { useAuth0 } from '@auth0/auth0-react';
import { useForm } from '@mantine/form';
import { useWeatherProvider } from 'src/providers/WeatherProvider';
import { weatherApi } from 'src/api/axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const HomePage = (): React.ReactElement => {
  const navigate = useNavigate();
  const key = process.env.REACT_APP_WEATHER_MAP_APPID ?? '';
  const { setWeather } = useWeatherProvider();
  const { user }: any = useAuth0();
  const [fetching, setFetching] = useState(false);
  const [city, setCity] = useState<string>('');

  const form = useForm({
    initialValues: {
      city: '',
    },
    validate: {
      city: (value: any): any => (!value ? 'Please input valid city' : null),
    },
  });

  const formSubmit = (values: { city: string }) => {
    setCity(values.city);
  };

  const getWeather = async () => {
    setFetching(true);
    try {
      const { data } = await weatherApi.get('/geo/1.0/direct', {
        params: {
          q: city,
          limit: 1,
          appid: key,
        },
      });

      if (!data.length || data.cod === '400') {
        form.setErrors({ city: 'Please input valid city' });
        setFetching(false);
      }

      const { data: weather } = await weatherApi.get('/data/2.5/weather', {
        params: {
          lat: data[0].lat,
          lon: data[0].lon,
          appid: key,
          exclude: 'minute,hourly,daily,alerts',
        },
      });

      setWeather({
        date: moment().format('MM/DD/YYYY'),
        temp: weather.main.temp,
        description: weather.weather[0].description,
        main: weather.weather[0].main,
        pressure: weather.main.pressure,
        humidity: weather.main.humidity,
      });

      navigate('/weather');
    } catch (error) {
      form.setErrors({ city: 'Please input valid city' });
      setFetching(false);
    }
  };

  useEffect(() => {
    if (city.length) {
      getWeather();
    }
  }, [city]);

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
        <form onSubmit={form.onSubmit(formSubmit)}>
          <div className="flex flex-col items-center justify-center mt-[50px] mb-[20px] w-full">
            <div className="relative text-gray-600 focus-within:text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon />
              </span>
              <input
                type="search"
                name="q"
                className="w-[250px] lg:w-[350px] py-2 text-sm text-white bg-gray-900 rounded-md pl-10 "
                placeholder="City"
                {...form.getInputProps('city')}
              />
            </div>
            <div>
              {form.errors.city && (
                <div className="text-red-500 text-left">
                  Please input valid city
                </div>
              )}
              {fetching && <div className="text-left">Fetching data ...</div>}
            </div>
          </div>
          <Button type="submit">Display Weather</Button>
        </form>
      </div>
    </Template>
  );
};

export default HomePage;
