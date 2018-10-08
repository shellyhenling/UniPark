import React, { Component } from 'react';
import { View, Text , Button, Image} from 'react-native';

export class Location1 extends Component {
  render() {
    return (
      <View>
        <Text style= {{ lineHeight: 50 , fontSize: 30, fontWeight : 'bold' , color: 'black' , textAlign: 'center'}}>
        Location 1 Parking Availability</Text>
        <Image
          style={{width: 375, height: 300}}
          source={{uri: 'http://www.speedworlddragway.com/wp-content/uploads/2015/06/Car-Park.jpg'}}
          resizeMode= "center"
        />
      </View>
    )
  }
}