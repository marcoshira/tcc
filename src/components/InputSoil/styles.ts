import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 80%;
    flex-direction: column;
    justify-content: center;
  `}
`;

export const TypeContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${theme.media.gteMedium} {
      justify-content: space-around;
    }
  `}
`;

export const Type = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-size: ${theme.font.sizes.ltmedium};

    transition: ${theme.transitions.fast};

    &.selected {
      color: ${theme.colors.yellow};
    }

    &:hover {
      color: ${theme.colors.orange};
      cursor: pointer;
    }
  `}
`;

export const SubTypeContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

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

    @media ${theme.media.gteMedium} {
      .control-group {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }

      .control {
        display: flex;
        justify-content: end;
        position: relative;

        margin-bottom: 5px;
        padding-top: 3px;
        cursor: pointer;
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;
