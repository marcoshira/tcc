import styled, { css } from 'styled-components';

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: ${theme.spacings.small} 0 ${theme.spacings.medium};

    p {
      margin: 0;
      font-size: 20px;
    }
    a {
      font-size: 18px;
      text-decoration: none;
    }

    @media ${theme.media.gteMedium} {
      padding: ${theme.spacings.small} 8% ${theme.spacings.large};
      flex-direction: row;
      justify-content: space-around;
    }
  `}
`;

export const DevContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

    @media ${theme.media.gteMedium} {
      margin-bottom: 0px;
      p {
        margin-bottom: 20px;
        font-size: 25px;
      }
      a {
        font-size: 25px;
      }
    }
  `}
`;

export const IconsContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      text-align: center;
    }
    svg {
      color: white;
      height: 40px;
    }
  `}
`;

export const IconsInnerContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
      color: white;
      height: 40px;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
    }
  `}
`;
