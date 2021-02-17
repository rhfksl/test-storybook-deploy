import React from 'react';
import styled from 'styled-components/native';
import BaseButton from '~/components/button/base/BaseButton';
import { NemoTheme } from '~/lib/style/theme';

interface IOptionButtonProps {
  text?: string;
  onPress?: <T>(arg?: T) => void;
  style?: { [x: string]: any };
};

const Text = styled.Text<ITextProps>`
    text-align: center;
    color: ${props => props.fontColor};
    font-size: ${props => props.fontSize};
    letter-spacing: -0.5px;
`;

const OptionButton = (props: IOptionButtonProps) => {
  const {
    text,
    onPress,
    style,
  } = props;

  return (
    <BaseButton
      backgroundColor={NemoTheme.OptionButton.BackgroundColor}
      width={NemoTheme.OptionButton.Width}
      height={NemoTheme.OptionButton.Height}
      borderRadius={NemoTheme.OptionButton.BorderRaidus}
      onPress={onPress}
      style={style}
    >
      <Text
        fontColor={NemoTheme.OptionButton.Text.FontColor}
        fontSize={NemoTheme.OptionButton.Text.FontSize}
      >{text}</Text>
    </BaseButton>
  )
}

export default OptionButton;