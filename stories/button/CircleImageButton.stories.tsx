import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageSourcePropType } from 'react-native';
import CircleImageButton from '~/components/button/CircleImageButton';

interface ICircleImageButtonProps {
  width?: string;
  height?: string;
  imageWidth?: string;
  imageHeight?: string;
  onPress?: <T>(arg?: T) => void;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Circle Image',
  component: CircleImageButton,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    imageWidth: { control: 'text' },
    imageHeight: { control: 'text' },
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<ICircleImageButtonProps> = (args) => {
  return <CircleImageButton {...args} />
};

export const CircleImage = Template.bind({});
CircleImage.args = {
  imageSource: require('~/assets/image/ic_noimg_people_60_gray.png'),
};