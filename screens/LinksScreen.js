import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import firebase from '../firebase'

export default class LinksScreen extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    this.setState({animating:true})
    firebase.database().ref('Courses/').once('value', (snapshot) => {
      var data=snapshot.val()
      var items=Object.values(data)
      this.setState({courses:items})
      this.setState({animating:false})
    });
  }

  render(){
    const animating = this.state.animating
    return (
      <View style={styles.container}>
        
        {this.state.courses.map(course => {
          return (<Text>{course.name}</Text>)
        })
        }

      <ActivityIndicator size="large" animating={animating} />
        
      </View>
    );
  }
}

LinksScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
