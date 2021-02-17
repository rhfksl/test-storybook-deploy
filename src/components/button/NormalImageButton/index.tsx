import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import BaseButton from '~/components/button/base/BaseButton';
import { NemoTheme } from '~/lib/style/theme';

interface INormalImageButtonProps {
  text?: string;
  width?: string;
  onPress?: <T>(arg?: T) => void;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

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

const NormalImageButton = (props: INormalImageButtonProps) => {
  const {
    text,
    width,
    onPress,
    imageSource,
    style,
  } = props;

  return (
    <BaseButton
      backgroundColor={NemoTheme.NormalImageButton.BackgroundColor}
      width={width}
      height={NemoTheme.NormalImageButton.Height}
      borderRadius={NemoTheme.NormalImageButton.BorderRaidus}
      onPress={onPress}
      style={style}
    >
      <ImageContainer>
        <Image
          source={imageSource}
          imageWidth={NemoTheme.NormalImageButton.Image.Width}
          imageHeight={NemoTheme.NormalImageButton.Image.Height}
          imageMarginRight={NemoTheme.NormalImageButton.Image.MarginRight}
        />
        <Text
          fontColor={NemoTheme.NormalImageButton.Text.FontColor}
          fontSize={NemoTheme.NormalImageButton.Text.FontSize}
        >
          {text}
        </Text>
      </ImageContainer>
    </BaseButton>
  )
}

export default NormalImageButton;