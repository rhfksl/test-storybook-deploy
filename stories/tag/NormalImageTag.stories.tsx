import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NormalImageTag from '~/components/tag/NormalImageTag';
import { ImageSourcePropType } from 'react-native';

interface INormalTagProps {
  text: string;
  width?: string;
  fontColor?: string;
  backgroundColor?: string;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
}

export default {
  title: 'Nemo/Tag/Normal Image',
  component: NormalImageTag,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<INormalTagProps> = (args) => {
  return <NormalImageTag {...args} />
};

export const NormalImage = Template.bind({});
NormalImage.args = {
  text: "프리미엄",
  imageSource: require('~/assets/image/ic_common_crown_2_12_white.png'),
  width: '58px',
  fontColor: 'white',
  backgroundColor: '#ce9f19',
};