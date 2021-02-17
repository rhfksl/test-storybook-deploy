import React from 'react';
import styled from 'styled-components/native';
import { NemoTheme } from '~/lib/style/theme'
import BaseTag from '../base/BaseTag';

interface INormalTagProps {
  text: string;
  width?: string;
  backgroundColor?: string;
  style?: { [x: string]: any };
}

const Text = styled.Text<ITextProps>`
  text-align: center;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  letter-spacing: -0.5px;
  font-weight: bold;
`;

const NormalTag2 = (props: INormalTagProps) => {
  const {
    text,
    width,
    backgroundColor = NemoTheme.NormalTag2.BackgroundColor,
    style,
  } = props;

  return (
    <BaseTag
      width={width}
      height={NemoTheme.NormalTag2.Height}
      borderRadius={NemoTheme.NormalTag2.BorderRaidus}
      backgroundColor={backgroundColor}
      style={style}
    >
      <Text
        fontColor={NemoTheme.NormalTag2.Text.FontColor}
        fontSize={NemoTheme.NormalTag2.Text.FontSize}
      >
        {text}
      </Text>
    </BaseTag>
  )
}

export default NormalTag2;