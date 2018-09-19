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

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  LocationScreen: { screen: Locations }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
