import { ReactNode, useState } from 'react';
import { InputHeader } from '../InputHeader';
import { InputMenu } from '../InputMenu';
import { Question } from '@styled-icons/evil/Question';
import * as Styled from './styles';

export type InputContainerProps = {
  children: ReactNode;
  title: string;
  frameSize?:
    | 'small'
    | 'medium'
    | 'mediumSmall'
    | 'big'
    | 'huge'
    | 'spt'
    | 'layer';
  depth?: number;
  layer?: number;
  red?: boolean;
  yellow?: boolean;
  errorMessage?: string;
  instruction?: string;
  alert?: string;
};
export const InputContainer = ({
  children,
  title,
  frameSize = 'medium',
  depth = null,
  layer = null,
  red = false,
  yellow = false,
  errorMessage = '',
  instruction = 'Coloque os dados necessários.',
  alert = 'Confira seus dados.',
}: InputContainerProps) => {
  const [display, setDisplay] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <Styled.Wrapper
      red={red && touched}
      yellow={yellow}
      onBlur={() => setTouched(true)}
      className="tooltip"
    >
      <div className="tooltip2">
        <Question />
        <span className="tooltiptext2">{instruction}</span>
      </div>
      {red && touched && <span className="tooltiptext">{errorMessage}</span>}
      {yellow && <span className="tooltiptext4">{alert}</span>}
      <InputHeader title={title} onClick={handleDisplay} />
      <InputMenu display={display} size={frameSize} depth={depth} layer={layer}>
        {children}
      </InputMenu>
    </Styled.Wrapper>
  );
};
