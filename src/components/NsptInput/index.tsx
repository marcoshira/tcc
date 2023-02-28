import { Question } from '@styled-icons/evil';
import { NumberInput } from '../NumberInput';
import * as Styled from './styles';

export type NsptInputProps = {
  depth?: number;
  onSPTFormChange?: (value: string, arrayIndex: number) => void;
};
export const NsptInput = ({
  depth = 0,
  onSPTFormChange = null,
}: NsptInputProps) => {
  const svgLeft =
    depth % 4 == 0
      ? '19%'
      : depth % 4 == 1
      ? '44.5%'
      : depth % 4 == 2
      ? '69%'
      : '94%';

  return (
    <Styled.Wrapper svgLeft={svgLeft}>
      {[...Array(Math.floor(depth / 4) + 1)].map((el, index) => (
        <Styled.NsptContainer key={index}>
          <Styled.NsptContainerMob>
            {depth > index * 4 - 1 && (
              <NumberInput
                placeholder="0"
                title={`Nspt a ${index * 4 + 1}m: `}
                onInputChange={(val) => onSPTFormChange(val, index * 4)}
                un=""
              />
            )}
            {depth > index * 4 && (
              <NumberInput
                placeholder="0"
                title={`Nspt a ${index * 4 + 2}m: `}
                onInputChange={(val) => onSPTFormChange(val, index * 4 + 1)}
                un=""
              />
            )}
          </Styled.NsptContainerMob>
          <Styled.NsptContainerMob>
            {depth > index * 4 + 1 && (
              <NumberInput
                placeholder="0"
                title={`Nspt a ${index * 4 + 3}m: `}
                onInputChange={(val) => onSPTFormChange(val, index * 4 + 2)}
                un=""
              />
            )}
            {depth > index * 4 + 2 && (
              <NumberInput
                placeholder="0"
                title={`Nspt a ${index * 4 + 4}m: `}
                onInputChange={(val) => onSPTFormChange(val, index * 4 + 3)}
                un=""
              />
            )}
          </Styled.NsptContainerMob>
        </Styled.NsptContainer>
      ))}
      <div className="tooltip3">
        <Question />
        <span className="tooltiptext3">
          Caso a estaca esteja apoiada em uma camada de rochas, duplique o
          último valor ou considere um valor alto (Ex: 50).
        </span>
      </div>
    </Styled.Wrapper>
  );
};
