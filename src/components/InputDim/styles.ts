import styled, { css } from 'styled-components';
import { Wrapper as NumberInput } from '../NumberInput/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large} 0 ${theme.spacings.medium};
    margin: ${theme.spacings.xsmall} 0 ${theme.spacings.medium};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `}
`;

export const NumberContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    ${NumberInput} {
      width: 100%;
      .unit {
        left: 98%;
        top: 10px;
        width: auto;
      }
      span {
        width: 60%;
      }
      input {
        width: 23%;
        height: 23px;
        margin-top: 10px;
      }
    }
    @media ${theme.media.gteMedium} {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;

      ${NumberInput} {
        width: 50%;
        .unit {
          left: 94%;
          top: 0px;
          width: auto;
        }
        span {
          width: 70%;
          font-size: ${theme.font.sizes.ltmedium};
        }
        input {
          width: 23%;
          height: 23px;
          margin-top: 0px;
        }
      }
    }
  `}
`;

export const RadioContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;

    .control-group {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }

    .control {
      display: flex;
      justify-content: end;
      position: relative;
      padding-left: 20px;
      margin-bottom: 5px;
      padding-top: 3px;
      cursor: pointer;
      font-size: ${theme.font.sizes.small};
    }
    .control input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    .control_indicator {
      position: absolute;
      top: 8px;
      left: 0px;
      height: 10px;
      width: 10px;
      background: #e6e6e7;
      border: 0px solid #000000;
    }
    .control:hover input ~ .control_indicator,
    .control input:focus ~ .control_indicator {
      background: #cccccc;
    }

    .control input:checked ~ .control_indicator {
      background: #0a1128;
    }
    .control:hover input:not([disabled]):checked ~ .control_indicator,
    .control input:checked:focus ~ .control_indicator {
      background: #0a1128;
    }
    .control input:disabled ~ .control_indicator {
      background: #e6e6e6;
      opacity: 0.6;
      pointer-events: none;
    }
    .control_indicator:after {
      box-sizing: unset;
      content: '';
      position: absolute;
      display: none;
    }
    .control input:checked ~ .control_indicator:after {
      display: block;
    }
    .control-radio .control_indicator {
      border-radius: 50%;
    }

    .control-radio .control_indicator:after {
      left: 7px;
      top: 7px;
      height: 0px;
      width: 0px;
      border-radius: 50%;
      background: #0a1128;
      transition: background 250ms;
    }
    .control-radio input:disabled ~ .control_indicator:after {
      background: #7b7b7b;
    }

    span {
      display: none;
    }

    @media ${theme.media.gteMedium} {
      justify-content: space-evenly;
      width: 80%;
      margin-bottom: ${theme.spacings.small};
      span {
        display: inline;
        font-size: ${theme.font.sizes.ltmedium};
      }

      .control-group {
        width: 60%;
      }

      .control {
        font-size: ${theme.font.sizes.gtsmall};
      }
    }
  `}
`;
