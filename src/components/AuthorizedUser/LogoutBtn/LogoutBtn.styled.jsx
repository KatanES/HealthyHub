import styled from 'styled-components';

import { globalColor } from '../../Header/root';

export const LogoutBtnButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  background: transparent;
`;

export const Text = styled.p`
  color: ${globalColor.colorPrimaryWhite};
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42857;
`;

export const IconWrapper = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${globalColor.colorPrimaryWhite};
`;
