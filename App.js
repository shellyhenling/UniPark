import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
import Home from './Home';
import About from './About';
import Locations from './Locations';
import Villanova from './Villanova';
import IthanGarage from './IthanGarage';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppNavigator = createStackNavigator({
  HomeScreen: { 
    screen: Home,
    navigationOptions: () => ({
    title: 'Home',
    headerStyle: {
      backgroundColor: '#70bcff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'Home',
    }),
   },
  About: { 
    screen: About,
    navigationOptions: () => ({
    title : 'About',
    headerStyle: {
      backgroundColor: '#70bcff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'About',
    }),
  },
  LocationScreen: { 
    screen: Locations,
    navigationOptions: () => ({
    title : 'Locations',
    headerStyle: {
      backgroundColor: '#70bcff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'Locations',
    }),
  },
  Villanova: { 
    screen: Villanova,
    navigationOptions: () => ({
    title : 'Villanova',
    headerStyle: {
      backgroundColor: '#70bcff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'Villanova',
    }),
  },
  IthanGarage: { 
    screen: IthanGarage,
    navigationOptions: () => ({
    title : 'Ithan Garage',
    headerStyle: {
      backgroundColor: '#70bcff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: 'Ithan Garage',
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
