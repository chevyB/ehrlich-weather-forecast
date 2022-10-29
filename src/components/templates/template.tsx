import type React from 'react';
import NavBar from '../organisms/navBar';

interface AppProps {
  children: React.ReactElement;
}

const Template = ({ children }: AppProps): React.ReactElement => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      {children}
    </div>
  );
};

export default Template;
