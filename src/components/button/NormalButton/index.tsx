import React from 'react';
import styled from 'styled-components/native';
import BaseButton from '~/components/button/base/BaseButton';
import { NemoTheme } from '~/lib/style/theme';

interface INormalButtonProps {
    text?: string;
    width?: string;
    onPress?: <T>(arg?: T) => void;
    style?: { [x: string]: any };
};

const Text = styled.Text<ITextProps>`
    text-align: center;
    color: ${props => props.fontColor};
    font-size: ${props => props.fontSize};
    letter-spacing: -0.5px;
`;

const NormalButton = (props: INormalButtonProps) => {
    const {
        text,
        width,
        onPress,
        style,
    } = props;

    return (
        <BaseButton
            backgroundColor={NemoTheme.NormalButton.BackgroundColor}
            width={width}
            height={NemoTheme.NormalButton.Height}
            borderRadius={NemoTheme.NormalButton.BorderRaidus}
            onPress={onPress}
            style={style}
        >
            <Text
                fontColor={NemoTheme.NormalButton.Text.FontColor}
                fontSize={NemoTheme.NormalButton.Text.FontSize}
            >{text}</Text>
        </BaseButton>
    )
}

export default NormalButton;