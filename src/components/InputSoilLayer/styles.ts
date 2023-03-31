import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../Button/styles';

export const InputSoilLayerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
    height: 100%;

    ${Button} {
      color: ${theme.colors.primaryColor};
      background: transparent;
      border-radius: 0;
      border: none;
      box-shadow: none;
      margin-top: 0px;
      position: relative;
      padding: ${theme.spacings.xsmall};
      font-family: ${theme.font.family.default};

      &:hover {
        color: ${theme.colors.orange};
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0.2rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: ${theme.colors.orange};
        transition: all 200ms ease-in-out;
      }
      &:hover::after {
        left: 25%;
        width: 50%;
      }

      &:disabled {
        color: ${theme.colors.grey};
        background: transparent;
        border: none;
        transition: none;
        &:hover {
          color: ${theme.colors.grey};
          background: transparent;
          cursor: not-allowed;
        }
        &::after {
          content: none;
        }
      }
    }

    @media ${theme.media.gteMedium} {
      width: 85%;
      padding-top: 5rem;

      ${Button} {
        width: 30%;
      }
    }

    @media ${theme.media.gteBig} {
      ${Button} {
        width: 30%;
      }
    }
  `}
`;
