import { createContext, ReactElement, useContext, useState } from 'react';

const initialState = {
  weather: {},
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-empty-function
  setWeather: (state: any) => { },
};

const Context = createContext(initialState);

export function WeatherProvider({ children }: { children: ReactElement }) {
  const [weather, setWeather] = useState<object>({});

  const data = {
    weather,
    setWeather,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export function useWeatherProvider() {
  return useContext(Context);
}
