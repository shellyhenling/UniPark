import React, { Component } from 'react';
import { View, Text, Image, Alert, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

const showAlert = () => {
      Alert.alert(
        "Oops! Location still under development"
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

          <Text style= {{ fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center', paddingBottom: 40, paddingTop: 20}}>
          Please select your desired parking area
          </Text>

          <Button onPress={() => this.props.navigation.navigate('Villanova')}
          title="Villanova University" 
          color="#FFF"
          icon={{name: 'directions-car'}}
          fontSize={21}
          backgroundColor="#70bcff"
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button onPress={showAlert}
          title="Giant Grocery Store" 
          color="#FFF"
          icon={{name: 'directions-car'}}
          fontSize={21}
          backgroundColor="#70bcff"
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button Button onPress={showAlert}
          title="Suburban Square" 
          color="#FFF"
          icon={{name: 'directions-car'}}
          fontSize={21}
          backgroundColor="#70bcff"
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button onPress={showAlert}
          title="King of Prussia" 
          color="#FFF"
          icon={{name: 'directions-car'}}
          fontSize={21}
          backgroundColor="#70bcff"
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