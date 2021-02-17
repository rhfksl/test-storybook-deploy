import React from 'react';
import BaseButton from '~/components/button/base/BaseButton';
import { NemoTheme } from '~/lib/style/theme';
import styled from 'styled-components/native';

interface ISecondaryButtonProps {
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

const SecondaryButton = (props: ISecondaryButtonProps) => {
    const {
        width,
        text,
        onPress,
        style,
    } = props;
    return (
        <BaseButton
            backgroundColor={NemoTheme.SecondaryButton.BackgroundColor}
            width={width}
            height={NemoTheme.SecondaryButton.Height}
            borderRadius={NemoTheme.SecondaryButton.BorderRaidus}
            onPress={onPress}
            style={style}
        >
            <Text
                fontColor={NemoTheme.SecondaryButton.Text.FontColor}
                fontSize={NemoTheme.SecondaryButton.Text.FontSize}
            >{text}</Text>
        </BaseButton>
    )
}

export default SecondaryButton;