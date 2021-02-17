import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';
import ChangePassword from '../ChangePassword';
import ChangeTelephone from '../ChangeTelephone';

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

const EditProfile = ({ navigation }: Props) => {
    console.log("[EditProfile] start..");
    return (
        <SafeAreaView>
            <Text style={{ textAlign: 'center' }}>내설정</Text>
            <Label
                onPress={() => {
                    navigation.navigate('ChangePassword');
                }}>
                비밀번호 재설정</Label>
            <Label
                onPress={() => {
                    navigation.navigate('ChangeTelephone');
                }}>
                연락받을 번호 재설정</Label>
            <Label
                onPress={() => {
                    navigation.navigate('ChangeTelephone');
                }}>
                휴대전화번호 재설정</Label>
        </SafeAreaView>
    )
}

export default EditProfile;