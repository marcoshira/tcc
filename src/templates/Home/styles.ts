import styled, { css } from 'styled-components';
import { Wrapper as Button } from './../../components/Button/styles';

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    ${Button} {
      margin-bottom: ${theme.spacings.medium};
    }
    @media ${theme.media.gteBig} {
      ${Button} {
        margin-bottom: ${theme.spacings.huge};
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;
