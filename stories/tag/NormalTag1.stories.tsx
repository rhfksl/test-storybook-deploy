import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NormalTag1 from '~/components/tag/NormalTag1';

interface INormalTagProps {
  text: string;
  width?: string;
  fontColor?: string;
  borderColor?: string;
  style?: { [x: string]: any };
}

export default {
  title: 'Nemo/Tag/Normal 1',
  component: NormalTag1,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    borderColor: { control: 'color' },
    fontColor: { control: 'color' },
    style: { control: false },
  },
} as Meta;

const Template: Story<INormalTagProps> = (args) => {
  return <NormalTag1 {...args} />
};

export const example1 = Template.bind({});
example1.args = {
  text: "확인점포 20. 12. 25",
  width: '91px',
};

export const example2 = Template.bind({});
example2.args = {
  text: "가격조정",
  width: '47px',
  borderColor: "#288cf9",
  fontColor: "#288cf9"
};