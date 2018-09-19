// Settings.js

import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import ButtonBasics from './ButtonBasics';
export class Locations extends Component {
  render() {
    return (
      <View>
        <Text>Please select your desired parking area</Text>
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
        <Button onPress={this._onPressButton} 
         title='Location 1' 
         />
      </View>
    )
  }
};

export default Locations;