import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';


export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  };

  export default ButtonBasics;