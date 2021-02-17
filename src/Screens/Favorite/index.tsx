import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';
import {accountsToken} from '../../lib/api/auth';

import { StackNavigationProp } from '@react-navigation/stack';

const Container = Styled.SafeAreaView`

`

const Label = Styled.Text`
    border: 1px solid black;
    text-align: center;
    margin: 10px;
`;

type NavigationProp = StackNavigationProp<FavoriteTabParamList>;
interface Props {
    navigation: NavigationProp;
}

const Favorite = ({ navigation }: Props) => {
    console.log("[Favorite] start..");
    return (
        <SafeAreaView>
            <Text style={{ textAlign: 'center' }}>관심매물</Text>
            <Label
                onPress={() => {
                    accountsToken({
                        email:'jwlee@sugarhill.co.kr', 
                        password: 'test8282'
                    });
                }}>
                매물상세</Label>
            <Label
                onPress={() => {
                    navigation.navigate('AgentMiniHome');
                }}>
                중개사미니홈</Label>
        </SafeAreaView>
    )
}

export default Favorite;