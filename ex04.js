import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image
} from 'react-native';
import styles from './assets/styles';

export default class HelloWorldApp extends Component {
    render() {
        return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.text}>Header</Text>
            </View>
            <View style={styles.viewTop}>
                <Text>Hello</Text>
                <Image
                    style={styles.img}
                    source={require('./assets/image.png')}
                />
            </View>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </SafeAreaView>
        );
    }
}