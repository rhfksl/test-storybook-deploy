import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`

`;

const Signup = () => {
    console.log("[Signup] start..");
    return (
        <SafeAreaView>
            <Text>Signup</Text>
        </SafeAreaView>
    )
}

export default Signup;