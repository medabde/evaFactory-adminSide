import React from 'react'
import { Image,View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from './../firebase'

export default class Loading extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          setTimeout(() => {
            this.props.navigation.navigate(user ? 'HomeStack' : 'AuthStack');
          }, 1500);
          })
    }
    render() {
        return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../eva.png')} />
            {/* <ActivityIndicator size="large" /> */}
        </View>
    )}
}

Loading.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#023859',
  },
  logo: {
    width: 300,
    height: 200,
  }
})