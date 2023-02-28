import styled, { css } from 'styled-components';

type BorderRed = {
  red?: boolean;
  yellow?: boolean;
};

const redBorder = () => css`
  box-shadow: 0px 0px 5px red;
`;

const yellowBorder = () => css`
  box-shadow: 0px 0px 5px yellow;
`;

export const Wrapper = styled.div<BorderRed>`
  ${({ theme, red, yellow }) => css`
    box-shadow: 0px 1px 9px ${theme.colors.primaryColor};
    border-radius: 7px;
    margin-bottom: ${theme.spacings.small};
    width: 100%;
    transition: ${theme.transitions.slowest};

    ${red && redBorder()}

    @media ${theme.media.gteMedium} {
      margin-bottom: ${theme.spacings.large};
    }

    > div {
      > svg {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 32px;
        color: ${theme.colors.primaryColor};

        &:hover {
          color: ${theme.colors.orange};
        }
      }
      &:hover {
        & .tooltiptext2 {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    & .tooltiptext2 {
      visibility: hidden;
      width: 120px;
      background-color: transparent;
      color: gray;
      text-align: center;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid gray;
      /* height: 100%; */
      width: ${theme.frameSizes.small};
      top: 0px;
      left: 101.5%;

      position: absolute;
      z-index: 1;

      opacity: 0;
      transition: opacity 0.3s;

      text-align: center;
    }
    & .tooltiptext2::before {
      content: ' ';
      position: absolute;
      top: 26px;
      right: 100%;
      margin-top: -10px;
      border-width: 10px;
      border-style: solid;
      border-color: transparent gray transparent transparent;
    }
    & .tooltiptext2::after {
      content: ' ';
      position: absolute;
      top: 26px;
      right: 99.6%;
      margin-top: -10px;
      border-width: 10px;
      border-style: solid;
      border-color: transparent white transparent transparent;
    }

    /* Tooltip container */
    &.tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
    }

    /* Tooltip text */
    &.tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: red;
      color: white;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;
      border: 2px solid red;
      height: ${theme.spacings.large};
      width: 100%;
      bottom: 106%;
      left: 50%;
      margin-left: -50%; /* Use half of the width (120/2 = 60), to center the tooltip */

      /* Position the tooltip text - see examples below! */
      position: absolute;
      z-index: 2;

      opacity: 0;
      transition: opacity 0.3s;
    }

    &.tooltip .tooltiptext4 {
      visibility: hidden;
      width: 120px;
      background-color: #fff3ac;
      color: #856404;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;
      border: 2px solid #fff3ac;
      height: ${theme.spacings.large};
      width: 100%;
      bottom: 106%;
      left: 50%;
      margin-left: -50%; /* Use half of the width (120/2 = 60), to center the tooltip */

      /* Position the tooltip text - see examples below! */
      position: absolute;
      z-index: 1;

      opacity: 0;
      transition: opacity 0.3s;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    &.tooltip:hover .tooltiptext,
    &.tooltip:hover .tooltiptext4 {
      visibility: visible;
      opacity: 1;
    }

    &.tooltip .tooltiptext::after {
      content: ' ';
      position: absolute;
      top: 100%; /* At the bottom of the tooltip */
      left: 50%;
      margin-left: -9px;
      border-width: 9px;
      border-style: solid;
      border-color: red transparent transparent transparent;
    }

    &.tooltip .tooltiptext4::after {
      content: ' ';
      position: absolute;
      top: 100%; /* At the bottom of the tooltip */
      left: 50%;
      margin-left: -10px;
      border-width: 10px;
      border-style: solid;
      border-color: #fff3cd transparent transparent transparent;
    }
  `}
`;
