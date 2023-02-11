import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
  caption?: string;
};

export const Heading = ({
  children,
  as = 'h1',
  size = 'huge',
  uppercase = false,
  caption = null,
}: HeadingProps) => {
  return (
    <Styled.Title as={as} size={size} uppercase={uppercase}>
      {children}
      {caption && <p>{caption}</p>}
    </Styled.Title>
  );
};
