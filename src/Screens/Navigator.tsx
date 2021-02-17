import React, { useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './Login';
import Signup from './Signup';

import Home from './Home';
import More from './More';
import Favorite from './Favorite';

import StoreTradeGate from './StoreTradeGate';
import DataLabGate from './DataLabGate';
import ArticleMap from './ArticleMap';
import Search from './Search';
import ArticleDetailView from './ArticleDetailView';
import AgentMiniHome from './AgentMiniHome';
import EditProfile from './Profile/EditProfile';
import ChangePassword from './Profile/ChangePassword';
import ChangeTelephone from './Profile/ChangeTelephone';

const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login} />
            <Stack.Screen
                name="Signup"
                component={Signup} />
        </Stack.Navigator>
    )
}

const HomeTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => null
                }} />
        </Stack.Navigator>
    )
}

const FavoriteTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    header: () => null
                }} />
        </Stack.Navigator>
    )
}

const MoreTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="More"
                component={More}
                options={{
                    header: () => null
                }} />
        </Stack.Navigator>
    )
}

const TabsNavigator = () => {
    return (
        <BottomTab.Navigator
            tabBarOptions={{ showLabel: true }}>
            <BottomTab.Screen
                name="HomeTab"
                component={HomeTab}
                options={{
                    title: "홈"
                }} />

            <BottomTab.Screen
                name="FavoriteTab"
                component={FavoriteTab}
                options={{
                    title: "관심매물"
                }} />

            <BottomTab.Screen
                name="MoreTab"
                component={MoreTab}
                options={{
                    title: "더보기"
                }} />
        </BottomTab.Navigator>
    )
}

const profileScreens = {
    EditProfile: EditProfile,
    ChangePassword: ChangePassword,
    ChangeTelephone: ChangeTelephone
}

const loginScreens = {
    Login: Login,
    Signup: Signup,
}

const isLoggedIn: boolean = true

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {Object.entries({
                    ...(isLoggedIn ? loginScreens : null)
                }).map(([name, component]) => (
                    <Stack.Screen key={`login-${name}`} name={name} component={component} />
                ))}
                <Stack.Screen
                    name="Tabs"
                    component={TabsNavigator} />
                <Stack.Screen
                    name="StoreTradeGate"
                    component={StoreTradeGate}
                    options={{
                        //header: () => null
                        title: "점포거래게이트"
                    }} />
                <Stack.Screen
                    name="DataLabGate"
                    component={DataLabGate}
                    options={{
                        //header: () => null
                        title: "데이터랩게이트"
                    }} />
                <Stack.Screen
                    name="ArticleMap"
                    component={ArticleMap}
                    options={{
                        //header: () => null
                        title: "지도"
                    }} />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{
                        //header: () => null
                        title: "검색"
                    }} />
                <Stack.Screen
                    name="ArticleDetailView"
                    component={ArticleDetailView}
                    options={{
                        //header: () => null
                        title: "매물상세"
                    }} />
                <Stack.Screen
                    name="AgentMiniHome"
                    component={AgentMiniHome}
                    options={{
                        //header: () => null
                        title: "중개사미니홈"
                    }} />
                {Object.entries({
                    ...(isLoggedIn ? profileScreens : null)
                }).map(([name, component]) => (
                    <Stack.Screen key={`profile-${name}`} name={name} component={component} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    )
}