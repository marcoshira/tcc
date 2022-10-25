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

  spt: (theme, depth) => css`
    height: ${depth < 6
      ? theme.frameSizes.xsmall
      : depth < 8
      ? theme.frameSizes.ltsmall
      : depth < 10
      ? theme.frameSizes.small
      : `${(depth - 10) * 2.5 + 26}rem`};
    @media ${theme.media.gteMedium} {
      height: ${`${(Math.floor(depth / 4) + 1) * 6}rem`};
    }
  `,
};

export const Wrapper = styled.div<InputMenuProps>`
  ${({ theme, size, depth }) => css`
    display: flex;
    justify-content: center;
    height: 0px;
    opacity: 0;

    transition: ${theme.transitions.faster};

    > div {
      display: none;
    }

    &.open {
      ${frameSize[size](theme, depth)};
      opacity: 1;

      > div {
        display: flex;
      }
    }

    &.zero {
      height: 0px;
      opacity: 0;
    }

    @media ${theme.media.gteMedium} {
      ${frameSize[size](theme, depth)};
      opacity: 1;

      > div {
        display: flex;
      }
    }
  `}
`;
