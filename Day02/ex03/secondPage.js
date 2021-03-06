import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../assets/styles';

export default class SecondPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerGrey}>
          <Icon name="menu" style={styles.icon} onPress={() => this.props.navigation.openDrawer()}/>
          <Text style={{ color: 'white' }}>First page</Text>
          <Icon name="home" style={styles.icon} onPress={() => Alert.alert('Go home !')}/>
        </View>
        <View style={styles.view}>
          <Text style={styles.h2}>Second page here !</Text>
        </View>
      </SafeAreaView>
    );
  }
}