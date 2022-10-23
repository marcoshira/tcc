import * as Styled from './styles';

export type InputHeaderProps = {
  title?: string;
  onClick?: () => void;
};
export const InputHeader = ({ title, onClick }: InputHeaderProps) => {
  return (
    <Styled.Wrapper onClick={() => onClick()}>
      <h2>{title}</h2>
    </Styled.Wrapper>
  );
};
