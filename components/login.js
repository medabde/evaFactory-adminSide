import React ,{Component} from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import Firebase from './../firebase'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  
  handleLogin = (email, password) => {
    try {
      Firebase.auth().signInWithEmailAndPassword(email.trim(), password).then((res) => {
          console.log("logged in!")
          this.props.navigation.navigate('App');
      }).catch(function(error) {
        alert(error.toString())
      })
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={() => this.handleLogin(this.state.email, this.state.password)} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})