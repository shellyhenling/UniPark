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
          <View>
            <Text style= {{ flexDirection: 'row', justifyContent: 'center', fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center', padding: 20}}>
            About UniPark
            </Text>
            <Text style= {{ flexDirection: 'row', textAlign: 'center', fontSize: 18, padding: 20}}>
            Our mission is to create an app that shows users where the closest available parking spot is located. We would accomplish this by placing a device on each spot to detect the presence of a car. This data would be communicated to the app in real time for the users to view open parking spots. For this project, the current plan is to create and test the technology on the smaller lot near Klekotka Hall to ensure success. Ideally, this will be able to be implemented on a larger scale on West Campus and in the University.
            </Text>
          </View>
         </ScrollView>
      </View>
    )
  }
};

export default About;