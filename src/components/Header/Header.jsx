// import { useState } from 'react';

import { useAuth } from '../hooks/useAuth';

import { Navigation } from '../NotAuthorizedUser/Navigation/Navigation';
import { UserInfoNav } from '../AuthorizedUser/UserInfoNav/UserInfoNav';
import { ControlPanel } from '../AuthorizedUser/ControlPanel/ControlPanel';
import { Logo } from '../AuthorizedUser/Logo/Logo';

import { HeaderContainer, HeaderContent } from './Header.styled';

export const Header = () => {
  const { isSignedIn } = useAuth();

  // const [isSignedIn] = useState(true);
  // const [isSignedIn] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        {isSignedIn ? (
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
