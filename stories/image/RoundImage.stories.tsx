import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageSourcePropType } from 'react-native';
import RoundImage from '~/components/image/RoundImage';

interface IRoundImageProps {
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Image/Round',
  component: RoundImage,
  argTypes: {
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<IRoundImageProps> = (args) => {
  return <RoundImage {...args} />
};

export const Round = Template.bind({});
Round.args = {
  imageSource: require('~/assets/image/img_nemogirl_100_color@2x.png'),
};