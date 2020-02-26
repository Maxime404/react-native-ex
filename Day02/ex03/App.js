import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FirstPage from './firstPage';
import SecondPage from './secondPage';

const { width } = Dimensions.get("window");

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Icon
          name="menu"
          size={20}
          style={{textAlign: 'right', paddingHorizontal: 10}}
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator({
  FirstPage: {
    screen: FirstPage,
    navigationOptions: {
      title: 'First page'
    }
  },
  SecondPage: {
    screen: SecondPage,
    navigationOptions: {
      title: 'Second page'
    }
  }
},
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2
  });

const App = createAppContainer(Drawer);

export default App;