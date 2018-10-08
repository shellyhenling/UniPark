import React, { Component } from 'react';
import { View, Text , Image, ScrollView} from 'react-native';
import { Button } from 'react-native-elements';

export class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{padding: 20, alignContent: 'center'}}>
          <Image 
            style={{width: 332, height: 399}}
            source={require('./Logo2.png')}
            alignContent='center'
          />
         <Text></Text>
            <Button 
              onPress={() => this.props.navigation.navigate('LocationScreen')} title="Locations"
              icon={{name: 'add-location'}}
              fontSize={21}
              backgroundColor="#70bcff"
              padding={10}
              rounded={false}
              borderRadius={10}
              size={15}
            />
            <Text></Text>
            <Button 
              onPress={() => this.props.navigation.navigate('About')} title="About"
              icon={{name: 'book'}}
              fontSize={21}
              backgroundColor="#70bcff"
              padding={10}
              rounded={false}
              borderRadius={10}
              size={15}
            />
        </View>
      </ScrollView>
    )
  }
}

export default Home