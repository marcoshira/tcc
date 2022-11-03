import { NumberInput } from '../NumberInput';
import * as Styled from './styles';

export type InputDimProps = {
  onFormChangeArea?: (area: string) => void;
  onFormChangeComp?: (comp: string) => void;
  onFormChangeShape?: (shape: number) => void;
};

export const InputDim = ({
  onFormChangeArea = null,
  onFormChangeComp = null,
  onFormChangeShape = null,
}: InputDimProps) => {
  return (
    <Styled.Wrapper>
      <Styled.NumberContainer>
        <NumberInput
          title="Diâmetro / Lado da Estaca"
          onInputChange={(val) => onFormChangeArea(val)}
          un="m"
        />
        <NumberInput
          title="Profundidade do Fuste"
          onInputChange={(val) => onFormChangeComp(val)}
          un="m"
        />
      </Styled.NumberContainer>
      <Styled.RadioContainer>
        <span>Formato da Estaca:</span>
        <div className="control-group">
          <label className="control control-radio">
            Circunferência
            <input
              type="radio"
              name="shape"
              value="circ"
              defaultChecked={true}
              onClick={() => onFormChangeShape(1)}
            />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            Quadrado
            <input
              type="radio"
              name="shape"
              value="quad"
              onClick={() => onFormChangeShape(2)}
            />
            <div className="control_indicator"></div>
          </label>
        </div>
      </Styled.RadioContainer>
    </Styled.Wrapper>
  );
};
