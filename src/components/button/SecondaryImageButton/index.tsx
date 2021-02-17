import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import BaseButton from '~/components/button/base/BaseButton';
import { NemoTheme } from '~/lib/style/theme';

interface ISecondaryImageButtonProps {
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

const SecondaryImageButton = (props: ISecondaryImageButtonProps) => {
  const {
    text,
    width,
    onPress,
    imageSource,
    style,
  } = props;

  return (
    <BaseButton
      backgroundColor={NemoTheme.SecondaryImageButton.BackgroundColor}
      width={width}
      height={NemoTheme.SecondaryImageButton.Height}
      borderRadius={NemoTheme.SecondaryImageButton.BorderRaidus}
      onPress={onPress}
      style={style}
    >
      <ImageContainer>
        <Image
          source={imageSource}
          imageWidth={NemoTheme.SecondaryImageButton.Image.Width}
          imageHeight={NemoTheme.SecondaryImageButton.Image.Height}
          imageMarginRight={NemoTheme.SecondaryImageButton.Image.MarginRight}
        />
        <Text
          fontColor={NemoTheme.SecondaryImageButton.Text.FontColor}
          fontSize={NemoTheme.SecondaryImageButton.Text.FontSize}
        >
          {text}
        </Text>
      </ImageContainer>
    </BaseButton>
  )
}

export default SecondaryImageButton;