import styled, { css } from 'styled-components';
import { Wrapper as Number } from '../NumberInput/styles';

type svgDist = {
  svgLeft: string;
};

export const Wrapper = styled.div<svgDist>`
  ${({ theme, svgLeft }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    > div {
      position: relative;
      > svg {
        display: none;
        @media ${theme.media.gteMedium} {
          position: absolute;
          display: block;
          bottom: 50px;
          left: ${svgLeft};
          width: 25px;
          color: ${theme.colors.primaryColor};

          &:hover {
            color: ${theme.colors.orange};
          }
        }
      }
      &:hover {
        & .tooltiptext3 {
          visibility: visible;
          opacity: 1;
        }
      }
    }
    & .tooltiptext3 {
      display: none;
    }
    @media ${theme.media.gteMedium} {
      & .tooltiptext3 {
        display: block;
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
        bottom: -43px;
        left: 101.5%;

        position: absolute;
        z-index: 1;

        opacity: 0;
        transition: opacity 0.3s;

        text-align: center;
      }
      & .tooltiptext3::before {
        content: ' ';
        position: absolute;
        top: 26px;
        right: 100%;
        margin-top: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent gray transparent transparent;
      }
      & .tooltiptext3::after {
        content: ' ';
        position: absolute;
        top: 26px;
        right: 99.6%;
        margin-top: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent white transparent transparent;
      }
    }
  `}
`;

export const NsptContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media ${theme.media.gteMedium} {
      flex-direction: row;
    }
  `}
`;

export const NsptContainerMob = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: left;

    ${Number} {
      justify-content: center;
      width: 50%;

      input {
        width: 25%;
      }
    }
    @media ${theme.media.gteMedium} {
      width: 100%;
    }
  `}
`;
