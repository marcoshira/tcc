import { ButtonHTMLAttributes, FormEvent } from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  color?: boolean;
  onClick?: (event: FormEvent) => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  disabled = false,
  onClick = null,
}: ButtonProps) => {
  const handleClick = (event) => {
    /* istanbul ignore else */
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Styled.Wrapper disabled={disabled} onClick={handleClick}>
      {children}
    </Styled.Wrapper>
  );
};
