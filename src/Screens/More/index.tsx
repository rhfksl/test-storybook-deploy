import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';
import EditProfile from '../Profile/EditProfile'

import { StackNavigationProp } from '@react-navigation/stack';

const Container = Styled.SafeAreaView`

`

const Label = Styled.Text`
    border: 1px solid black;
    text-align: center;
    margin: 10px;
`;

type NavigationProp = StackNavigationProp<MoreTabParamList>;
interface Props {
    navigation: NavigationProp;
}

const More = ({ navigation }: Props) => {
    console.log("[More] start..");
    return(
        <SafeAreaView>
            <Text style={{ textAlign: 'center' }}>더보기</Text>
            <Label
                onPress={() => {
                    navigation.navigate('EditProfile');
                }}>
                내 설정</Label>
        </SafeAreaView>
    )
}

export default More;