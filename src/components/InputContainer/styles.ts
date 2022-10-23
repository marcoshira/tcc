import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px 1px 9px ${theme.colors.primaryColor};
    border-radius: 7px;
    margin-bottom: ${theme.spacings.small};
    width: 100%;
    transition: ${theme.transitions.slowest};

    @media ${theme.media.gteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;
