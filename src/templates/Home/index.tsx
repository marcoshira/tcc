import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { InputContainer } from '../../components/InputContainer';
import { InputDim } from '../../components/InputDim';
import { InputSoil } from '../../components/InputSoil';
import { InputStake } from '../../components/InputStake';
import { Wrapper } from '../../components/Wrapper';
import * as Styled from './styles';

export type HomeProps = {
  onFormSubmit?: (
    soil: string,
    stake: number,
    area: string,
    peri: string,
    comp: string,
  ) => void;
};

export function Home({ onFormSubmit = null }: HomeProps) {
  const [formSoil, setFormSoil] = useState('');
  const [formStake, setFormStake] = useState();
  const [formArea, setFormArea] = useState('');
  const [formPeri, setFormPeri] = useState('');
  const [formComp, setFormComp] = useState('');

  const handleSoil = (soil) => {
    setFormSoil(soil);
  };

  const handleStake = (stake) => {
    setFormStake(stake);
  };

  const handleArea = (area) => {
    setFormArea(area);
  };

  const handlePeri = (Peri) => {
    setFormPeri(Peri);
  };

  const handleComp = (Comp) => {
    setFormComp(Comp);
  };

  const handleClick = () => {
    /* istanbul ignore else */
    if (onFormSubmit) {
      onFormSubmit(formSoil, formStake, formArea, formPeri, formComp);
    }
  };

  let disabled = false;

  if (formArea && formPeri && formComp) {
    disabled = true;
  }

  return (
    <Styled.Wrapper>
      <Heading>Estaca Web</Heading>
      <Wrapper>
        <InputContainer title="Tipo de Solo" frameSize="medium">
          <InputSoil onFormChangeSoil={handleSoil} />
        </InputContainer>
        <InputContainer title="Tipo de Estaca" frameSize="mediumSmall">
          <InputStake onFormChangeStake={handleStake} />
        </InputContainer>
        <InputContainer title="Dimensões da Estaca" frameSize="small">
          <InputDim
            onFormChangeArea={handleArea}
            onFormChangePeri={handlePeri}
            onFormChangeComp={handleComp}
          />
        </InputContainer>
        <Link href="/nspt">
          <Button
            disabled={
              formSoil && formStake && formArea && formPeri && formComp
                ? false
                : true
            }
            onClick={handleClick}
          >
            Inserir Dados de Nspt
          </Button>
        </Link>
      </Wrapper>
    </Styled.Wrapper>
  );
}
