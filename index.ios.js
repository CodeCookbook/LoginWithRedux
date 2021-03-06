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

class LoginWithRedux extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder="Username"/>
      <TextInput style={styles.textInput} placeholder="Password"/>
      <TouchableHighlight style={{padding: 15, backgroundColor: '#fed136'}}>
        <Text style={styles.welcome}>
          Get Cookin'
        </Text>
      </TouchableHighlight>
      </View>
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
