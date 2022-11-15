import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.large} 0;

    @media ${theme.media.gteMedium} {
      flex-direction: row;
      padding: ${theme.spacings.xlarge} ${theme.spacings.medium};
      height: auto;
      width: auto;
      margin-bottom: ${theme.spacings.huge};
    }
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    ${Title} {
      padding: 0;
      margin: ${theme.spacings.small};
    }

    p {
      margin: ${theme.spacings.small};
      text-align: start;
    }

    @media ${theme.media.gteMedium} {
      width: ${theme.frameSizes.gtmedium};
      margin-bottom: 0;

      p {
        margin: ${theme.spacings.small};
        text-align: center;
      }

      &:first-of-type {
        /* margin-right: ${theme.spacings.large}; */
        margin-bottom: 0;
        border-right: 2px solid white;
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background: ${theme.colors.white};
    color: ${theme.colors.navy};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${theme.transitions.fast};
    cursor: pointer;
    > svg {
      width: 3rem;
      height: 3rem;
      border: 1px solid ${theme.colors.primaryColor};
    }

    &:hover {
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      > svg {
        border: 2px solid ${theme.colors.white};
      }
    }
  `}
`;

export const Disclaimer = styled.p`
  ${({ theme }) => css`
    color: grey;
    text-align: center;
    margin-top: 0;

    @media ${theme.media.gteMedium} {
      position: absolute;
      bottom: 2px;
      width: 80%;
    }
  `}
`;
