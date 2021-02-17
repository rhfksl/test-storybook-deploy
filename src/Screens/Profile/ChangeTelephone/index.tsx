import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';

import { StackNavigationProp } from '@react-navigation/stack';

const Container = Styled.SafeAreaView`

`

const Label = Styled.Text`
    border: 1px solid black;
    text-align: center;
    margin: 10px;
`;

type NavigationProp = StackNavigationProp<ProfileParmaList>;
interface Props {
    navigation: NavigationProp;
}

const ChangeTelephone = ({ navigation }: Props) => {
    console.log("[ChangeTelephone] start..");
    return (
        <SafeAreaView>
            <Text style={{ textAlign: 'center' }}>휴대번호/연락받을 번호변경</Text>
        </SafeAreaView>
    )
}

export default ChangeTelephone;