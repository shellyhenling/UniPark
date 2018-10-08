import React, { Component } from 'react';
import { View, Text , ScrollView, Image, Badge} from 'react-native';
import { db } from './db'

export class Location1 extends Component {

 state = {
  Spot1: 'False',
  Spot2: 'False',
  Spot3: 'False',
  Spot4: 'False',
  Spot5: 'False',
  Spot6: 'False',
  Spot7: 'False',
  Spot8: 'False'
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
    return (
      <ScrollView>
        <View style={{padding:20}}>
          <Text style= {{ fontSize: 24, fontWeight : 'bold' , color: '#000' , textAlign: 'center'}}>
          South Campus Parking Garage {"\n"} </Text>
          <Image 
            style={{width: 335, height: 200}}
            source={require('./WestCampusLot.png')}
            alignContent='center'
          />
          <Text style= {{ lineHeight: 50 , fontSize: 20, color: '#000' , textAlign: 'left', paddingHorizontal: 10}}>
              {"\n"}Spot 1 : {this.state.Spot1}               Spot 2 : {this.state.Spot2} {"\n"}
                    Spot 3 : {this.state.Spot3}               Spot 4 : {this.state.Spot4} {"\n"}
                    Spot 5 : {this.state.Spot5}               Spot 6 : {this.state.Spot6} {"\n"}
                    Spot 7 : {this.state.Spot7}               Spot 8 : {this.state.Spot8}
          </Text>
        </View>
      </ScrollView>
    )
  }
}

export default Location1