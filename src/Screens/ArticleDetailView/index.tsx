import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`

`

const ArticleDetailView = () => {
    console.log("[ArticleDetailView] start..");
    return(
        <SafeAreaView>
            <Text style={{ textAlign: 'center' }}>매물상세</Text>
        </SafeAreaView>
    )
}

export default ArticleDetailView;