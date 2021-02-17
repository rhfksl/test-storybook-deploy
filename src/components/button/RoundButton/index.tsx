import React from 'react';
import BaseButton from '~/components/button/base/BaseButton';
import { NemoTheme } from '~/lib/style/theme';
import styled from 'styled-components/native';

interface IRoundButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  style?: { [x: string]: any };
};

const Text = styled.Text<ITextProps>`
    text-align: center;
    color: ${props => props.fontColor};
    font-size: ${props => props.fontSize};
    letter-spacing: -0.5px;
`;

const RoundButton = (props: IRoundButtonProps) => {
  const {
    text,
    width,
    onPress,
    style,
  } = props;

  return (
    <BaseButton
      backgroundColor={NemoTheme.RoundButton.BackgroundColor}
      width={width}
      height={NemoTheme.RoundButton.Height}
      borderRadius={NemoTheme.RoundButton.BorderRaidus}
      onPress={onPress}
      style={style}
    >
      <Text
        fontColor={NemoTheme.RoundButton.Text.FontColor}
        fontSize={NemoTheme.RoundButton.Text.FontSize}
      >{text}</Text>
    </BaseButton>
  )
};

export default RoundButton;