import React, { Component } from 'react';
import {
  View,
  Button,
  Alert
} from 'react-native';
import styles from './assets/styles';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Button
          title="BUTTON"
          onPress={() => Alert.alert('Hello, World !')}
        />
      </View>
    );
  }
}