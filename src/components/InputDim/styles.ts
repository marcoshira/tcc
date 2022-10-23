import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.medium} 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${theme.media.gteMedium} {
      flex-direction: row;
      justify-content: space-around;
      /* width: 90%; */
    }

    label:first-of-type {
      width: 26%;
    }

    label:nth-of-type(2) {
      width: 31%;
    }
  `}
`;
