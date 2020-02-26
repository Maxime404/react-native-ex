import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styles from '../../assets/styles';

export default class MyApp extends Component {
    render() {

        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );

        return (
            <View style={styles.view}>
                <Text style={styles.title}>Hello</Text>
            </View>
        );
    }
}