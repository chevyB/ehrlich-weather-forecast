import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const AuthProvider = ({ children, ...props }: any) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState: any) => {
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  const config = {
    domain: process.env.REACT_APP_AUTH0_DOMAIN ?? '',
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID ?? '',
    redirectUri: `${window.location.origin}/home` ?? '',
    onRedirectCallback,
  };
  return (
    <Auth0Provider {...config} {...props}>
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
