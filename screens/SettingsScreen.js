import React from 'react';
import firebase from './../firebase'

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

export default class SettingsScreen extends React.Component{
  render(){
    return(
    <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../eva.png')} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Eva Factory</Text>
              <Text style={styles.info}>Innovation au Maroc : un écosystème à soutenir</Text>
              <Text style={styles.description}>Eva Factory une agence de Marketing Digital et de l'Ingénierie Informatique implantée à Oujda, est spécialisée dans les nouvelles formes de transformations digitales.</Text>
                            
              <TouchableOpacity style={styles.buttonContainer}
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
              >
                <Text>Log out</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#023859",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:14,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});