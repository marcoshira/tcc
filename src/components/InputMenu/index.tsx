import React, { useState } from 'react';
import * as Styled from './styles';

export type InputMenuProps = {
  children: React.ReactNode;
  display?: boolean;
  size?: 'small' | 'medium' | 'mediumSmall' | 'big' | 'huge';
};
export const InputMenu = ({
  children,
  display = false,
  size = 'medium',
}: InputMenuProps) => {
  return (
    <Styled.Wrapper
      className={display ? 'open' : ''}
      aria-label="InputMenu"
      size={size}
    >
      {children}
    </Styled.Wrapper>
  );
};
