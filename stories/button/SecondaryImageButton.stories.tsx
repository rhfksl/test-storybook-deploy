import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageSourcePropType } from 'react-native';
import SecondaryImageButton from '~/components/button/SecondaryImageButton';

interface INormalImageButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Secondary Image',
  component: SecondaryImageButton,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: false },
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<INormalImageButtonProps> = (args) => {
  return <SecondaryImageButton {...args} />
};

export const SecondaryImage = Template.bind({});
SecondaryImage.args = {
  text: "전화하기",
  imageSource: require('~/assets/image/icCommonPhone24Red.png'),
};