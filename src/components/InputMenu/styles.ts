import styled, { css } from 'styled-components';
import { InputMenuProps } from '.';

const frameSize = {
  small: (theme) => css`
    height: ${theme.frameSizes.ltxsmall};
    @media ${theme.media.gteMedium} {
      height: ${theme.frameSizes.xxsmall};
    }
  `,
  mediumSmall: (theme) => css`
    height: ${theme.frameSizes.small};
    @media ${theme.media.gteMedium} {
      height: ${theme.frameSizes.xxsmall};
    }
  `,
  medium: (theme) => css`
    height: ${theme.frameSizes.small};
    @media ${theme.media.gteMedium} {
      height: ${theme.frameSizes.ltxsmall};
    }
  `,
  big: (theme) => css`
    height: ${theme.frameSizes.gtsmall};
    @media ${theme.media.gteMedium} {
      height: ${theme.frameSizes.small};
    }
  `,
  huge: (theme) => css`
    height: ${theme.frameSizes.smallMedium};
    @media ${theme.media.gteMedium} {
      height: ${theme.frameSizes.gtsmall};
    }
  `,
};

export const Wrapper = styled.div<InputMenuProps>`
  ${({ theme, size }) => css`
    display: flex;
    justify-content: center;
    height: 0px;
    opacity: 0;

    transition: ${theme.transitions.faster};

    > div {
      display: none;
    }

    &.open {
      ${frameSize[size](theme)};
      opacity: 1;

      > div {
        display: flex;
      }
    }

    @media ${theme.media.gteMedium} {
      ${frameSize[size](theme)};
      opacity: 1;

      > div {
        display: flex;
      }
    }
  `}
`;
