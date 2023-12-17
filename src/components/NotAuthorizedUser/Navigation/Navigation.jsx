import {
  NavLinkStyled,
  IconWrapper,
  WrapperNavigation,
} from './Navigation.styled';
import sprite from '../../../assets/sprite.svg';

export const Navigation = () => {
  return (
    <WrapperNavigation>
      <NavLinkStyled to="/signin">Sign in</NavLinkStyled>
      <span>/</span>
      <NavLinkStyled to="/signup">Sign up</NavLinkStyled>
      <IconWrapper>
        <use href={sprite + '#icon-profile-circle'} />
      </IconWrapper>
    </WrapperNavigation>
  );
};
