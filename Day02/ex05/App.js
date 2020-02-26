import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../../assets/styles';

export default class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markers: [
                {
                    latitude: 27.9879017,
                    longitude: 86.9253141
                }
            ]
        }
    }

    addMarker = (e) => {
        this.setState({
            markers: [...this.state.markers, {
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude
            }]
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <MapView
                    style={{ flex: 1 }}
                    showsUserLocation={true}
                    onLongPress={(e) => this.addMarker(e)}
                >
                    {this.state.markers.map((marker) =>
                        <Marker
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}
                            title={"title"}
                            description={"description"}
                        />
                    )}
                </MapView>


            </SafeAreaView>
        );
    }
}
