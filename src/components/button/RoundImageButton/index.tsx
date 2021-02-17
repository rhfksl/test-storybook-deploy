import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import BaseButton from '~/components/button/base/BaseButton'
import { NemoTheme } from '~/lib/style/theme'

interface IRoundImageButtonProps {
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

const RoundImageButton = (props: IRoundImageButtonProps) => {
  const {
    text,
    width,
    imageSource,
    onPress,
    style,
  } = props;

  return (
    <BaseButton
      backgroundColor={NemoTheme.RoundImageButton.BackgroundColor}
      width={width}
      height={NemoTheme.RoundImageButton.Height}
      borderWidth={NemoTheme.RoundImageButton.BorderWidth}
      borderColor={NemoTheme.RoundImageButton.BorderColor}
      borderRadius={NemoTheme.RoundImageButton.BorderRaidus}
      onPress={onPress}
      style={style}
    >
      <ImageContainer>
        <Image
          source={imageSource}
          imageWidth={NemoTheme.RoundImageButton.Image.Width}
          imageHeight={NemoTheme.RoundImageButton.Image.Width}
          imageMarginRight={NemoTheme.RoundImageButton.Image.MarginRight}
        />
        <Text
          fontColor={NemoTheme.RoundImageButton.Text.FontColor}
          fontSize={NemoTheme.RoundImageButton.Text.FontSize}
        >
          {text}
        </Text>
      </ImageContainer>
    </BaseButton>
  )
}

export default RoundImageButton;