import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsSignedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

export const useAuth = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isSignedIn,
    isRefreshing,
    user,
  };
};
