import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0px 0px;
    display: flex;
    justify-content: center;

    h2 {
      font-size: ${theme.font.sizes.medium};
      font-weight: 300;
    }
  `}
`;
