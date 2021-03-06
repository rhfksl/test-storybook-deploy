import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PrimaryButton from '~/components/button/PrimaryButton';

interface IPrimaryButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Primary',
  component: PrimaryButton,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<IPrimaryButtonProps> = (args) => {
  return <PrimaryButton {...args} />
};

export const Primary = Template.bind({});
Primary.args = {
  text: "nemo"
};