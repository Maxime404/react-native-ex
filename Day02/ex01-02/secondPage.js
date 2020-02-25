import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import styles from '../../assets/styles';

export default class FirstPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      test: 'STFU'
    };
  }

  render() {
    const { params } = this.props.route;
    //const name = params ? params.name : null;
    const text = params ? params.text : null;
    
    return (
      <View style={styles.view}>
        <Text>{text}</Text>
        <Button
        title="Back to the first page"
        onPress={() => this.props.navigation.navigate('FirstPage', {name: 'First Page'})}
      />
    </View>
    );
  }
}