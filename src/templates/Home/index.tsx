import * as Styled from './styles';
import { CloneMe } from '../../components/CloneMe';

export function Home() {
  return (
    <Styled.Wrapper>
      <CloneMe text="Clone me" />
    </Styled.Wrapper>
  );
}
