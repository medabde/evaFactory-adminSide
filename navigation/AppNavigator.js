import React from 'react';
import { Platform } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';

import Login from '../components/login'
import Loading from '../components/loading'


import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AuthStack = createStackNavigator({ SignIn: Login });
const AuthLoading = createStackNavigator({ Loading });

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  header: null,
  tabBarLabel: 'Students',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-person${focused ? '' : '-outline'}`
          : 'md-person'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Courses',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-information-circle'}
    />
  ),
};

const bottNav=createBottomTabNavigator({HomeStack,LinksStack,SettingsStack})
const RootSwitch = createSwitchNavigator({ AuthLoading, bottNav,AuthStack });

export default createAppContainer(
  createSwitchNavigator(
  {
    AuthLoading: Loading,
    App: RootSwitch,
    //Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

