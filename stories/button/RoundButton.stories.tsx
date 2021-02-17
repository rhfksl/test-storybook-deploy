import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RoundButton from '~/components/button/RoundButton';

interface IRoundButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Round',
  component: RoundButton,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<IRoundButtonProps> = (args) => {
  return <RoundButton {...args} />
};

export const Round = Template.bind({});
Round.args = {
  text: "nemo"
};