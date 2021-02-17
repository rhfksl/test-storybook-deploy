import React from 'react';
import BaseButton from '~/components/button/base/BaseButton';
import { NemoTheme } from '~/lib/style/theme';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';

interface IOptionImageButtonProps {
  imageSource: ImageSourcePropType;
  onPress?: <T>(arg?: T) => void;
  style?: { [x: string]: any };
};

const Image = styled.Image<IImageProps>`
  width: ${props => props.imageWidth};
  height: ${props => props.imageHeight};
`;

const OptionImageButton = (props: IOptionImageButtonProps) => {
  const {
    onPress,
    imageSource,
    style,
  } = props;

  return (
    <BaseButton
      backgroundColor={NemoTheme.OptionImageButton.BackgroundColor}
      width={NemoTheme.OptionImageButton.Width}
      height={NemoTheme.OptionImageButton.Height}
      borderRadius={NemoTheme.OptionImageButton.BorderRaidus}
      onPress={onPress}
      style={style}
    >
      <Image
        source={imageSource}
        imageWidth={NemoTheme.OptionImageButton.Image.Width}
        imageHeight={NemoTheme.OptionImageButton.Image.Height}
      />
    </BaseButton>
  )
};

export default OptionImageButton;