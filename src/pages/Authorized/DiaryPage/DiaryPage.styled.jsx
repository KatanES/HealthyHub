import styled from 'styled-components';
import { device } from '../../../Device';

export const Container = styled.div`
  border: 2px color white;
  max-width: 320px;
  padding: 10px;
  display: flex;

  @media ${device.tablet} {
    max-width: 794px;
    padding: 20px;
  }

  @media ${device.desktop} {
    max-width: 1376px;
    padding: 32px;
  }
`;
