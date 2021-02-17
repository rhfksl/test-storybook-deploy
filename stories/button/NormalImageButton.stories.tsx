import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NormalImageButton from '~/components/button/NormalImageButton';
import { ImageSourcePropType } from 'react-native';

interface INormalImageButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Normal Image',
  component: NormalImageButton,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: false },
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<INormalImageButtonProps> = (args) => {
  return <NormalImageButton {...args} />
};

export const NormalImage = Template.bind({});
NormalImage.args = {
  text: "전화하기",
  imageSource: require('~/assets/image/ic_common_phone_24_black.png'),
};