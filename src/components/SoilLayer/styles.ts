import styled, { css } from 'styled-components';
import { Wrapper as NumberInput } from '../NumberInput/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    svg {
      height: 30px;
      position: absolute;
      top: 20px;
      right: 25px;
      color: ${theme.colors.primaryColor};
      font-weight: 200;
      transition: ${theme.transitions.faster};
      display: none;

      &:hover {
        color: ${theme.colors.orange};
        cursor: pointer;
      }
    }

    &:last-of-type {
      svg {
        display: block;
      }
    }

    p {
      font-size: ${theme.font.sizes.ltmedium};
      text-align: center;
    }

    p.disclaimer {
      color: grey;
      font-size: ${theme.font.sizes.small};
      margin-top: 0;
    }

    ${NumberInput} {
      width: 80%;

      input {
        width: 28%;
        margin-right: 22px;
      }

      .unit {
        left: 93%;
      }
    }

    @media ${theme.media.gteMedium} {
      svg {
        height: 35px;
        position: absolute;
        top: 15px;
        right: 0;
        color: ${theme.colors.primaryColor};
        font-weight: 200;
        transition: ${theme.transitions.faster};

        &:hover {
          color: ${theme.colors.orange};
          cursor: pointer;
        }
      }

      border-bottom: 2px dotted ${theme.colors.primaryColor};
      &:last-of-type {
        border-bottom: none;
      }

      ${NumberInput} {
        width: 60%;

        input {
          width: 28%;
          margin-right: 22px;
        }

        .unit {
          left: 93%;
        }
      }
    }
  `}
`;
