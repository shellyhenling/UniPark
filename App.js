import { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
import React from 'react';
import Home from './Home';
import About from './About';
import Locations from './Locations';
import Location1 from './Location1';
import Location2 from './Location2';
import Location3 from './Location3';
import Location4 from './Location4';

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
  Location1: {
    screen: Location1,
    navigationOptions: () => ({
    title : 'Location 1',
    headerStyle: {
      backgroundColor: '#70bcff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    }),
  },
  Location2: {
    screen: Location2,
    navigationOptions: () => ({
    title : 'Location 2',
    headerStyle: {
      backgroundColor: '#70bcff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    }),
  },
  Location3: {
    screen: Location3,
    navigationOptions: () => ({
    title : 'Location 3',
    headerStyle: {
      backgroundColor: '#70bcff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    }),
  },
  Location4: {
    screen: Location4,
    navigationOptions: () => ({
    title : 'Location 4',
    headerStyle: {
      backgroundColor: '#70bcff',
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
