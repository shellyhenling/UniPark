// App.js

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import firebase from 'firebase';
import Locations from './Locations';
import Home from './Home';
import Location1 from './Location1'
import ListItem from './ListItem'
import Spot from './Spot'

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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
  Spot: {
    screen: Spot,
    navigationOptions: () => ({
    title : 'Location 1 Spots',
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
