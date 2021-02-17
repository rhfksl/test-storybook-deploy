import React from 'react';
import styled from 'styled-components/native';
import BaseButton from '~/components/button/base/BaseButton';
import { NemoTheme } from '~/lib/style/theme';

interface IPrimaryButtonProps {
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

const PrimaryButton = (props: IPrimaryButtonProps) => {
    const {
        text,
        width,
        onPress,
        style,
    } = props;

    return (
        <BaseButton
            backgroundColor={NemoTheme.PrimaryButton.BackgroundColor}
            width={width}
            height={NemoTheme.PrimaryButton.Height}
            borderRadius={NemoTheme.PrimaryButton.BorderRaidus}
            onPress={onPress}
            style={style}
        >
            <Text
                fontColor={NemoTheme.PrimaryButton.Text.FontColor}
                fontSize={NemoTheme.PrimaryButton.Text.FontSize}
            >{text}</Text>
        </BaseButton>
    )
}

export default PrimaryButton;