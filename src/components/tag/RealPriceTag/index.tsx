import React from 'react';
import styled from 'styled-components/native';
import { NemoTheme } from '../../../lib/style/theme';
import LinearGradient from 'react-native-linear-gradient';

interface IRealPriceTagProps {
  text: string;
  width?: string;
  style?: { [x: string]: any };
};

interface IGradientContainerProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: { [x: string]: any };
}

const GradientContainer = styled(LinearGradient) <IGradientContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
`;

const Text = styled.Text<ITextProps>`
  text-align: center;
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize};
  letter-spacing: -0.5px;
  font-weight: bold;
`;

const Image = styled.Image<IImageProps>`
  width: ${props => props.imageWidth};
  height: ${props => props.imageHeight};
  margin-right: ${props => props.imageMarginRight};
`;

const RealPriceTag = (props: IRealPriceTagProps) => {
  const {
    text,
    width,
    style,
  } = props;

  return (
    <GradientContainer
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[NemoTheme.RealPriceTag.StartBackgroundColor, NemoTheme.RealPriceTag.EndBackgroundColor]}
      width={width}
      height={NemoTheme.RealPriceTag.Height}
      borderRadius={NemoTheme.RealPriceTag.BorderRaidus}
      style={style}
    >
      <Image
        source={NemoTheme.RealPriceTag.Image.Source}
        imageWidth={NemoTheme.RealPriceTag.Image.Width}
        imageHeight={NemoTheme.RealPriceTag.Image.Height}
        imageMarginRight={NemoTheme.RealPriceTag.Image.MarginRight}
      />
      <Text
        fontColor={NemoTheme.RealPriceTag.Text.FontColor}
        fontSize={NemoTheme.RealPriceTag.Text.FontSize}
      >
        {text}
      </Text>
    </GradientContainer>
  )
}

export default RealPriceTag;