import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { RestrictedRoute } from './ResctrictedRoute';
import { AppWrapper } from './App.styled';
import { refreshUser } from './redux/auth/operations';

import { useAuth } from './components/hooks/useAuth';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const WelcomePage = lazy(() =>
  import('./pages/UnAuthorizedUser/WelcomePage/WelcomePage')
);
const SignUpPage = lazy(() =>
  import('./pages/UnAuthorizedUser/SignUpPage/SignUpPage')
);
const SignInPage = lazy(() =>
  import('./pages/UnAuthorizedUser/SignInPage/SignInPage')
);
const ForgotPasswordPage = lazy(() =>
  import('./pages/UnAuthorizedUser/ForgotPasswordPage/ForgotPasswordPage')
);
const MainPage = lazy(() => import('./pages/Authorized/MainPage/MainPage'));
const DashboardPage = lazy(() =>
  import('./pages/Authorized/DashboardPage/DashboardPage')
);
const DiaryPage = lazy(() => import('./pages/Authorized/DiaryPage/DiaryPage'));
const RecommendedFoodPage = lazy(() =>
  import('./pages/Authorized/RecommendedFoodPage/RecommendedFoodPage')
);
const SettingsPage = lazy(() =>
  import('./pages/Authorized/SettingsPage/SettingsPage')
);

import ErrorPage from 'pages/ErrorPage/ErrorPage';

function App() {
  const dispatch = useDispatch();

  const { isSignedIn } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  console.log(isSignedIn);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />

          <Route
            path="welcome"
            element={
              <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
            }
          >
            Sign Up!
          </Route>
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/main" component={<SignInPage />} />
            }
          >
            Login
          </Route>
          <Route
            path="/forgot-password"
            element={
              <RestrictedRoute
                redirectTo="/signin"
                component={<ForgotPasswordPage />}
              />
            }
          ></Route>
          <Route
            path="/main"
            element={
              <PrivateRoute redirectTo="/signin" component={<MainPage />} />
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<DashboardPage />}
              />
            }
          ></Route>
          <Route
            path="/diary"
            element={
              <PrivateRoute redirectTo="/signin" element={<DiaryPage />} />
            }
          ></Route>
          <Route
            path="/recommended-food"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<RecommendedFoodPage />}
              />
            }
          ></Route>
          <Route
            path="/settings"
            element={
              <PrivateRoute redirectTo="/signin" component={<SettingsPage />} />
            }
          ></Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
