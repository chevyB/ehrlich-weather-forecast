import { useQuery } from 'react-query';

export const getTest = (): any => {
  return useQuery(
    'test',
    async () =>
      await fetch('https://api.publicapis.org/entries').then(
        async res => await res.json()
      )
  );
};
