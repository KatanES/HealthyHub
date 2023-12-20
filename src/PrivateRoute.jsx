import { Navigate } from 'react-router-dom';
import { useAuth } from './components/hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isSignedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isSignedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
