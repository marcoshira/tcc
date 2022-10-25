import { Meta, Story } from '@storybook/react/types-6-0';
import { NsptInput, NsptInputProps } from '.';
import { InputContainer } from '../InputContainer';

export default {
  title: 'NsptInput',
  component: NsptInput,
  args: {
    depth: 7,
  },
} as Meta<NsptInputProps>;

export const Template: Story<NsptInputProps> = (args) => {
  return (
    <div>
      <InputContainer
        children={<NsptInput {...args} />}
        title="Dados de SPT"
        frameSize="spt"
        depth={args.depth}
      />
    </div>
  );
};
