import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`

`

const DataLabGate = () => {
    console.log("[DataLabGate] start..");
    return(
        <SafeAreaView>
            <Text>데이터랩 게이트</Text>
            <Text>DataLabGate</Text>
        </SafeAreaView>
    )
}

export default DataLabGate;