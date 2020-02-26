import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import styles from '../assets/styles';

export default class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0
        };
      }

    render() {
        return (
        <View style={styles.view}>
            <Text>{this.state.clicks}</Text>
            <Button
            title="BUTTON"
            onPress={this.IncrementItem}
            />
        </View>
        );
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
}