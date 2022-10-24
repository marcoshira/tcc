import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    background: ${theme.colors.primaryColor};
    border-radius: 7px;
    box-shadow: 0px 1px 9px ${theme.colors.primaryColor};
    font-size: ${theme.font.sizes.ltmedium};
    font-weight: 500;
    margin-bottom: 4px;
    transition: ${theme.transitions.faster};

    &:disabled {
      background: ${theme.colors.grey};
      color: ${theme.colors.white};
      border: 2px solid ${theme.colors.grey};
      transition: none;

      &:hover {
        background: ${theme.colors.grey};
        color: ${theme.colors.white};
        border: 2px solid ${theme.colors.grey};
        cursor: not-allowed;
      }
    }
    &:hover {
      cursor: pointer;
      background: inherit;
      color: ${theme.colors.primaryColor};
    }

    @media ${theme.media.gteMedium} {
      /* width: 33%; */
    }
  `}
`;
