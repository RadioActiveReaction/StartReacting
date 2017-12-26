import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from './SignUpScreen';

const App = StackNavigator({
    LoginScreen: { screen: LoginScreen },
    WelcomeScreen: { screen: WelcomeScreen },
    SignUpScreen: { screen: SignUpScreen },
})

export default App;
