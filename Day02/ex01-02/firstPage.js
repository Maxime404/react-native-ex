import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button
} from 'react-native';
import styles from '../../assets/styles';

export default class FirstPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
        text: ''
    };
  }

  post = () => {
    this.props.navigation.navigate('SecondPage', {name: 'Second Page', text: this.state.text});
    this.setState({ text: '' });
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.viewInput}>
                    <TextInput
                        style={{height: 30, width: 300, borderBottomWidth: 1.0, marginRight: 5}}
                        placeholder="Enter a destination..."
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Button
                      style={styles.button}
                      title="Go"
                      //onPress={() => this.props.navigation.navigate('SecondPage', {name: 'Second Page', text: this.state.text})}
                      onPress={this.post}
                    />
                </View>
      </View>
    );
  }
}