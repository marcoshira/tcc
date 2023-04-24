import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 92%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media ${theme.media.gteMedium} {
      width: 85%;
      margin-top: ${theme.spacings.large};
    }
    @media ${theme.media.gteBig} {
      width: 60%;
    }
  `}
`;
