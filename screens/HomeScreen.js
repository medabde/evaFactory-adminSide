import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator, 
} from 'react-native';


import firebase from '../firebase'

export default class HomeScreen extends React.Component{
  state = {
    students: []
  };
  
  componentDidMount() {
    this.setState({animating:true})
    firebase.database().ref('Students/').once('value', (snapshot) => {
      var data=snapshot.val()
      var items=Object.values(data)
      this.setState({students:items})
      this.setState({animating:false})
    });
  }
  render() {
    const animating = this.state.animating
    
    return (
      <View style={styles.container}>
        {this.state.students.map(student => {
          return (<Text>{student.name}</Text>)
        })}
        <ActivityIndicator size="large" animating={animating} />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title:"Students"
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: '#fff',
  },
})

