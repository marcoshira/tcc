import * as Styled from './styles';
import { useRef, InputHTMLAttributes } from 'react';

export type NumberInputProps = {
  title?: string;
  onInputChange?: (value: string) => void;
  value?: string;
  reference?: HTMLInputElement;
  un?: string;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;
export const NumberInput = ({
  title,
  onInputChange = null,
  value = '',
  reference = null,
  un = 'm',
  placeholder = '0.00',
}: NumberInputProps) => {
  const inputRef = useRef(reference);

  const handleChange = () => {
    const value = inputRef.current.value;
    /* istanbul ignore else */
    if (onInputChange) {
      onInputChange(value);
    }
  };

  return (
    <Styled.Wrapper>
      <span>{title}</span>
      <input
        type="number"
        name="price"
        pattern="[0-9]+([.][0-9]+)?"
        step="0.01"
        title="This should be a number with up to 2 decimal places"
        placeholder={placeholder}
        ref={inputRef}
        defaultValue={value}
        onChange={handleChange}
      />
      <span className="unit">{un}</span>
    </Styled.Wrapper>
  );
};
