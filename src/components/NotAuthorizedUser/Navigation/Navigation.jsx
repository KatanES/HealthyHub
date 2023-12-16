import {
  NavLinkStyled,
  IconWrapper,
  WrapperNavigation,
} from './Navigation.styled';
import sprite from '../../../assets/sprite.svg';

export const Navigation = () => {
  return (
    <WrapperNavigation>
      <NavLinkStyled to="/signup">Sign up</NavLinkStyled>
      <NavLinkStyled to="/signin">/ Sign in</NavLinkStyled>
      <IconWrapper>
        <use href={sprite + '#icon-profile-circle'} />
      </IconWrapper>
    </WrapperNavigation>
  );
};
