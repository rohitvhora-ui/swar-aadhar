import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';


const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Splash" component={SplashScreen} />
            <RootStack.Screen name="SignInScreen" component={SignInScreen} />
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
            <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </RootStack.Navigator>
    )
}

export default RootStackScreen;
