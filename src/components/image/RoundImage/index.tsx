import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { NemoTheme } from '~/lib/style/theme';
import BaseImage from '../base/BaseImage';

interface IRoundImageProps {
  width?: string;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

const RoundImage = (props: IRoundImageProps) => {
  const {
    width = NemoTheme.RoundImage.Width,
    imageSource,
    style,
  } = props;

  return (
    <BaseImage
      imageSource={imageSource}
      width={width}
      height={NemoTheme.RoundImage.Height}
      borderRadius={NemoTheme.RoundImage.BorderRaidus}
      style={style}
    />
  )
}

export default RoundImage;