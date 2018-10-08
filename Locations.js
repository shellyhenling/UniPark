import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

const showAlert = () => {
      Alert.alert(
         "Now we show the Location!"
      )
   }

export class Locations extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image 
                style={{width: 250, height: 200}}
                source={require('./CarInLot.png')}
                flex='true'
              />
          </View>
          <Text></Text>
          <Text></Text>
          <Text style= {{ fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center'}}>
          Please select your desired parking area
          </Text>    
          <Text></Text>
          <Text></Text>
          <Button onPress={() => this.props.navigation.navigate('Location1')}
          title="South Campus Parking Garage" 
          color="#FFF"
          icon={{name: 'directions-car'}}
          fontSize={21}
          backgroundColor="#70bcff"
          padding={10}
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button onPress={() => this.props.navigation.navigate('Location2')}
          title="West Campus Parking" 
          color="#FFF"
          icon={{name: 'directions-car'}}
          fontSize={21}
          backgroundColor="#70bcff"
          padding={10}
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button onPress={() => this.props.navigation.navigate('Location3')} 
          title="Main Campus Parking" 
          color="#FFF"
          icon={{name: 'directions-car'}}
          fontSize={21}
          backgroundColor="#70bcff"
          padding={10}
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button onPress={() => this.props.navigation.navigate('Location4')}
          title="SAC Parking Garage" 
          color="#FFF"
          icon={{name: 'directions-car'}}
          fontSize={21}
          backgroundColor="#70bcff"
          padding={10}
          rounded={false}
          borderRadius={10}
          size={15}
          />
         </ScrollView>
      </View>
    )
  }
};

export default Locations;