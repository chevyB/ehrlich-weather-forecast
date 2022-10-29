import type { ReactNode } from 'react';

interface AppProps {
  children: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
}

const Button = ({ children, type = 'button', onClick }: AppProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-md px-5 py-2 mr-2 dark:bg-blue-600"
    >
      {children}
    </button>
  );
};

export default Button;
