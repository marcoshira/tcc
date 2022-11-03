import { createContext, ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';

type InputContextData = {
  inputSoil: string;
  inputStake: number;
  inputArea: string;
  inputPerimeter: string;
  inputLength: string;
  formSubmit: (
    soil: string,
    stake: number,
    area: string,
    peri: string,
    comp: string,
  ) => void;
};

type InputProviderProps = {
  children: ReactNode;
};

export const InputContext = createContext({} as InputContextData);

export function InputProvider({ children }: InputProviderProps) {
  const [inputSoil, setInputSoil] = useState('');
  const [inputStake, setInputStake] = useState<number>();
  const [inputArea, setInputArea] = useState('');
  const [inputPerimeter, setInputPerimeter] = useState('');
  const [inputLength, setInputLength] = useState('');

  function formSubmit(soil, stake, area, perimeter, length) {
    setInputSoil(soil);
    setInputStake(stake);
    setInputArea(area);
    setInputPerimeter(perimeter);
    setInputLength(length);
    // Router.push('/nspt');
  }

  return (
    <InputContext.Provider
      value={{
        inputArea,
        inputLength,
        inputPerimeter,
        inputSoil,
        inputStake,
        formSubmit,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}
