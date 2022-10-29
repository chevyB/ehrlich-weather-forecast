/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'src/routes';
import AuthProvider from './providers/Auth0';
import { WeatherProvider } from './providers/WeatherProvider';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <WeatherProvider>
          <Routes />
        </WeatherProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
