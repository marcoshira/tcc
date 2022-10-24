import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large} 0 ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media ${theme.media.gteMedium} {
      padding: 0 ${theme.spacings.medium} 0 ${theme.spacings.large};
      flex-direction: row;
      justify-content: space-around;
      /* width: 90%; */
      label:first-of-type {
        width: 28%;

        .unit {
          @media ${theme.media.gteMedium} {
            left: 89%;
            /* right: 8px; */
          }
        }
      }

      label:nth-of-type(2) {
        width: 33%;
      }

      label:nth-of-type(3) {
        width: 37%;
      }
    }
  `}
`;
