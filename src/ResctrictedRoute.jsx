import { useAuth } from './components/hooks/useAuth';
export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/main',
}) => {
  const { isSignedIn } = useAuth();

  return isSignedIn ? <Navigate to={redirectTo} /> : Component;
};
