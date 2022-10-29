import axios from 'axios';

const domain = process.env.REACT_APP_WEATHER_MAP_DOMAIN ?? '';

export const weatherApi = axios.create({
  baseURL: domain,
});
