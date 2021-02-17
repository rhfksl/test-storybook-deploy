import React from 'react';
import styled from 'styled-components/native';
import { NemoTheme } from '~/lib/style/theme';

const View = styled.View<ITagProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-width: ${(props) => props.borderWidth};
    border-radius: ${(props) => props.borderRadius};
    border-color: ${(props) => props.borderColor};
    background-color: ${(props) => props.backgroundColor};
`;

interface ITagProps {
  width?: string;
  height?: string;
  borderWidth?: string;
  borderRadius?: string;
  borderColor?: string;
  backgroundColor?: string;
  [x: string]: any;
}

const BaseTag = (props: ITagProps) => {
  const {
    width = 'auto',
    height = NemoTheme.BaseTag.Height,
    borderWidth = NemoTheme.BaseTag.BorderWidth,
    borderRadius = NemoTheme.BaseTag.BorderRaidus,
    borderColor = NemoTheme.BaseTag.BorderColor,
    backgroundColor = NemoTheme.BaseTag.BackgroundColor,
    style = {},
  } = props;

  return (
    <View
      width={width}
      height={height}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      style={style}
    >
      {props.children}
    </View>
  )
}

export default BaseTag;