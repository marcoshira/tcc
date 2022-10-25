import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.media.gteMedium} {
      padding-bottom: ${theme.spacings.medium};
    }

    h2 {
      font-size: ${theme.font.sizes.medium};
      font-weight: 300;
    }
  `}
`;
