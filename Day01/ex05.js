import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View
} from 'react-native';
import styles from '../assets/styles';

export default class MyApp extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.viewBlockPink}/>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.viewBlockRed}/>
                        <View style={styles.viewBlockRed}/>
                        <View style={styles.viewBlockRed}/>
                    </View>
                    <View style={styles.viewBlockPink}/>
                    <View style={styles.viewBlockRed}/>
                    <View style={styles.viewBlockPink}/>
                    <View style={styles.viewBlockPink}/>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.viewBlockRed}/>
                        <View style={styles.viewBlockRed}/>
                    </View>
                    <View style={styles.viewBlockPink}/>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.viewBlockRed}/>
                        <View style={styles.viewBlockRed}/>
                        <View style={styles.viewBlockRed}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}