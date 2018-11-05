// Settings.js

import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';



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
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Tile
            imageSrc={require('./ParkingLotTile2.jpg')}
            title="Our mission was to create an app that shows users where the closest available parking spot is located."
            featured
            caption="-UniPark Founders, 2018"
            height={220}
            />
            <Text></Text>
            <Text></Text>
            <Text style= {{ flexDirection: 'row', textAlign: 'center', fontSize: 20, padding: 20}}>
            We would accomplish this by placing a device on each spot to detect the presence of a car. This data would be communicated to the app in real time for the users to view open parking spots.
            </Text>
            <Text></Text>
            <Text></Text>
            <Tile
            imageSrc={require('./ParkingLotTile.jpg')}
            title="'Wow! I love UniPark!''"
            featured
            caption="- Shelly Henling"
            height={170}
            />
            <Text></Text>
            <Text></Text>
            <Text style= {{ flexDirection: 'row', textAlign: 'center', fontSize: 20, padding: 20}}>
            For this project, the current plan is to create and test the technology on the smaller lot near Klekotka Hall to ensure success. Ideally, this will be able to be implemented on a larger scale on West Campus and in the University.
            </Text>
            <Text></Text>
            <Text>Watch the Video:</Text>
            <Tile
            imageSrc={require('./VideoPic.jpg')}
            icon={{ name: 'play-circle', type: 'font-awesome' }}
            featured
            />
            <Text></Text>
          </View>
         </ScrollView>
      </View>
    )
  }
};

export default About;