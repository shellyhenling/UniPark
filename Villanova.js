import React, { Component } from 'react';
import { View, Text, Alert, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

const showAlert = () => {
      Alert.alert(
         "Oops! Location still under development"
      )
   }

export class Villanova extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'center', padding: 10}}>
              <Image 
                  style={{width: 250, height: 250}}
                  source={require('./NovaPark.png')}
                  flex='true'
                />
          </View>

          <Text style= {{ fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center', paddingVertical: 20}}>
          Please select your location
          </Text>  

          <Button onPress={() => this.props.navigation.navigate('IthanGarage')}
          title="Ithan Garage" 
          color="#FFF"
          fontSize={21}
          backgroundColor="#70bcff"
          rounded={false}
          borderRadius={10}
          padding={5}
          size={15}
          />
          <Text></Text>
          <Button onPress={showAlert} 
          title="Law School Garage" 
          color="#FFF"
          fontSize={21}
          backgroundColor="#70bcff"
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button onPress={showAlert} 
          title="SAC Garage" 
          ccolor="#FFF"
          fontSize={21}
          backgroundColor="#70bcff"
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button onPress={showAlert} 
          title="West Campus" 
          color="#FFF"
          fontSize={21}
          backgroundColor="#70bcff"
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button onPress={showAlert} 
          title="Mendel Parking Lot" 
          color="#FFF"
          fontSize={21}
          backgroundColor="#70bcff"
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Button onPress={showAlert} 
          title="South Campus Parking Lot" 
          color="#FFF"
          fontSize={21}
          backgroundColor="#70bcff"
          rounded={false}
          borderRadius={10}
          size={15}
          />
          <Text></Text>
          <Text></Text>
        </ScrollView>
      </View>
    )
  }
};

export default Villanova;