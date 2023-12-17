import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { globalColor } from '../../Header/root';

export const LogoLink = styled(NavLink)`
  color: ${globalColor.colorPrimaryGrey};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.375;

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;
