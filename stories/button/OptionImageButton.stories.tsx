import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components/native';
import OptionImageButton from '~/components/button/OptionImageButton';
import { ImageSourcePropType } from 'react-native';

interface IOptionImageButtonProps {
  imageSource: ImageSourcePropType;
  onPress?: <T>(arg?: T) => void;
  style?: { [x: string]: any };
};

const Container = styled.View`
  background-color: black;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default {
  title: 'Nemo/Button/Option Image',
  component: OptionImageButton,
  argTypes: {
    text: { control: 'text' },
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<IOptionImageButtonProps> = (args) => {
  return <Container><OptionImageButton {...args} /></Container>
};

export const OptionImage = Template.bind({});
OptionImage.args = {
  imageSource: require('~/assets/image/ic_common_roadview_24_black.png'),
};