// App.js

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Locations from './Locations';
import Home from './Home';
import Location1 from './Location1'

const AppNavigator = createStackNavigator({
  HomeScreen: { 
    screen: Home,
    navigationOptions: () => ({
    title: 'Home',
    headerStyle: {
      backgroundColor: '#428ff4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'Home',


    }),

   },
  LocationScreen: { 
    screen: Locations,
    navigationOptions: () => ({
    title : 'Locations',
    headerStyle: {
      backgroundColor: '#428ff4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'Locations',
    }),
  },
  Location1: {
    screen: Location1,
    navigationOptions: () => ({
    title : 'Location 1',
    headerStyle: {
      backgroundColor: '#428ff4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    }),


  }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
