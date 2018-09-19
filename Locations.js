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
        <Text>Please select your desired parking area</Text>    
        {/* dont need this really <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>  */}
        
        <Button onPress={showAlert}  
         title="Location 1" 
         />
         <Button onPress={showAlert} 
         title="Location 2" 
         />
         <Button onPress={showAlert} 
         title="Location 3" 
         />
         <Button onPress={showAlert} 
         title="Location 4" 
         />
      
      </View>
    )
  }
};

export default Locations;