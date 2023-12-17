import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { globalColor } from '../../Header/root';

export const WrapperNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  margin-left: auto;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${globalColor.colorPrimaryWhite};
  font-size: 12px;
  line-height: 1.33;
  text-align: right;

  &.active {
    color: ${globalColor.colorPrimaryGreenLite};
  }

  @media (min-width: 834px) {
    font-size: 14px;
    line-height: 1.42857;
  }
`;

export const IconWrapper = styled.svg`
  width: 26px;
  height: 26px;
  margin: 0;

  stroke: ${globalColor.colorPrimaryWhite};

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;
