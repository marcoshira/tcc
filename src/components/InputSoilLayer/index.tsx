import * as Styled from './styles';
import { Button } from '../Button';
import { SoilLayer } from '../SoilLayer';

export type InputSoilLayerProps = {
  layer?: number;
  onFormChangeSoilLayer?: (soil, index: number) => void;
  onFormChangeDepthSoilLayer?: (soil: string, index: number) => void;
  onAddLayer?: () => void;
  onRemoveLayer?: () => void;
  disabled?: boolean;
};
export const InputSoilLayer = ({
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
    <Styled.InputSoilLayerWrapper>
      {[...Array(layer)].map((el, index) => (
        <SoilLayer
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
    </Styled.InputSoilLayerWrapper>
  );
};
