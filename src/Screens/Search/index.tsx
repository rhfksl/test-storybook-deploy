import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`

`

const Search = () => {
    console.log("[Search] start..");
    return (
        <SafeAreaView>
            <Text>Search</Text>
        </SafeAreaView>
    )
}

export default Search;