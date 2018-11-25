import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { ButtonGroup, Badge } from 'react-native-elements';
import { db } from './db'
import zero from './spotlayout.png';
import  one from './one.png';
import two from './two.jpg';

const component1 = () => <Text>Floor 1</Text>
const component2 = () => <Text>Floor 2</Text>
const component3 = () => <Text>Floor 3</Text>

const Images = [ zero, one, two ];

export class IthanGarage extends Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: 0 ,
      selectedImage: Images[0]
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
    this.setState({selectedImage : Images[selectedIndex]})
    SpotState = {selectedIndex}
  }

  state = {
    Spot1: 'False',
    Spot2: 'False',
    Spot3: 'False',
    Spot4: 'False',
    Spot5: 'False',
    Spot6: 'False',
    Spot7: 'False',
    Spot8: 'False',
    Spot9: 'False',
    Spot10: 'False',
    Spot11: 'False',
    Spot12: 'False',
    Spot13: 'False',
    Spot14: 'False',
    Spot15: 'False',
    Spot16: 'False',
    Spot17: 'False',
    Spot18: 'False',
    Spot19: 'False',
    Spot20: 'False',
    Spot21: 'False',
    Spot22: 'False',
    Spot23: 'False',
    Spot24: 'False'
  }
  Spot1Ref = db.ref('/Spots/Spot1')
  Spot2Ref = db.ref('/Spots/Spot2')
  Spot3Ref = db.ref('/Spots/Spot3')
  Spot4Ref = db.ref('/Spots/Spot4')
  Spot5Ref = db.ref('/Spots/Spot5')
  Spot6Ref = db.ref('/Spots/Spot6')
  Spot7Ref = db.ref('/Spots/Spot7')
  Spot8Ref = db.ref('/Spots/Spot8')
  Spot9Ref = db.ref('/Floor2/Spot9')
  Spot10Ref = db.ref('/Floor2/Spot10')
  Spot11Ref = db.ref('/Floor2/Spot11')
  Spot12Ref = db.ref('/Floor2/Spot12')
  Spot13Ref = db.ref('/Floor2/Spot13')
  Spot14Ref = db.ref('/Floor2/Spot14')
  Spot15Ref = db.ref('/Floor2/Spot15')
  Spot16Ref = db.ref('/Floor2/Spot16')
  Spot17Ref = db.ref('/Spots/Spot17')
  Spot18Ref = db.ref('/Spots/Spot18')
  Spot19Ref = db.ref('/Spots/Spot19')
  Spot20Ref = db.ref('/Spots/Spot20')
  Spot21Ref = db.ref('/Spots/Spot21')
  Spot22Ref = db.ref('/Spots/Spot22')
  Spot23Ref = db.ref('/Spots/Spot23')
  Spot24Ref = db.ref('/Spots/Spot24')


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
    this.Spot3Ref.on('value', snapshot=> {
      this.setState({
        Spot3: snapshot.val() 
    
      })
    })
    this.Spot4Ref.on('value', snapshot=> {
      this.setState({
        Spot4: snapshot.val() 
    
      })
    })
    this.Spot5Ref.on('value', snapshot=> {
      this.setState({
        Spot5: snapshot.val() 
    
      })
    })
    this.Spot6Ref.on('value', snapshot=> {
      this.setState({
        Spot6: snapshot.val() 
    
      })
    })
    this.Spot7Ref.on('value', snapshot=> {
      this.setState({
        Spot7: snapshot.val() 
    
      })
    })
    this.Spot8Ref.on('value', snapshot=> {
      this.setState({
        Spot8: snapshot.val() 
    
      })
    })
    this.Spot9Ref.on('value', snapshot=> {
      this.setState({
        Spot9: snapshot.val() 
    
      })
    })
     this.Spot10Ref.on('value', snapshot=> {
      this.setState({
        Spot10: snapshot.val() 
    
      })
    })
    this.Spot11Ref.on('value', snapshot=> {
      this.setState({
        Spot11: snapshot.val() 
    
      })
    })
    this.Spot12Ref.on('value', snapshot=> {
      this.setState({
        Spot12: snapshot.val() 
    
      })
    })
    this.Spot13Ref.on('value', snapshot=> {
      this.setState({
        Spot13: snapshot.val() 
    
      })
    })
    this.Spot14Ref.on('value', snapshot=> {
      this.setState({
        Spot14: snapshot.val() 
    
      })
    })
    this.Spot15Ref.on('value', snapshot=> {
      this.setState({
        Spot15: snapshot.val() 
    
      })
    })
    this.Spot16Ref.on('value', snapshot=> {
      this.setState({
        Spot16: snapshot.val() 
    
      })
    })
  this.Spot17Ref.on('value', snapshot=> {
    this.setState({
      Spot17: snapshot.val() 
  
    })
  })
   this.Spot18Ref.on('value', snapshot=> {
    this.setState({
      Spot18: snapshot.val() 
  
    })
  })
  this.Spot19Ref.on('value', snapshot=> {
    this.setState({
      Spot19: snapshot.val() 
  
    })
  })
  this.Spot20Ref.on('value', snapshot=> {
    this.setState({
      Spot20: snapshot.val() 
  
    })
  })
  this.Spot21Ref.on('value', snapshot=> {
    this.setState({
      Spot21: snapshot.val() 
  
    })
  })
  this.Spot22Ref.on('value', snapshot=> {
    this.setState({
      Spot22: snapshot.val() 
  
    })
  })
  this.Spot23Ref.on('value', snapshot=> {
    this.setState({
      Spot23: snapshot.val() 
  
    })
  })
  this.Spot24Ref.on('value', snapshot=> {
    this.setState({
      Spot24: snapshot.val() 
  
    })
  })

  }

  render () {
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    let {selectedIndex} = this.state
    const floor1Spots = <Text style= {{ lineHeight: 50 , fontSize: 20, color: '#000' , textAlign: 'left', paddingHorizontal: 10}}>
          Spot 1 : {this.state.Spot1}{"\t"}Spot 2 : {this.state.Spot2} {"\n"}
          Spot 3 : {this.state.Spot3}{"\t"}Spot 4 : {this.state.Spot4} {"\n"}
          Spot 5 : {this.state.Spot5}{"\t"}Spot 6 : {this.state.Spot6} {"\n"}
          Spot 7 : {this.state.Spot7}{"\t"}Spot 8 : {this.state.Spot8}
          </Text>
    const floor2Spots = <Text style= {{ lineHeight: 50 , fontSize: 20, color: '#000' , textAlign: 'left', paddingHorizontal: 10}}>
    {"\n"}Spot 1 : {this.state.Spot9}                Spot 2 : {this.state.Spot10} {"\n"}
          Spot 3 : {this.state.Spot11}               Spot 4 : {this.state.Spot12} {"\n"}
          Spot 5 : {this.state.Spot13}               Spot 6 : {this.state.Spot14} {"\n"}
          Spot 7 : {this.state.Spot15}               Spot 8 : {this.state.Spot16}
          </Text>
    const floor3Spots = <Text style= {{ lineHeight: 50 , fontSize: 20, color: '#000' , textAlign: 'left', paddingHorizontal: 10}}>
    {"\n"}Spot 1 : {this.state.Spot17}               Spot 2 : {this.state.Spot18} {"\n"}
          Spot 3 : {this.state.Spot19}               Spot 4 : {this.state.Spot20} {"\n"}
          Spot 5 : {this.state.Spot21}               Spot 6 : {this.state.Spot22} {"\n"}
          Spot 7 : {this.state.Spot23}               Spot 8 : {this.state.Spot24}
          </Text>
    let floorText;
    if(selectedIndex == 0){
       floorText = floor1Spots;
    } else if (selectedIndex == 1){
       floorText = floor2Spots;
    } else {
       floorText = floor3Spots;
    }
    return (
      <ScrollView>
        <View>
        <Text style= {{ fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center', paddingVertical: 20}}>
        Please select your desired floor:</Text>
        {/* <Badge containerStyle={{ backgroundColor: 'red'}}>
          <Text>Full</Text>
        </Badge> */}
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}} />
          <Image 
              style={{width: 370, height: 200}}
              source={this.state.selectedImage}
            />
          {floorText}
          </View>
        </ScrollView>
    )
  }
};

export default IthanGarage;