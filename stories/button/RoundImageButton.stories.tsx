import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageSourcePropType } from 'react-native';
import RoundImageButton from '~/components/button/RoundImageButton';

interface INormalImageButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Round Image',
  component: RoundImageButton,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<INormalImageButtonProps> = (args) => {
  return <RoundImageButton {...args} />
};

export const RoundImage = Template.bind({});
RoundImage.args = {
  text: "전화하기",
  imageSource: require('~/assets/image/ic_common_phone_24_black.png'),
};