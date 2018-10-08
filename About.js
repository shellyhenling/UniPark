// Settings.js

import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button, Divider, Header, Icon, Avatar } from 'react-native-elements';



const showAlert = () => {
      Alert.alert(
         "Now we show the Location!"
      )
   }

export class About extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style= {{ fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center', padding: 20}}>
            About UniPark
            </Text>
          </View>
         </ScrollView>
      </View>
    )
  }
};

export default About;