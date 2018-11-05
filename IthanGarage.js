import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

const component1 = () => <Text>Floor 1</Text>
const component2 = () => <Text>Floor 2</Text>
const component3 = () => <Text>Floor 3</Text>

export class IthanGarage extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }
  
  render () {
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    const { selectedIndex } = this.state
    return (
      <View>
      <Text style= {{ fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center', paddingVertical: 20}}>
       Please select your desired floor:</Text>
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 50}} />
        </View>
    )
  }
};

export default IthanGarage;