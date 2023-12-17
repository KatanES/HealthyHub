// import Modal from 'react-modal';
import styled from 'styled-components';

import { globalColor } from '../../Header/root';

// export const CustomModal = styled(Modal)`
//   position: absolute;
//   top: 54px;
//   right: 10px;
//   width: 158px;
//   height: 104px;
//   padding: 0;
//   border: none;
//   border-radius: 24px;
//   background-color: ${globalColor.colorPrimaryBlack2};
//   box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);

//   @media (min-width: 834px) {
//     top: 80px;
//     right: 27px;
//   }

//   @media (min-width: 1440px) {
//     top: 80px;
//     right: 34px;
//   }
// `;

export const UserInfoModalButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
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

