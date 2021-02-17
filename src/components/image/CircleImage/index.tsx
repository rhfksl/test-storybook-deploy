import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { NemoTheme } from '~/lib/style/theme';
import BaseImage from '../base/BaseImage';

interface ICircleImageProps {
  width?: string;
  height?: string;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

const CircleImage = (props: ICircleImageProps) => {
  const {
    width = NemoTheme.CircleImage.Width,
    height = NemoTheme.CircleImage.Height,
    imageSource,
    style,
  } = props;

  return (
    <BaseImage
      imageSource={imageSource}
      width={width}
      height={height}
      borderRadius={NemoTheme.CircleImage.BorderRaidus}
      style={style}
    />
  )
}

export default CircleImage;