import { NumberInput } from '../NumberInput';
import * as Styled from './styles';

export type NsptInputProps = {
  depth?: number;
};
export const NsptInput = ({ depth }: NsptInputProps) => {
  return (
    <Styled.Wrapper>
      {[...Array(Math.floor(depth / 4) + 1)].map((el, index) => (
        <Styled.NsptContainer key={index}>
          <Styled.NsptContainerMob>
            {depth > index * 4 - 1 && (
              <NumberInput
                placeholder="0"
                title={`Nspt a ${index * 4 + 1}m: `}
                un=""
              />
            )}
            {depth > index * 4 && (
              <NumberInput
                placeholder="0"
                title={`Nspt a ${index * 4 + 2}m: `}
                un=""
              />
            )}
          </Styled.NsptContainerMob>
          <Styled.NsptContainerMob>
            {depth > index * 4 + 1 && (
              <NumberInput
                placeholder="0"
                title={`Nspt a ${index * 4 + 3}m: `}
                un=""
              />
            )}
            {depth > index * 4 + 2 && (
              <NumberInput
                placeholder="0"
                title={`Nspt a ${index * 4 + 4}m: `}
                un=""
              />
            )}
          </Styled.NsptContainerMob>
        </Styled.NsptContainer>
      ))}
    </Styled.Wrapper>
  );
};
