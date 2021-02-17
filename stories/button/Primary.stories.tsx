// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NormalButton from '~/components/button/NormalButton';

interface INormalButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button',
  component: NormalButton,
  argTypes: {
    width: { control: 'text' },
    text: { control: 'text' },
    backgroundColor: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<INormalButtonProps> = (args) => {
  return <NormalButton {...args} />
};

export const TestButton = Template.bind({});
TestButton.args = {
  text: "Test",
};