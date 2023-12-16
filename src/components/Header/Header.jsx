// import { useSelector } from 'react-redux';
//import selectLoginStatus from selector;

import { Navigation } from '../NotAuthorizedUser/Navigation/Navigation';
import { UserInfoNav } from '../AuthorizedUser/UserInfoNav/UserInfoNav';
import { ControlPanel } from '../AuthorizedUser/ControlPanel/ControlPanel';

import { HeaderContainer, HeaderContent } from './Header.styled';
import { Logo } from '../AuthorizedUser/Logo/Logo';
import { useState } from 'react';

export const Header = () => {
  // const isLogin = useSelector("there must be selector selectLoginStatus");

  const [isLogin] = useState(true);

  return (
    <HeaderContainer>
      <HeaderContent>
        {isLogin ? (
          <>
            <Logo link="/main">HealthyHub</Logo>
            <ControlPanel />
            <UserInfoNav />
          </>
        ) : (
          <>
            <Logo link="/welcome">HealthyHub</Logo>
            <Navigation />
          </>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};
