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

type NavigationProp = StackNavigationProp<HomeTabParamList>;
interface Props {
    navigation: NavigationProp;
}

const ArticleMap = ({ navigation }: Props) => {
    console.log("[ArticleMap] start..");
    return (
        <SafeAreaView>
            <Text style={{ textAlign: 'center' }}>매물지도</Text>
            <Label
                onPress={() => {
                    navigation.navigate('ArticleDetailView');
                }}>
                매물상세 바로가기</Label>
        </SafeAreaView>
    )
}

export default ArticleMap;