import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageSourcePropType } from 'react-native';
import PrimaryImageButton from '~/components/button/PrimaryImageButton';

interface INormalImageButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Primary Image',
  component: PrimaryImageButton,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: false },
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<INormalImageButtonProps> = (args) => {
  return <PrimaryImageButton {...args} />
};

export const PrimaryImage = Template.bind({});
PrimaryImage.args = {
  text: "전화하기",
  imageSource: require('~/assets/image/ic_common_phone_20_white.png'),
};