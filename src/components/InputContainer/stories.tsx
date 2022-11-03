import { Meta, Story } from '@storybook/react/types-6-0';
import { InputContainer, InputContainerProps } from '.';
import { Heading } from '../Heading';
import { InputSoil } from '../InputSoil';
import { InputSoilLayer } from '../InputSoilLayer';
import { Wrapper } from '../Wrapper';

export default {
  title: 'InputContainer',
  component: InputContainer,
  args: {
    children: <InputSoil />,
    title: 'Tipo de Solo',
    frameSize: 'medium',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<InputContainerProps>;

export const Template: Story<InputContainerProps> = () => {
  return (
    <div>
      <Heading>JStake</Heading>
      <Wrapper>
        <InputContainer title="Tipos de Solo" frameSize="spt" depth={16}>
          <InputSoilLayer />
        </InputContainer>
      </Wrapper>
    </div>
  );
};
