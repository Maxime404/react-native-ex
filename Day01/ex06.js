import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TextInput,
    Text,
    Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../assets/styles';

export default class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destinations: [
                {text: "France", checked: false},
                {text: "Italie", checked: false},
                {text: "Canada", checked: false},
                {text: "Japon", checked: false},
                {text: "Népal", checked: false},
            ],
            text: ''
        };
    }

    addDestination = () => {
        const found = this.state.destinations.some(destination => destination.text.toLowerCase() === this.state.text.toLowerCase());

        if (!found) {
            this.setState({ destinations: [...this.state.destinations, {text: this.state.text, checked: false}] });
            this.setState({ text: '' });
        } else {
            Alert.alert('Error', this.state.text + ' already exist in this list...'); 
        }
    }

    updateDestinationChecking(item) {
        this.setState(prevState => ({
            destinations: prevState.destinations.map(
              destination => destination.text === item.text
                ? { ...destination, checked:  item.checked ? false : true }
                : { ...destination, ...destination }
            ) 
        }))
    }

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.viewInput}>
                    <TextInput
                        style={{height: 30, width: 300, borderBottomWidth : 1.0, marginRight: 5}}
                        placeholder="Enter a destination..."
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Button
                        style={{height: 40}}
                        title="Add"
                        type="clear"
                        onPress={this.addDestination}
                    />
                </View>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.viewList}>
                        {this.state.destinations.map((item) => 
                            <Text 
                                style={[styles.h2, item.checked ? styles.lineThrough : styles.h2]}
                                key={item.text} 
                                onPress={() => this.updateDestinationChecking(item)}>
                                    {item.text}
                            </Text>
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}