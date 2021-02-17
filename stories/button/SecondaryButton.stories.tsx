import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import SecondaryButton from '~/components/button/SecondaryButton';

interface ISecondaryButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Secondary',
  component: SecondaryButton,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<ISecondaryButtonProps> = (args) => {
  return <SecondaryButton {...args} />
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "nemo",
};