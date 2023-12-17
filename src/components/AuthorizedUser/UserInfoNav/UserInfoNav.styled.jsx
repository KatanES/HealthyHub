import styled from 'styled-components';

import { globalColor } from '../../Header/root';

export const WrapperUserInfoNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Text = styled.p`
  display: block;
  margin: 0 6px 0 0;
`;

export const ImageHolder = styled.div`
  margin: 0 4px 0 0;
  width: 24px;
  height: 24px;
  overflow: hidden;
  border-radius: 28px;

  > img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;

export const IconAvatarWrapper = styled.svg`
  margin: 0;
  width: 24px;
  height: 24px;
  stroke: ${globalColor.colorPrimaryWhite};

  @media (min-width: 834px) {
    width: 28px;
    height: 28px;
  }
`;

export const UserInfoNavButton = styled.button`
  border: none;
  display: block;
  padding: 0;
  background: transparent;
`;

export const IconArrowWrapper = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${globalColor.colorPrimaryGreenLite};
`;
