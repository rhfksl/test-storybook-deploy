import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Styled from 'styled-components/native';
import Root from '../Navigator'

import * as auth from '../../lib/api/auth';

import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import { call } from 'react-native-reanimated';

const Container = Styled.SafeAreaView`
    margin: 10px;
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

const callcall = async () => {
    const response = await fetch('https://raw.githubusercontent.com/dev-yakuza/users/master/api.json');
    const data = await response.json();
    console.log(`user object: ${JSON.stringify(data, null, 2)}`);
}

const Home = ({ navigation }: Props) => {
    console.log("[Home] start..");

    useEffect(() => {
        console.log('-------call');
        const params = new URLSearchParams();
        params.append('Email', 'jwlee@sugarhill.co.kr');
        params.append('Password', 'test8282');
        axios.post("https://www.nemoapp.kr/api/accounts/token", params, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            console.log('response -----------------');
            console.log(response.data);
        }).catch(error => {
            console.log('catch -----------------')
            console.log(error);
        })

        // axios.get("https://raw.githubusercontent.com/dev-yakuza/users/master/api.json")
        // .then(response => {
        //     console.log('response -----------------');
        //     console.log(response.data);
        // }).catch(error => {
        //     console.log('catch -----------------')
        //     console.log(error);
        // })

        //callcall();

        // try {
        //     auth.accountsToken({
        //         Email: 'jwlee@sugarhill.co.kr',
        //         Password: 'test8282'
        //     }).then(response => {
        //         console.log('-------response');
        //         console.log(response)
        //     })
        // } catch (error) {
        //     console.log('-------error');
        //     console.log(error);
        // }
    }, [])

    return (
        <Container>
            <Label
                onPress={() => {
                    navigation.navigate('ArticleMap');
                }}>상가</Label>
            <Label
                onPress={() => {
                    navigation.navigate('StoreTradeGate');
                }}>
                점포거래</Label>
            <Label
                onPress={() => {
                    navigation.navigate('ArticleMap');
                }}>
                사무실</Label>
            <Label
                onPress={() => {
                    navigation.navigate('ArticleMap');
                }}>
                공유오피스</Label>
            <Label
                onPress={() => {
                    navigation.navigate('ArticleMap');
                }}>
                공유오피스</Label>
            <Label
                onPress={() => {
                    navigation.navigate('ArticleMap');
                }}>
                데이터랩</Label>
        </Container>
    )
}

export default Home;