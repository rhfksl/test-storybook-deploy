import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import { NemoTheme } from '~/lib/style/theme'
import BaseTag from '../base/BaseTag';

const Text = styled.Text<ITextProps>`
  text-align: center;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  letter-spacing: -0.5px;
`;

const Image = styled.Image<IImageProps>`
  width: ${props => props.imageWidth};
  height: ${props => props.imageHeight};
  margin-right: ${props => props.imageMarginRight};
`;

const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface INormalTagProps {
  text: string;
  width?: string;
  fontColor?: string;
  backgroundColor?: string;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
}

const NormalImageTag = (props: INormalTagProps) => {
  const {
    text,
    width,
    fontColor = NemoTheme.NormalTag.Text.FontColor,
    backgroundColor = NemoTheme.NormalTag.BackgroundColor,
    imageSource,
    style,
  } = props;

  return (
    <BaseTag
      width={width}
      height={NemoTheme.NormalTag.Height}
      borderRadius={NemoTheme.NormalTag.BorderRaidus}
      backgroundColor={backgroundColor}
      style={style}
    >
      <ImageContainer>
        <Image
          source={imageSource}
          imageWidth={NemoTheme.NormalTag.Image.Width}
          imageHeight={NemoTheme.NormalTag.Image.Height}
          imageMarginRight={NemoTheme.NormalTag.Image.MarginRight}
        />
        <Text
          fontColor={fontColor}
          fontSize={NemoTheme.NormalTag.Text.FontSize}
        >
          {text}
        </Text>
      </ImageContainer>
    </BaseTag>
  )
}

export default NormalImageTag;