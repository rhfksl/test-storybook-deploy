import React, { useEffect, useRef } from 'react';
import NormalButton from './components/button/NormalButton';
import styled from 'styled-components/native';
import PrimaryButton from './components/button/PrimaryButton';
import SecondaryButton from './components/button/SecondaryButton';
import NormalImageButton from './components/button/NormalImageButton';
import PrimaryImageButton from './components/button/PrimaryImageButton';
import SecondaryImageButton from './components/button/SecondaryImageButton';
import CircleImageButton from './components/button/CircleImageButton';
import RoundButton from './components/button/RoundButton';
import RoundImageButton from './components/button/RoundImageButton';
import LoginButton from './components/button/LoginButton';
import OptionButton from './components/button/OptionButton';
import OptionImageButton from './components/button/OptionImageButton';
import BaseTag from './components/tag/base/BaseTag';
import NormalTag from './components/tag/NormalImageTag';
import NormalTag1 from './components/tag/NormalTag1';
import NormalTag2 from './components/tag/NormalTag2';
import RealPriceTag from './components/tag/RealPriceTag';
import BaseImage from './components/image/base/BaseImage';
import RoundImage from './components/image/RoundImage';
import { ScrollView as SV, ScrollViewComponent, ScrollViewProps } from 'react-native';
import CircleImage from './components/image/CircleImage';
// import CircleImage from './components/image/CircleImage';

const TestScreen = () => {
  const scrollViewRef = useRef<null | SV>(null);

  return (
    <>
      <SafeAreaView
        style={{ flex: 1, }}>
        <Container>
          <ScrollView
          >
            <View>
              <NormalButton text="Normal Button" onPress={() => { console.log("hello world") }} />
              <DevideView />
              <PrimaryButton text="Primary Button" onPress={() => { console.log("hello world 2") }} />
              <DevideView />
              <SecondaryButton text="Secondary Button" onPress={() => { console.log("hello world 3") }} />
              <DevideView />
              <NormalImageButton text="Normal Image Button" imageSource={require('~/assets/image/ic_common_phone_24_black.png')} />
              <DevideView />
              <PrimaryImageButton text="Primary Image Button" imageSource={require('~/assets/image/ic_common_phone_20_white.png')} />
              <DevideView />
              <SecondaryImageButton text="Secondary Image Button" imageSource={require('~/assets/image/icCommonPhone24Red.png')} />
              <DevideView />
              <CircleImageButton imageSource={require('~/assets/image/ic_noimg_people_60_gray.png')} />
              <DevideView />
              <RoundButton width="150px" text='Round Button' />
              <DevideView />
              <RoundImageButton text="Round Image Button" imageSource={require('~/assets/image/ic_common_phone_24_black.png')} />
              <DevideView />
              <LoginButton text="Login Button" imageSource={require('~/assets/image/ic_kakao_24_colors.png')} />
              <DevideView />
              <OptionButton text="주변" />
              <DevideView />
              <OptionImageButton imageSource={require('~/assets/image/ic_common_roadview_24_black.png')} />
              <DevideView />
              <NormalTag
                width="58px"
                text="프리미엄"
                imageSource={require('~/assets/image/ic_common_crown_2_12_white.png')}
                backgroundColor="#ce9f19"
                fontColor="white"
              />
              <DevideView />
              <NormalTag1 width="91px" text="확인점포 20. 12. 25" />
              <DevideView />
              <NormalTag1 width="47px" text="가격조정" borderColor="#288cf9" fontColor="#288cf9" />
              <DevideView />
              <NormalTag2 width="37px" text="일식점" />
              <DevideView />
              <NormalTag2 width="28px" text="카페" backgroundColor="#8b4825" />
              <DevideView />
              <RealPriceTag width="103px" text="실거래가 20. 07. 25" />
              <DevideView />
              <BaseImage width="100px" height="100px" imageSource={require('~/assets/image/img_nemogirl_100_color.png')} />
              <DevideView />
              <RoundImage imageSource={require('~/assets/image/img_nemogirl_100_color.png')} />
              <DevideView />
              <CircleImage imageSource={require('~/assets/image/img_nemogirl_100_color.png')} />
            </View>
          </ScrollView>
        </Container>
      </SafeAreaView>
    </>
  );
};

const ScrollView = styled.ScrollView`
  flex: 1;
  /* flex-direction: column; */
  /* height: 500px; */
  /* background-color: red; */
`;

const DevideView = styled.View`
  height: 5px;
`;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;
const Text = styled.Text`
  /* background-color: red; */
`;

const View = styled.View`
  /* flex-direction: row; */
  flex-grow: 1;
  background-color: yellowgreen;
  margin-left: 16px;
  margin-right: 16px;
  /* height: 500px; */
`;

const ViewLeftItem = styled.View`
  flex-direction: row;
  flex: 1;
  margin-right: 7px;
`;

const ViewRightItem = styled.View`
  flex-direction: row;
  flex: 1;
  margin-left: 7px;
`;


const SafeAreaView = styled.SafeAreaView`
`;

export default TestScreen;
