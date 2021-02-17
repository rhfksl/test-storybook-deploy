import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NormalTag2 from '~/components/tag/NormalTag2';

interface INormalTagProps {
  text: string;
  width?: string;
  backgroundColor?: string;
  style?: { [x: string]: any };
}

export default {
  title: 'Nemo/Tag/Normal 2',
  component: NormalTag2,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: 'color' },
    style: { control: false },
  },
} as Meta;

const Template: Story<INormalTagProps> = (args) => {
  return <NormalTag2 {...args} />
};

export const example1 = Template.bind({});
example1.args = {
  text: "일식점",
  width: '37px',
};

export const example2 = Template.bind({});
example2.args = {
  text: "카페",
  width: '28px',
  backgroundColor: '#8b4825',
};
