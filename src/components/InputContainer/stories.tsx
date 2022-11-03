import { Meta, Story } from '@storybook/react/types-6-0';
import { InputContainer, InputContainerProps } from '.';
import { Heading } from '../Heading';
import { InputDim } from '../InputDim';
import { InputSoil } from '../InputSoil';
import { InputSoilLayer } from '../InputSoilLayer';
import { InputStake } from '../InputStake';
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

export const Template: Story<InputContainerProps> = (args) => {
  return (
    <div>
      <Heading>JStake</Heading>
      <Wrapper>
        <InputContainer
          children={<InputSoilLayer depth={6} />}
          title="Tipos de Solo"
          frameSize="spt"
          depth={16}
        />
      </Wrapper>
    </div>
  );
};
