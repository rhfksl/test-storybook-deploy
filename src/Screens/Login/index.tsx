import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../modules/auth';
import Styled from 'styled-components/native';
import PrimaryButton from '~/components/button/PrimaryButton';
import NormalButton from '~/components/button/NormalButton';
import SecondaryButton from '~/components/button/SecondaryButton';
import { NemoColor } from '~/lib/style/color';
import NemoButton from '~/../storybook/stories/NemoButton';

const Container = Styled.SafeAreaView`
    background-color: white;
    margin: 5px;
`

const Label = Styled.Text`
    border: 1px solid black;
    text-align: center;
    margin: 10px;
`;

const callcall = async () => {
    const response = await fetch('https://raw.githubusercontent.com/dev-yakuza/users/master/api.json');
    const data = await response.json();
    console.log(`user object: ${JSON.stringify(data, null, 2)}`);
}

// const login = () => {
//     const form = {
//         username: 'jwlee@sugarhill.co.kr',
//         password: 'test8282'
//     }
//     const {username, password} = form
//     console.log(`username => ${username}`);
//     console.log(`password => ${password}`);

//     // useDispatch 사용하여 login 완료 하기
// }

const Login = () => {
    console.log("[Login] start..");

    const dispatch = useDispatch();

    return (
        <Container style={{
            paddingTop: 10
        }}>
            <PrimaryButton text='확인'></PrimaryButton>
            <NormalButton text='닫기'></NormalButton>
            <SecondaryButton
                text="지역정보보기"
                backgroundColor={NemoColor.redpink10}
                color={NemoColor.redpink50}/>
            <SecondaryButton
                text="닫기"
                backgroundColor={NemoColor.Slategray10}
                color={NemoColor.Slategray90} />
            <Label
                onPress={() => {
                    //dispatch(login({email: 'jwlee@sugarhill.co.kr', password: 'test8282'}));
                }}>로그인3</Label>
        </Container>
    )
}

export default Login;