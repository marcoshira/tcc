import styled, { css } from 'styled-components';
import { Wrapper as Number } from '../NumberInput/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;

export const NsptContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media ${theme.media.gteMedium} {
      flex-direction: row;
    }
  `}
`;

export const NsptContainerMob = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: left;

    ${Number} {
      justify-content: center;
      width: 50%;

      input {
        width: 25%;
      }
    }
    @media ${theme.media.gteMedium} {
      width: 100%;
    }
  `}
`;
