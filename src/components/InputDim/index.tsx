import { useState } from 'react';
import { NumberInput } from '../NumberInput';
import * as Styled from './styles';

export type InputDimProps = {
  onFormChangeArea?: (area: string) => void;
  onFormChangePeri?: (peri: string) => void;
  onFormChangeComp?: (comp: string) => void;
};

export const InputDim = ({
  onFormChangeArea = null,
  onFormChangePeri = null,
  onFormChangeComp = null,
}: InputDimProps) => {
  // const [area, setArea] = useState('');
  // const [peri, setPeri] = useState('');
  // const [comp, setComp] = useState('');

  // const handleChange = () => {
  //   /* istanbul ignore else */
  //   if (onFormChange) {
  //     onFormChange(area, peri, comp);
  //   }
  // };

  return (
    <Styled.Wrapper>
      <NumberInput
        title="Área da Ponta"
        onInputChange={(val) => onFormChangeArea(val)}
        un="m²"
      />
      <NumberInput
        title="Perímetro do Fuste"
        onInputChange={(val) => onFormChangePeri(val)}
        un="m"
      />
      <NumberInput
        title="Comprimento do Fuste"
        onInputChange={(val) => onFormChangeComp(val)}
        un="m"
      />
    </Styled.Wrapper>
  );
};
