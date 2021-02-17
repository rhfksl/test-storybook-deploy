import React from 'react';
import styled from 'styled-components/native';
import { NemoTheme } from '~/lib/style/theme'
import BaseTag from '../base/BaseTag';

interface INormalTagProps {
  text: string;
  width?: string;
  fontColor?: string;
  borderColor?: string;
  style?: { [x: string]: any };
}

const Text = styled.Text<ITextProps>`
  text-align: center;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  letter-spacing: -0.5px;
  font-weight: bold;
`;

const NormalTag1 = (props: INormalTagProps) => {
  const {
    text,
    width,
    borderColor = NemoTheme.NormalTag1.BorderColor,
    fontColor = NemoTheme.NormalTag1.Text.FontColor,
    style,
  } = props;

  return (
    <BaseTag
      width={width}
      height={NemoTheme.NormalTag1.Height}
      borderRadius={NemoTheme.NormalTag1.BorderRaidus}
      backgroundColor={NemoTheme.NormalTag1.BackgroundColor}
      borderWidth={NemoTheme.NormalTag1.BorderWidth}
      borderColor={borderColor}
      style={style}
    >
      <Text
        fontColor={fontColor}
        fontSize={NemoTheme.NormalTag1.Text.FontSize}
      >
        {text}
      </Text>
    </BaseTag>
  )
}

export default NormalTag1;