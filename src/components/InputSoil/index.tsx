import { useRef, useState } from 'react';
import * as Styled from './styles';

export type InputSoilProps = {
  onFormChangeSoil?: (soil: string) => void;
  reference?: HTMLInputElement;
};

export const InputSoil = ({
  onFormChangeSoil = null,
  reference = null,
}: InputSoilProps) => {
  const [firstRadio, setFirstRadio] = useState('Areia Comum');
  const [secondRadio, setSecondRadio] = useState('Areia Siltosa');
  const [thirdRadio, setThirdRadio] = useState('Areia Siltoargilosa');
  const [fourthRadio, setFourthRadio] = useState('Areia Argilosa');
  const [fifthRadio, setFifthRadio] = useState('Areia Argilossiltosa');

  const [selected, setSelected] = useState<number>();

  const [typeClass1, setTypeClass1] = useState(true);
  const [typeClass2, setTypeClass2] = useState(false);
  const [typeClass3, setTypeClass3] = useState(false);

  const HandleTypeClick = async (type) => {
    switch (type) {
      case 'Areia':
        setFirstRadio('Areia Comum');
        setSecondRadio('Areia Siltosa');
        setThirdRadio('Areia Siltoargilosa');
        setFourthRadio('Areia Argilosa');
        setFifthRadio('Areia Argilossiltosa');
        setTypeClass1(true);
        setTypeClass2(false);
        setTypeClass3(false);

        if (onFormChangeSoil) {
          switch (selected) {
            case 1:
              onFormChangeSoil('Areia Comum');
              break;
            case 2:
              onFormChangeSoil('Areia Siltosa');
              break;
            case 3:
              onFormChangeSoil('Areia Siltoargilosa');
              break;
            case 4:
              onFormChangeSoil('Areia Argilosa');
              break;
            case 5:
              onFormChangeSoil('Areia Argilossiltosa');
              break;
          }
        }
        break;
      case 'Silte':
        setFirstRadio('Silte Comum');
        setSecondRadio('Silte Arenoso');
        setThirdRadio('Silte Arenoargiloso');
        setFourthRadio('Silte Argiloso');
        setFifthRadio('Silte Argiloarenoso');
        setTypeClass1(false);
        setTypeClass2(true);
        setTypeClass3(false);
        if (onFormChangeSoil) {
          switch (selected) {
            case 1:
              onFormChangeSoil('Silte Comum');
              break;
            case 2:
              onFormChangeSoil('Silte Arenoso');
              break;
            case 3:
              onFormChangeSoil('Silte Arenoargiloso');
              break;
            case 4:
              onFormChangeSoil('Silte Argiloso');
              break;
            case 5:
              onFormChangeSoil('Silte Argiloarenoso');
              break;
          }
        }
        break;
      case 'Argila':
        setFirstRadio('Argila Comum');
        setSecondRadio('Argila Arenosa');
        setThirdRadio('Argila Arenossiltosa');
        setFourthRadio('Argila Siltosa');
        setFifthRadio('Argila Siltoarenosa');
        setTypeClass1(false);
        setTypeClass2(false);
        setTypeClass3(true);
        if (onFormChangeSoil) {
          switch (selected) {
            case 1:
              onFormChangeSoil('Argila Comum');
              break;
            case 2:
              onFormChangeSoil('Argila Arenosa');
              break;
            case 3:
              onFormChangeSoil('Argila Arenossiltosa');
              break;
            case 4:
              onFormChangeSoil('Argila Siltosa');
              break;
            case 5:
              onFormChangeSoil('Argila Siltoarenosa');
              break;
          }
        }
        break;
    }
  };

  const handleChange = (value: string, index: number) => {
    setSelected(index);
    if (onFormChangeSoil) {
      onFormChangeSoil(value);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.TypeContainer>
        <Styled.Type
          onClick={() => HandleTypeClick('Areia')}
          className={typeClass1 && 'selected'}
        >
          Areia
        </Styled.Type>
        <Styled.Type
          onClick={() => HandleTypeClick('Silte')}
          className={typeClass2 && 'selected'}
        >
          Silte
        </Styled.Type>
        <Styled.Type
          onClick={() => HandleTypeClick('Argila')}
          className={typeClass3 && 'selected'}
        >
          Argila
        </Styled.Type>
      </Styled.TypeContainer>
      <Styled.SubTypeContainer>
        <div className="control-group">
          <label className="control control-radio">
            {firstRadio}
            <input
              type="radio"
              name="soil"
              value={firstRadio}
              onClick={() => handleChange(firstRadio, 1)}
            />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {secondRadio}
            <input
              type="radio"
              name="soil"
              value={secondRadio}
              onClick={() => handleChange(secondRadio, 2)}
            />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {thirdRadio}
            <input
              type="radio"
              name="soil"
              value={thirdRadio}
              onClick={() => handleChange(thirdRadio, 3)}
            />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {fourthRadio}
            <input
              type="radio"
              name="soil"
              value={fourthRadio}
              onClick={() => handleChange(fourthRadio, 4)}
            />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {fifthRadio}
            <input
              type="radio"
              name="soil"
              value={fifthRadio}
              onClick={() => handleChange(fifthRadio, 5)}
            />
            <div className="control_indicator"></div>
          </label>
        </div>
      </Styled.SubTypeContainer>
    </Styled.Wrapper>
  );
};
