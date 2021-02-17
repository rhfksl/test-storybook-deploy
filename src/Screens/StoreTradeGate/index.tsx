import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';

import { StackNavigationProp } from '@react-navigation/stack';

const Container = Styled.SafeAreaView`

`;

type NavigationProp = StackNavigationProp<HomeTabParamList>;
interface Props {
    navigation: NavigationProp;
}

const Label = Styled.Text`
    border: 1px solid black;
    text-align: center;
    margin: 10px;
`;

const StoreTradeGate = ({ navigation }: Props) => {
    console.log("[StoreTradeGate] start..");
    return (
        <SafeAreaView>
            <Text style={{ textAlign: 'center' }}>점포거래 게이트</Text>
            <Label
                onPress={() => {
                    navigation.navigate('Search');
                }}>지역검색</Label>
            <Label
                onPress={() => {
                    navigation.navigate('ArticleMap');
                }}>매물보기</Label>
        </SafeAreaView>
    )
}

export default StoreTradeGate;