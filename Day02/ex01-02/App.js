import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from './firstPage';
import SecondPage from './secondPage';

const Stack = createStackNavigator();

export default class MyApp extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{title: 'First page here !'}}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{title: 'Second page here !'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}