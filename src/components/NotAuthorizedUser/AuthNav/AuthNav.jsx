import {
  WrapperNavigation,
  NavLinkStyledSignIn,
  NavLinkStyledSignUp,
} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapperNavigation>
      <NavLinkStyledSignIn to="/signin">Sign in</NavLinkStyledSignIn>
      <NavLinkStyledSignUp to="/signup">Sign up</NavLinkStyledSignUp>
    </WrapperNavigation>
  );
};
