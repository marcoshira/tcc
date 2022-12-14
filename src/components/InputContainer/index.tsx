import { ReactNode, useState } from 'react';
import { InputHeader } from '../InputHeader';
import { InputMenu } from '../InputMenu';
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
  errorMessage?: string;
};
export const InputContainer = ({
  children,
  title,
  frameSize = 'medium',
  depth = null,
  layer = null,
  red = false,
  errorMessage = '',
}: InputContainerProps) => {
  const [display, setDisplay] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <Styled.Wrapper
      red={red && touched}
      onBlur={() => setTouched(true)}
      className="tooltip"
    >
      {red && touched && <span className="tooltiptext">{errorMessage}</span>}
      <InputHeader title={title} onClick={handleDisplay} />
      <InputMenu display={display} size={frameSize} depth={depth} layer={layer}>
        {children}
      </InputMenu>
    </Styled.Wrapper>
  );
};
