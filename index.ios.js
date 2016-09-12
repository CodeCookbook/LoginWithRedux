/**





  How to build a React Native
  Login Form with Redux

  A recipe from Code Cookbook
  http://codecookbook.co







 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const TYPE_USERNAME = 'TYPE_USERNAME';
const typeUsername = (text) => ({
  type: TYPE_USERNAME,
  text
})

const LoginFormTextInput = connect((state) => ({
  value: state.username
}), (dispatch) => ({
  onChangeText: (text) => {
    dispatch(typeUsername(text));
  }
}))(TextInput)

class LoginWithRedux extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      pendingLoginRequest: false
    };
    this.store = createStore((state, action) => {
      console.log(JSON.stringify(action));
      return {...state, username: action.text}
    }, this.state);
  }


  render() {
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
        <LoginFormTextInput style={styles.textInput} placeholder="Username"/>
        <TextInput style={styles.textInput} placeholder="Password"/>
        <TouchableHighlight style={{padding: 15, backgroundColor: '#fed136'}}>
          <Text style={styles.welcome}>
            Get Cookin'
          </Text>
        </TouchableHighlight>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 40,
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    color: 'white'
  }
});

AppRegistry.registerComponent('LoginWithRedux', () => LoginWithRedux);
