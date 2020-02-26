import React, { Component } from "react";
import {
    Text,
    View,
    Alert,
    Button,
    SafeAreaView
} from "react-native";
import styles from '../../assets/styles';

export default class MyApp extends Component {
    state = {
        location: null,
        latitude: null,
        longitude: null
    };

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);
                const latitude = JSON.stringify(position.coords.latitude);
                const longitude = JSON.stringify(position.coords.longitude);

                this.setState({ location, latitude, longitude });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    reset = () => {
        if (this.state.location) {
            this.setState({ location: null, latitude: null, longitude: null });
        } else {
            Alert.alert('Nothing to delete...');
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.view}>
                    <Button
                        style={styles.button}
                        title={!this.state.location ? "Get my current position" : "Refresh my current position"}
                        onPress={this.findCoordinates}
                    />
                    <Button
                        style={styles.button}
                        title="Reset"
                        onPress={this.reset}
                    />
                    <View style={{paddingTop: 20}}>
                        <Text>Latitude: {this.state.latitude}</Text>
                        <Text>Longitude: {this.state.longitude}</Text>
                    </View>
                </View>
            </SafeAreaView>

        );
    }
}