import React from 'react';
import * as Styled from './styles';

export type InputMenuProps = {
  children: React.ReactNode;
  display?: boolean;
  size?: 'small' | 'medium' | 'mediumSmall' | 'big' | 'huge' | 'spt' | 'layer';
  depth?: number;
  layer?: number;
};
export const InputMenu = ({
  children,
  display = false,
  size = 'medium',
  depth = null,
  layer = null,
}: InputMenuProps) => {
  const open = display && 'open';
  const zero = depth === 0 && 'zero';

  const classes = `${open} ${zero}`;

  return (
    <Styled.Wrapper
      className={classes}
      aria-label="InputMenu"
      size={size}
      depth={depth}
      layer={layer}
    >
      {children}
    </Styled.Wrapper>
  );
};
