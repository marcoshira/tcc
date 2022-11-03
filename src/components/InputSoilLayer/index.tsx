import { NumberInput } from '../NumberInput';
import * as Styled from './styles';
import { useState } from 'react';
import { InputSoil } from '../InputSoil';
import { Button } from '../Button';
import { Close } from '@styled-icons/evil/Close';
import { SoilLayer } from '../SoilLayer';
import { formSoilType } from '../../templates/Home';

export type InputSoilLayerProps = {
  depth?: number;
  layer?: number;
  onFormChangeSoilLayer?: ({}, index: number) => void;
  onFormChangeDepthSoilLayer?: (soil: string, index: number) => void;
  onAddLayer?: () => void;
  onRemoveLayer?: () => void;
  disabled?: boolean;
};
export const InputSoilLayer = ({
  depth = null,
  layer = 0,
  onFormChangeSoilLayer = null,
  onFormChangeDepthSoilLayer = null,
  onAddLayer = null,
  onRemoveLayer = null,
  disabled = false,
}: InputSoilLayerProps) => {
  const HandleClick = () => {
    /* istanbul ignore else */
    if (onAddLayer) {
      onAddLayer();
    }
  };

  const HandleClose = () => {
    /* istanbul ignore else */
    if (onRemoveLayer) {
      onRemoveLayer();
    }
  };

  return (
    <Styled.Wrapper>
      {[...Array(layer)].map((el, index) => (
        <SoilLayer
          depth={depth}
          index={index}
          key={index}
          onRemoveLayer={HandleClose}
          onLayerFormChangeSoil={onFormChangeSoilLayer}
          onLayerFormChangeDepth={onFormChangeDepthSoilLayer}
        />
      ))}
      <Button disabled={disabled} onClick={HandleClick}>
        Adicionar Camada
      </Button>
    </Styled.Wrapper>
  );
};
