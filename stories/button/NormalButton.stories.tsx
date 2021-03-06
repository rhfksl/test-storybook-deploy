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
  title: 'Nemo/Button/Normal',
  component: NormalButton,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<INormalButtonProps> = (args) => {
  return <NormalButton {...args} />
};

export const Normal = Template.bind({});
Normal.args = {
  text: "nemo",
};