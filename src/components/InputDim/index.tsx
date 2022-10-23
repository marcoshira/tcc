import { useState } from 'react';
import { NumberInput } from '../NumberInput';
import * as Styled from './styles';

export const InputDim = () => {
  const [area, setArea] = useState('');
  const [peri, setPeri] = useState('');
  const [comp, setComp] = useState('');

  return (
    <Styled.Wrapper>
      <NumberInput
        title="Área da Ponta"
        onInputChange={(val) => setArea(val)}
        value={area}
        un="m²"
      />
      <NumberInput
        title="Perímetro do Fuste"
        onInputChange={(val) => setPeri(val)}
        value={peri}
        un="m"
      />
      <NumberInput
        title="Comprimento do Fuste"
        onInputChange={(val) => setComp(val)}
        value={comp}
        un="m"
      />
    </Styled.Wrapper>
  );
};
