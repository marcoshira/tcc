import styled, { css } from 'styled-components';

export const Wrapper = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
    position: relative;

    @media ${theme.media.gteMedium} {
      padding-right: 18px;
      width: 33%;
    }

    span {
      font-size: ${theme.font.sizes.gtsmall};
      text-align: center;
      /* position: absolute;
      top: 0px; */
    }

    .unit {
      color: gray;
      position: absolute;
      left: 97.5%;
      text-align: right;

      @media ${theme.media.gteMedium} {
        left: 90%;
        /* right: 8px; */
      }
    }

    input {
      border: none;
      border-bottom: 1px solid black;
      width: 17%;
      font-size: ${theme.font.sizes.gtsmall};
      text-align: right;
      margin-right: 10px;

      @media ${theme.media.gteMedium} {
        width: ${theme.spacings.xhuge};
      }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;

      @media ${theme.media.gteMedium} {
        margin-right: 5px;
      }
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }

    &.even {
      input {
        width: 55%;
      }
    }
  `}
`;
