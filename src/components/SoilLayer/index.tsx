import * as Styled from './styles';
import { Close } from '@styled-icons/evil/Close';
import { NumberInput } from '../NumberInput';
import { InputSoil } from '../InputSoil';

export type SoilLayerProps = {
  index?: number;
  onLayerFormChangeSoil?: (soil, index: number) => void;
  onLayerFormChangeDepth?: (depthSoil: string, index: number) => void;
  onRemoveLayer?: () => void;
};
export const SoilLayer = ({
  index = 0,
  onLayerFormChangeDepth = null,
  onLayerFormChangeSoil = null,
  onRemoveLayer = null,
}: SoilLayerProps) => {
  const HandleClose = () => {
    /* istanbul ignore else */
    if (onRemoveLayer) {
      onRemoveLayer();
    }
  };

  return (
    <Styled.SoilLayerWrapper>
      <Close aria-label="CloseLayer" onClick={HandleClose} />
      <p>{`Camada ${index + 1}`}</p>
      {index === 0 && (
        <p className="disclaimer">
          *Desconsidere o primeiro metro da primeira camada
        </p>
      )}
      <NumberInput
        title="Profundidade: "
        placeholder="0"
        onInputChange={(val) => onLayerFormChangeDepth(val, index)}
      />
      <InputSoil
        onFormChangeSoil={(val) => onLayerFormChangeSoil(val, index)}
        index={index}
      />
    </Styled.SoilLayerWrapper>
  );
};
