import React, { Component } from 'react';
import { View, Text , ScrollView, Image, Badge} from 'react-native';

export class Location1 extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text style= {{ lineHeight: 50 , fontSize: 30, fontWeight : 'bold' , color: '#ff2828' , textAlign: 'center'}}>
          South Campus Parking Garage</Text>
          <Image
            style={{width: 375, height: 300}}
            source={{uri: 'http://www.speedworlddragway.com/wp-content/uploads/2015/06/Car-Park.jpg'}}
            resizeMode= "center"
          />
          <Text style= {{ lineHeight: 50 , fontSize: 20, color: '#ff2828' , textAlign: 'left', paddingHorizontal: 10}}>
          Available spots: 35</Text>
          <Text style= {{ lineHeight: 50 , fontSize: 20, color: 'black' , textAlign: 'left', paddingHorizontal: 10}}>
          Occupied spots: 20</Text>
          <Text style= {{ lineHeight: 50 , fontSize: 20, color: 'black' , textAlign: 'left', paddingHorizontal: 10}}>
          Total spots: 55</Text>
        </View>
      </ScrollView>
    )
  }
}

export default Location1