import { Navigate } from 'react-router-dom';
import { useAuth } from './components/hooks/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isSignedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isSignedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
