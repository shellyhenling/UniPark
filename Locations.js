// Settings.js

import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';



const showAlert = () => {
      Alert.alert(
         "Now we show the Location!"
      )
   }

export class Locations extends Component {
  render() {
    return (
      <View>
        <Text style= {{ fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center'}}>
        Please select your desired parking area
        </Text>    
        
        
        <Button onPress={() => this.props.navigation.navigate('Location1')}
         title="Location 1" 
         color="#428ff4"
         />
         <Button onPress={showAlert} 
         title="Location 2" 
         color="#428ff4"
         />
         <Button onPress={showAlert} 
         title="Location 3" 
         color="#428ff4"
         />
         <Button onPress={showAlert} 
         title="Location 4" 
         color="#428ff4"
         />
      
      </View>
    )
  }
};

export default Locations;