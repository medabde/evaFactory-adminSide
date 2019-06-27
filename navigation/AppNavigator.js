import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../components/login'
import Loading from '../components/loading'

const AppStack = createStackNavigator({ Home: MainTabNavigator });
const AuthStack = createStackNavigator({ SignIn: Login });

export default createAppContainer(
  createSwitchNavigator(
  {
    AuthLoading: Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

