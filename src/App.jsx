import { Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { RestrictedRoute } from './ResctrictedRoute';
import { AppWrapper } from './App.styled';
// import { refreshUser } from './redux/auth/operations';
// import { useAuth } from './components/hooks/useAuth';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import WelcomePage from './pages/UnAuthorizedUser/WelcomePage/WelcomePage';
import SignUpPage from './pages/UnAuthorizedUser/SignUpPage/SignUpPage';
import SignInPage from './pages/UnAuthorizedUser/SignInPage/SignInPage';
import ForgotPasswordPage from './pages/UnAuthorizedUser/ForgotPasswordPage/ForgotPasswordPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import MainPage from './pages/Authorized/MainPage/MainPage';
import DashboardPage from './pages/Authorized/DashboardPage/DashboardPage';
import DiaryPage from './pages/Authorized/DiaryPage/DiaryPage';
import RecommendedFoodPage from './pages/Authorized/RecommendedFoodPage/RecommendedFoodPage';
import SettingsPage from './pages/Authorized/SettingsPage/SettingsPage';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />}>
            Sign Up!
          </Route>
          <Route path="/signin" element={<SignInPage />}>
            Login
          </Route>
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          ></Route>
          <Route path="/main" element={<MainPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/diary" element={<DiaryPage />}></Route>
          <Route
            path="/recommended-food"
            element={<RecommendedFoodPage />}
          ></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
