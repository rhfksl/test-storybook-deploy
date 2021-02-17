import React from 'react';
import BaseButton from '~/components/button/base/BaseButton'
import { NemoTheme } from '~/lib/style/theme';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';

interface ICircleImageButtonProps {
  width?: string;
  height?: string;
  imageWidth?: string;
  imageHeight?: string;
  onPress?: <T>(arg?: T) => void;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

const Image = styled.Image<IImageProps>`
  width: ${props => props.imageWidth};
  height: ${props => props.imageHeight};
`;

const CircleImageButton = (props: ICircleImageButtonProps) => {
  const {
    width = NemoTheme.CircleImageButton.Width,
    height = NemoTheme.CircleImageButton.Height,
    imageWidth = NemoTheme.CircleImageButton.Image.Width,
    imageHeight = NemoTheme.CircleImageButton.Image.Height,
    imageSource,
    onPress,
    style,
  } = props;

  return (
    <BaseButton
      backgroundColor={NemoTheme.CircleImageButton.BackgroundColor}
      width={width}
      height={height}
      borderRadius={NemoTheme.CircleImageButton.BorderRaidus}
      onPress={onPress}
      style={style}
    >
      <Image
        source={imageSource}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    </BaseButton>
  )
};

export default CircleImageButton;