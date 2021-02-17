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

const LoginButton = (props: INormalImageButtonProps) => {
  const {
    text,
    width,
    imageSource,
    onPress,
    style,
  } = props;

  return (
    <BaseButton
      backgroundColor={NemoTheme.LoginButton.BackgroundColor}
      width={width}
      height={NemoTheme.LoginButton.Height}
      borderRadius={NemoTheme.LoginButton.BorderRaidus}
      onPress={onPress}
      style={style}
    >
      <ImageContainer>
        <Image
          source={imageSource}
          imageWidth={NemoTheme.LoginButton.Image.Width}
          imageHeight={NemoTheme.LoginButton.Image.Height}
          imageMarginRight={NemoTheme.LoginButton.Image.MarginRight}
        />
        <Text
          fontColor={NemoTheme.LoginButton.Text.FontColor}
          fontSize={NemoTheme.LoginButton.Text.FontSize}
        >
          {text}
        </Text>
      </ImageContainer>
    </BaseButton>
  )
}

export default LoginButton;