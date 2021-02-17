import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`

`

const AgentMiniHome = () => {
    console.log("[AgentMiniHome] start..");
    return (
        <SafeAreaView>
            <Text style={{ textAlign: 'center' }}>미니홈</Text>
        </SafeAreaView>
    )
}

export default AgentMiniHome;