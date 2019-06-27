import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import firebase from './../firebase'

import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
    <Text>screens/HomeScreen.js</Text>
    <Button
      onPress={() => {
        firebase.auth().signOut()
        .then(()=> {
          this.props.navigation.navigate('AuthLoading');
        })
        .catch((error) =>{
          // alert("hello "+error)
          console.log(error)
        });
      }}
      title="log-out"
    />

    </View>);
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
  header: null
};
