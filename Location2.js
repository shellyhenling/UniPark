import React, { Component } from 'react';
import { View, Text , ScrollView, Image} from 'react-native';

export class Location2 extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Text style= {{ lineHeight: 50 , fontSize: 30, fontWeight : 'bold' , color: 'black' , textAlign: 'center'}}>
          West Campus Parking</Text>
          <Image
            style={{width: 375, height: 300}}
            source={{uri: 'http://www.speedworlddragway.com/wp-content/uploads/2015/06/Car-Park.jpg'}}
            resizeMode= "center"
          />
        </View>
      </ScrollView>
    )
  }
}

export default Location2