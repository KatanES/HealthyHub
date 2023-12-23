import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { globalColor } from '../../Header/root';

export const WrapperNavigation = styled.div`
  margin: 0 0 40px 0;
  display: flex;
  gap: 16px;

  @media (min-width: 834px) {
    margin: 0 0 80px 0;
    align-items: center;
    justify-content: center;
  }
`;

export const NavLinkStyledSignIn = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  box-sizing: border-box;

  width: 142px;
  height: auto;
  padding: 8px 10px;
  text-align: center;
  border-radius: 12px;
  border: none;
  background: ${globalColor.colorPrimaryGreenLite};

  color: ${globalColor.colorPrimaryBlack2};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;

  transition: background-color 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    color: ${globalColor.colorPrimaryWhite};
    background-color: ${globalColor.colorPrimaryGreen};
  }

  @media (min-width: 834px) {
    width: 212px;
  }

  @media (max-width: 319px) {
    width: auto;
    height: auto;
  }
`;

export const NavLinkStyledSignUp = styled(NavLink)`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;

  width: 122px;
  height: auto;
  padding: 8px 10px;
  text-align: center;
  background: transparent;
  border: none;

  color: ${globalColor.colorPrimaryWhite};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;

  transition: color 0.3s ease;

  &:hover,
  &:active,
  &:focus {
    color: ${globalColor.colorPrimaryGreen};
  }
`;
