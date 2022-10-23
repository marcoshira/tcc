import { useState } from 'react';
import * as Styled from './styles';

// export type InputSoilProps = {
//   display?: boolean;
// };

export const InputStake = () => {
  return (
    <Styled.Wrapper>
      <Styled.SubTypeContainer>
        <div className="control-group">
          <div className="flex">
            <label className="control control-radio">
              Escavada em geral
              <input type="radio" name="stake" defaultChecked={true} />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              Escavada bentonita
              <input type="radio" name="stake" />
              <div className="control_indicator"></div>
            </label>
          </div>
          <div className="flex">
            <label className="control control-radio">
              Hélice contínua
              <input type="radio" name="stake" />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              Raiz
              <input type="radio" name="stake" />
              <div className="control_indicator"></div>
            </label>
          </div>

          <div className="flex">
            <label className="control control-radio">
              Injetada sob altas pressões
              <input type="radio" name="stake" />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              Franki
              <input type="radio" name="stake" />
              <div className="control_indicator"></div>
            </label>
          </div>
          <div className="flex">
            <label className="control control-radio">
              Metálica
              <input type="radio" name="stake" />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              Pré-moldada
              <input type="radio" name="stake" />
              <div className="control_indicator"></div>
            </label>
          </div>
        </div>
      </Styled.SubTypeContainer>
    </Styled.Wrapper>
  );
};
