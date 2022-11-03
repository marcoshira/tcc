import styled, { css } from 'styled-components';

type BorderRed = {
  red?: boolean;
};

const redBorder = () => css`
  box-shadow: 0px 0px 5px red;
`;

export const Wrapper = styled.div<BorderRed>`
  ${({ theme, red }) => css`
    box-shadow: 0px 1px 9px ${theme.colors.primaryColor};
    border-radius: 7px;
    margin-bottom: ${theme.spacings.small};
    width: 100%;
    transition: ${theme.transitions.slowest};

    ${red && redBorder()}

    @media ${theme.media.gteMedium} {
      margin-bottom: ${theme.spacings.large};
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
      z-index: 1;

      opacity: 0;
      transition: opacity 0.3s;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    &.tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }

    &.tooltip .tooltiptext::after {
      content: ' ';
      position: absolute;
      top: 100%; /* At the bottom of the tooltip */
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: red transparent transparent transparent;
    }
  `}
`;
