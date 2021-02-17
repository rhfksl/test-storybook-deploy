import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import RealPriceTag from '~/components/tag/RealPriceTag';

interface IRealPriceTagProps {
  text: string;
  width?: string;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Tag/Real Price',
  component: RealPriceTag,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    // backgroundColor: { control: 'color' },
    style: { control: false },
  },
} as Meta;

const Template: Story<IRealPriceTagProps> = (args) => {
  return <RealPriceTag {...args} />
};

export const RealPrice = Template.bind({});
RealPrice.args = {
  text: "실거래가 20. 07. 25",
  width: '103px',
};