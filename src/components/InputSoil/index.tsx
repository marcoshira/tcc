import { useRef, useState } from 'react';
import * as Styled from './styles';

export type InputSoilProps = {
  onFormChangeSoil?: ({}) => void;
  index?: number;
  reference?: HTMLInputElement;
};

export const InputSoil = ({
  onFormChangeSoil = null,
  reference = null,
  index = 0,
}: InputSoilProps) => {
  const [firstRadio, setFirstRadio] = useState('Areia Comum');
  const [secondRadio, setSecondRadio] = useState('Areia Siltosa');
  const [thirdRadio, setThirdRadio] = useState('Areia Siltoargilosa');
  const [fourthRadio, setFourthRadio] = useState('Areia Argilosa');
  const [fifthRadio, setFifthRadio] = useState('Areia Argilossiltosa');

  const [selected, setSelected] = useState<string>();

  const [type, setType] = useState('Areia');

  const [typeClass1, setTypeClass1] = useState(true);
  const [typeClass2, setTypeClass2] = useState(false);
  const [typeClass3, setTypeClass3] = useState(false);

  const HandleTypeClick = (event) => {
    setType(event.target.id);
    /* istanbul ignore else */
    if (onFormChangeSoil) {
      onFormChangeSoil({ type: event.target.id, subtype: selected });
    }

    switch (event.target.id) {
      case 'Areia':
        setFirstRadio('Areia Comum');
        setSecondRadio('Areia Siltosa');
        setThirdRadio('Areia Siltoargilosa');
        setFourthRadio('Areia Argilosa');
        setFifthRadio('Areia Argilossiltosa');
        setTypeClass1(true);
        setTypeClass2(false);
        setTypeClass3(false);
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
        break;
    }
  };

  const handleChange = (event) => {
    setSelected(event.target.id);
    /* istanbul ignore else */
    if (onFormChangeSoil) {
      onFormChangeSoil({ type: type, subtype: event.target.id });
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.TypeContainer>
        <Styled.Type
          onClick={HandleTypeClick}
          className={typeClass1 && 'selected'}
          id="Areia"
        >
          Areia
        </Styled.Type>
        <Styled.Type
          onClick={HandleTypeClick}
          className={typeClass2 && 'selected'}
          id="Silte"
        >
          Silte
        </Styled.Type>
        <Styled.Type
          onClick={HandleTypeClick}
          className={typeClass3 && 'selected'}
          id="Argila"
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
              name={`soil ${index}`}
              value={firstRadio}
              id="1"
              onClick={handleChange}
            />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {secondRadio}
            <input
              type="radio"
              name={`soil ${index}`}
              value={secondRadio}
              id="2"
              onClick={handleChange}
            />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {thirdRadio}
            <input
              type="radio"
              name={`soil ${index}`}
              value={thirdRadio}
              id="3"
              onClick={handleChange}
            />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {fourthRadio}
            <input
              type="radio"
              name={`soil ${index}`}
              value={fourthRadio}
              id="4"
              onClick={handleChange}
            />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {fifthRadio}
            <input
              type="radio"
              name={`soil ${index}`}
              value={fifthRadio}
              id="5"
              onClick={handleChange}
            />
            <div className="control_indicator"></div>
          </label>
        </div>
      </Styled.SubTypeContainer>
    </Styled.Wrapper>
  );
};
