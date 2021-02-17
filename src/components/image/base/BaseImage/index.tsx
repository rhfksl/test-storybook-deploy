import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import { NemoTheme } from '~/lib/style/theme';

interface IBaseImageProps {
  children?: JSX.Element | Array<JSX.Element> | undefined;
  width?: string;
  height?: string;
  borderRadius?: string;
  imageSource: ImageSourcePropType;
  style?: { [x: string]: any };
};

const Image = styled.ImageBackground<IImageProps>`
  width: ${props => props.imageWidth};
  height: ${props => props.imageHeight};
  border-radius: ${props => props.imageBorderRadius};
  overflow: hidden;
`;

const BaseImage = (props: IBaseImageProps) => {
  const {
    width = 'auto',
    height = NemoTheme.BaseImage.Height,
    borderRadius = NemoTheme.BaseImage.BorderRaidus,
    imageSource,
    style,
    children,
  } = props;

  return (
    <Image
      source={imageSource}
      imageWidth={width}
      imageHeight={height}
      imageBorderRadius={borderRadius}
      style={style}
    >
      {children}
    </Image>
  )
}

export default BaseImage;