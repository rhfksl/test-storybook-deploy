import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { NemoTheme } from '~/lib/style/theme';
import BaseImage from '../base/BaseImage';

interface IRoundImageProps {
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

const RoundImage = (props: IRoundImageProps) => {
  const {
    imageSource,
    style,
  } = props;

  return (
    <BaseImage
      imageSource={imageSource}
      width={NemoTheme.RoundImage.Width}
      height={NemoTheme.RoundImage.Height}
      borderRadius={NemoTheme.RoundImage.BorderRaidus}
      style={style}
    />
  )
}

export default RoundImage;