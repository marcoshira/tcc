import { useState } from 'react';
import * as Styled from './styles';

export type InputStakeProps = {
  onFormChangeStake?: (index: number) => void;
  reference?: HTMLInputElement;
};

export const InputStake = ({
  onFormChangeStake = null,
  reference = null,
}: InputStakeProps) => {
  const handleChange = (value: number) => {
    if (onFormChangeStake) {
      onFormChangeStake(value);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.SubTypeContainer>
        <div className="control-group">
          <div className="flex">
            <label className="control control-radio">
              Escavada em geral
              <input
                type="radio"
                name="stake"
                onClick={() => handleChange(1)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              Escavada bentonita
              <input
                type="radio"
                name="stake"
                onClick={() => handleChange(2)}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
          <div className="flex">
            <label className="control control-radio">
              Hélice contínua
              <input
                type="radio"
                name="stake"
                onClick={() => handleChange(3)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              Raiz
              <input
                type="radio"
                name="stake"
                onClick={() => handleChange(4)}
              />
              <div className="control_indicator"></div>
            </label>
          </div>

          <div className="flex">
            <label className="control control-radio">
              Injetada sob altas pressões
              <input
                type="radio"
                name="stake"
                onClick={() => handleChange(5)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              Franki
              <input
                type="radio"
                name="stake"
                onClick={() => handleChange(6)}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
          <div className="flex">
            <label className="control control-radio">
              Metálica
              <input
                type="radio"
                name="stake"
                onClick={() => handleChange(7)}
              />
              <div className="control_indicator"></div>
            </label>
            <label className="control control-radio">
              Pré-moldada
              <input
                type="radio"
                name="stake"
                onClick={() => handleChange(8)}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
        </div>
      </Styled.SubTypeContainer>
    </Styled.Wrapper>
  );
};
