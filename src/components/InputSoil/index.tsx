import { useState } from 'react';
import * as Styled from './styles';

// export type InputSoilProps = {
//   display?: boolean;
// };

export const InputSoil = () => {
  const [firstRadio, setFirstRadio] = useState('Areia Comum');
  const [secondRadio, setSecondRadio] = useState('Areia Siltosa');
  const [thirdRadio, setThirdRadio] = useState('Areia Siltoargilosa');
  const [fourthRadio, setFourthRadio] = useState('Areia Argilosa');
  const [fifthRadio, setFifthRadio] = useState('Areia Argilossiltosa');

  const [typeClass1, setTypeClass1] = useState(true);
  const [typeClass2, setTypeClass2] = useState(false);
  const [typeClass3, setTypeClass3] = useState(false);

  const HandleTypeClick = (type) => {
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
            <input type="radio" name="soil" defaultChecked={true} />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {secondRadio}
            <input type="radio" name="soil" />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {thirdRadio}
            <input type="radio" name="soil" />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {fourthRadio}
            <input type="radio" name="soil" />
            <div className="control_indicator"></div>
          </label>
          <label className="control control-radio">
            {fifthRadio}
            <input type="radio" name="soil" />
            <div className="control_indicator"></div>
          </label>
        </div>
      </Styled.SubTypeContainer>
    </Styled.Wrapper>
  );
};
