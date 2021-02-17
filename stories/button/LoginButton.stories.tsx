import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ImageSourcePropType } from 'react-native';
import LoginButton from '~/components/button/LoginButton';

interface ILoginButtonProps {
  text?: string;
  width?: string;
  backgroundColor?: string;
  fontColor?: string;
  onPress?: <T>(arg?: T) => void;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

export default {
  title: 'Nemo/Button/Login',
  component: LoginButton,
  argTypes: {
    text: { control: 'text' },
    width: { control: 'text' },
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
    imageSource: { control: false },
    style: { control: false },
  },
} as Meta;

const Template: Story<ILoginButtonProps> = (args) => {
  return <LoginButton {...args} />
};

export const Login = Template.bind({});
Login.args = {
  text: "카카오톡으로 시작하기",
  imageSource: require('~/assets/image/ic_kakao_24_colors.png'),
};