import { ReactNode, useState } from 'react';
import { InputHeader } from '../InputHeader';
import { InputMenu } from '../InputMenu';
import * as Styled from './styles';

export type InputContainerProps = {
  children: ReactNode;
  title: string;
  frameSize?: 'small' | 'medium' | 'mediumSmall' | 'big' | 'huge';
};
export const InputContainer = ({
  children,
  title,
  frameSize = 'medium',
}: InputContainerProps) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <Styled.Wrapper>
      <InputHeader title={title} onClick={handleDisplay} />
      <InputMenu display={display} size={frameSize}>
        {children}
      </InputMenu>
    </Styled.Wrapper>
  );
};
