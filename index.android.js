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
  View
} from 'react-native';

class LoginWithRedux extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Code Cookbook
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('LoginWithRedux', () => LoginWithRedux);
