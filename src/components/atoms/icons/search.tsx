import type React from 'react';
import type { Iprops } from './types';

const SearchIcon = ({ stroke = 'currentColor' }: Iprops) => {
  return (
    <svg
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  );
};

export default SearchIcon;
