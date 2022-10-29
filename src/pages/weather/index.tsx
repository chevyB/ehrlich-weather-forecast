import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/atoms/button';
import Template from 'src/components/templates/template';
import { useWeatherProvider } from 'src/providers/WeatherProvider';

const Weather = (): React.ReactElement => {
  const navigate = useNavigate();
  const { weather }: { weather: any } = useWeatherProvider();

  useEffect(() => {
    if (typeof weather === 'object' && Object.keys(weather).length === 0) {
      navigate('/home');
    }
  }, [weather]);

  return (
    <Template>
      <div className="w-5/6 lg:w-1/2 items-center justify-center text-center mx-auto mt-[5%]">
        <div className="grid grid-cols-2 lg:grid-cols-6 text-left">
          <div className="p-1 border border-gray-300">Date (mm/dd/yyyy)</div>
          <div className="p-1 border border-gray-300">Temp (F)</div>
          <div className="p-1 border border-gray-300 hidden lg:inline-flex">
            Description
          </div>
          <div className="p-1 border border-gray-300 hidden lg:inline-flex">
            Main
          </div>
          <div className="p-1 border border-gray-300 hidden lg:inline-flex">
            Pressure
          </div>
          <div className="p-1 border border-gray-300 hidden lg:inline-flex">
            Humidity
          </div>
          <div className="p-1 border border-gray-300">{weather.date}</div>
          <div className="p-1 border border-gray-300">{weather.temp}</div>
          <div className="p-1 border border-gray-300 hidden lg:inline-flex">
            {weather.description}
          </div>
          <div className="p-1 border border-gray-300 hidden lg:inline-flex">
            {weather.main}
          </div>
          <div className="p-1 border border-gray-300 hidden lg:inline-flex">
            {weather.pressure}
          </div>
          <div className="p-1 border border-gray-300 hidden lg:inline-flex">
            {weather.humidity}
          </div>
        </div>
        <div className="mt-[40px] flex justify-end">
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
      </div>
    </Template>
  );
};

export default Weather;
