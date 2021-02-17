import React from 'react';
import styled from 'styled-components/native';
import { NemoTheme } from '~/lib/style/theme';

interface IBaseButtonProps {
    children?: JSX.Element | Array<JSX.Element> | undefined;
    width?: string;
    height?: string;
    borderWidth?: string;
    borderRadius?: string;
    borderColor?: string;
    backgroundColor?: string;
    onPress?: <T>(arg?: T) => void;
    style?: { [x: string]: any };
};

const Container = styled.TouchableWithoutFeedback`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const View = styled.View<IBaseButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-width: ${(props) => props.borderWidth};
    border-radius: ${(props) => props.borderRadius};
    border-color: ${(props) => props.borderColor};
    background-color: ${(props) => props.backgroundColor};
`;

const BaseButton = (props: IBaseButtonProps) => {
    const {
        width = 'auto',
        height = NemoTheme.Button.Height,
        borderWidth = NemoTheme.Button.BorderWidth,
        borderRadius = NemoTheme.Button.BorderRaidus,
        borderColor = NemoTheme.Button.BorderColor,
        backgroundColor = NemoTheme.Button.BackgroundColor,
        onPress,
        style,
        children,
    } = props;

    return (
        <Container onPress={onPress}>
            <View
                width={width}
                height={height}
                borderWidth={borderWidth}
                borderColor={borderColor}
                borderRadius={borderRadius}
                backgroundColor={backgroundColor}
                style={style}
            >
                {children}
            </View>
        </Container>
    )
}

export default BaseButton;