import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ItemComponent from './ItemComponent';
import Firebase from 'firebase';
import { db } from './db';

export default class Spot extends Component {

    state = {
  Spot1: 'False',
  Spot2: 'False'
}
Spot1Ref = db.ref('/Spots/Spot1')
Spot2Ref = db.ref('/Spots/Spot2')

componentWillMount(){
  this.Spot1Ref.on('value', snapshot=> {
    this.setState({
      Spot1: snapshot.val() 
  
    })
  })
   this.Spot2Ref.on('value', snapshot=> {
    this.setState({
      Spot2: snapshot.val() 
  
    })
  })
}
   
    render() {
        const OpenMessage = <Text> This Spot is Available! </Text>
        const OccupiedMessage = <Text> This Spot is Occupied! </Text>
        
        return (
            <View>
                {
                    <Text style= {{ fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center'}}> 
                    Spot 1 : {this.state.Spot1}   {"\n"}
                    Spot 2 : {this.state.Spot2} 
                    </Text>
                }
            </View>
            )

    }
}
