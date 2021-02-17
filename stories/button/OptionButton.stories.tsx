import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import OptionButton from '~/components/button/OptionButton';
import styled from 'styled-components/native';

interface IOptionButtonProps {
  text?: string;
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
  title: 'Nemo/Button/Option',
  component: OptionButton,
  argTypes: {
    text: { control: 'text' },
    style: { control: false },
  },
} as Meta;

const Template: Story<IOptionButtonProps> = (args) => {
  return <Container><OptionButton {...args} /></Container>
};

export const Option = Template.bind({});
Option.args = {
  text: "주변"
};