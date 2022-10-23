import styled, { css } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size ${theme.font.sizes.xlarge}
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, size, uppercase }) => css`
    color: white;
    margin: 0;
    margin-bottom: ${theme.spacings.small};
    padding: ${theme.spacings.large};
    background: ${theme.colors.primaryColor};
    text-align: center;
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
