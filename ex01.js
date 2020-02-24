import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './assets/styles';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>Hello</Text>
      </View>
    );
  }
}