import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageSourcePropType } from 'react-native';
import CircleImage from '~/components/image/CircleImage';

interface ICircleImageProps {
  width?: string;
  height?: string;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Image/Circle',
  component: CircleImage,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<ICircleImageProps> = (args) => {
  return <CircleImage {...args} />
};

export const Circle = Template.bind({});
Circle.args = {
  imageSource: require('~/assets/image/img_nemogirl_100_color@2x.png'),
};