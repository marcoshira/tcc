import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 92%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);

    @media ${theme.media.gteMedium} {
      width: 85%;
      margin-top: ${theme.spacings.huge};
    }
    @media ${theme.media.gteBig} {
      width: 60%;
      margin-top: ${theme.spacings.huge};
    }
  `}
`;
