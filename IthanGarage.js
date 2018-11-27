import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { ButtonGroup, Badge } from 'react-native-elements';
import { db } from './db'
import zero from './spotlayout1.png';
import  one from './spotlayout1.png';
import two from './spotlayout1.png';

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
    Spot24: 'False',
    Spot25: 'False',
    Spot26: 'False',
    Spot27: 'False',
    Spot28: 'False',
    Spot29: 'False',
    Spot30: 'False',
    Spot31: 'False',
    Spot32: 'False',
    Spot33: 'False'
  }
  Spot1Ref = db.ref('/Floor1/Spot1')
  Spot2Ref = db.ref('/Floor1/Spot2')
  Spot3Ref = db.ref('/Floor1/Spot3')
  Spot4Ref = db.ref('/Floor1/Spot4')
  Spot5Ref = db.ref('/Floor1/Spot5')
  Spot6Ref = db.ref('/Floor1/Spot6')
  Spot7Ref = db.ref('/Floor1/Spot7')
  Spot8Ref = db.ref('/Floor1/Spot8')
  Spot9Ref = db.ref('/Floor1/Spot9')
  Spot10Ref = db.ref('/Floor1/Spot10')
  Spot11Ref = db.ref('/Floor1/Spot11')
  Spot12Ref = db.ref('/Floor2/Spot12')
  Spot13Ref = db.ref('/Floor2/Spot13')
  Spot14Ref = db.ref('/Floor2/Spot14')
  Spot15Ref = db.ref('/Floor2/Spot15')
  Spot16Ref = db.ref('/Floor2/Spot16')
  Spot17Ref = db.ref('/Floor2/Spot17')
  Spot18Ref = db.ref('/Floor2/Spot18')
  Spot19Ref = db.ref('/Floor2/Spot19')
  Spot20Ref = db.ref('/Floor2/Spot20')
  Spot21Ref = db.ref('/Floor2/Spot21')
  Spot22Ref = db.ref('/Floor2/Spot22')
  Spot23Ref = db.ref('/Floor3/Spot23')
  Spot24Ref = db.ref('/Floor3/Spot24')
  Spot25Ref = db.ref('/Floor3/Spot25')
  Spot26Ref = db.ref('/Floor3/Spot26')
  Spot27Ref = db.ref('/Floor3/Spot27')
  Spot28Ref = db.ref('/Floor3/Spot28')
  Spot29Ref = db.ref('/Floor3/Spot29')
  Spot30Ref = db.ref('/Floor3/Spot30')
  Spot31Ref = db.ref('/Floor3/Spot31')
  Spot32Ref = db.ref('/Floor3/Spot32')
  Spot33Ref = db.ref('/Floor3/Spot33')


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
    this.Spot25Ref.on('value', snapshot=> {
      this.setState({
        Spot25: snapshot.val() 
      })
    })
    this.Spot26Ref.on('value', snapshot=> {
      this.setState({
        Spot26: snapshot.val()
      })
    })
    this.Spot27Ref.on('value', snapshot=> {
      this.setState({
        Spot27: snapshot.val() 
      })
    })
    this.Spot28Ref.on('value', snapshot=> {
      this.setState({
        Spot28: snapshot.val() 
      })
    })
    this.Spot29Ref.on('value', snapshot=> {
      this.setState({
        Spot29: snapshot.val() 
      })
    })
    this.Spot30Ref.on('value', snapshot=> {
      this.setState({
        Spot30: snapshot.val() 
      })
    })
    this.Spot31Ref.on('value', snapshot=> {
      this.setState({
        Spot31: snapshot.val() 
      })
    })
    this.Spot32Ref.on('value', snapshot=> {
      this.setState({
        Spot32: snapshot.val() 
      })
    })
    this.Spot33Ref.on('value', snapshot=> {
      this.setState({
        Spot33: snapshot.val() 
      })
    })
  }

  render () {
    const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
    let {selectedIndex} = this.state
    const floor1Spots =<View style={{flexDirection: "row"}}>
      <Text style= {{ lineHeight: 50, width:200, fontSize: 20, color: '#000' , textAlign: 'left', paddingHorizontal: 30, paddingTop: 25}}>
        {"\n"}
        Spot 1 : {this.state.Spot1}{"\t"}{"\n"}
        Spot 3 : {this.state.Spot3}{"\n"}
        Spot 5 : {this.state.Spot5}{"\n"}
        Spot 7 : {this.state.Spot7}
      </Text>
      <Text style= {{ lineHeight: 50 , fontSize: 20, color: '#000' , textAlign: 'left', paddingLeft: 20, paddingTop: 25}}>
        {"\n"}
        Spot 2 : {this.state.Spot2} {"\n"}
        Spot 4 : {this.state.Spot4} {"\n"}
        Spot 6 : {this.state.Spot6} {"\n"}
        Spot 8 : {this.state.Spot8}
      </Text></View> 
    const floor2Spots =<View style={{flexDirection: "row"}}>
      <Text style= {{ lineHeight: 50, width:200, fontSize: 20, color: '#000' , textAlign: 'left', paddingHorizontal: 30, paddingTop: 25}}>
        {"\n"}
        Spot 1 : {this.state.Spot9}{"\t"}{"\n"}
        Spot 3 : {this.state.Spot11}{"\n"}
        Spot 5 : {this.state.Spot13}{"\n"}
        Spot 7 : {this.state.Spot15}
      </Text>
      <Text style= {{ lineHeight: 50 , fontSize: 20, color: '#000' , textAlign: 'left', paddingLeft: 20, paddingTop: 25}}>
        {"\n"}
        Spot 2 : {this.state.Spot10} {"\n"}
        Spot 4 : {this.state.Spot12} {"\n"}
        Spot 6 : {this.state.Spot14} {"\n"}
        Spot 8 : {this.state.Spot16}
      </Text></View> 
    const floor3Spots =<View style={{flexDirection: "row"}}>
      <Text style= {{ lineHeight: 50, width:200, fontSize: 20, color: '#000' , textAlign: 'left', paddingHorizontal: 30, paddingTop: 25}}>
        {"\n"}
        Spot 1 : {this.state.Spot17}{"\t"}{"\n"}
        Spot 3 : {this.state.Spot19}{"\n"}
        Spot 5 : {this.state.Spot21}{"\n"}
        Spot 7 : {this.state.Spot23}
      </Text>
      <Text style= {{ lineHeight: 50 , fontSize: 20, color: '#000' , textAlign: 'left', paddingLeft: 20, paddingTop: 25}}>
        {"\n"}
        Spot 2 : {this.state.Spot18} {"\n"}
        Spot 4 : {this.state.Spot20} {"\n"}
        Spot 6 : {this.state.Spot22} {"\n"}
        Spot 8 : {this.state.Spot24}
      </Text></View> 
    let overlay;
    let overlay2;
    let overlay3;
    let overlay4;
    let overlay5;
    let overlay6;
    let overlay7;
    let overlay8;
    let overlay9;
    let overlay10;
    let overlay11;
    // let floorText;
    if(selectedIndex == 0){
       floorText = floor1Spots;
       if(this.state.Spot1 == "Full"){
        overlay = <View style={{paddingLeft: 36, paddingTop: 40, width: 77}}>
          <Badge containerStyle={{ backgroundColor: 'red'}}>
            <Text style={{color: 'white', fontSize: 30}}>X</Text>
          </Badge>
        </View>;
        } else {
          overlay = <View style={{paddingLeft: 36, paddingTop: 40, width: 77, height: 82}}></View>;
        }
        if(this.state.Spot2 == "Full"){
          overlay2 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay2 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot3 == "Full"){
          overlay3 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay3 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot4 == "Full"){
          overlay4 = <View style={{paddingLeft: 36, paddingTop: 144, width: 77}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay4 = <View style={{paddingLeft: 36, paddingTop: 144, width: 77, height: 102}}></View>;
        }
        if(this.state.Spot5 == "Full"){
          overlay5 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay5 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88, height: 102}}></View>;
        }
        if(this.state.Spot6 == "Full"){
          overlay6 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay6 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88, height: 102}}></View>;
        }
        if(this.state.Spot7 == "Full"){
          overlay7 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay7 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88, height: 102}}></View>;
        }
        if(this.state.Spot8 == "Full"){
          overlay8 = <View style={{paddingLeft: 36, paddingTop: 70, width: 77}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay8 = <View style={{paddingLeft: 36, paddingTop: 70, width: 77, height: 82}}></View>;
        }
        if(this.state.Spot9 == "Full"){
          overlay9 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay9 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot10 == "Full"){
          overlay10 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay10 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot11 == "Full"){
          overlay11 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay11 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88, height: 82}}></View>;
        }
    } else if (selectedIndex == 1){
       floorText = floor2Spots;
       if(this.state.Spot12 == "Full"){
        overlay = <View style={{paddingLeft: 36, paddingTop: 40, width: 77}}>
          <Badge containerStyle={{ backgroundColor: 'red'}}>
            <Text style={{color: 'white', fontSize: 30}}>X</Text>
          </Badge>
        </View>;
        } else {
          overlay = <View style={{paddingLeft: 36, paddingTop: 40, width: 77, height: 82}}></View>;
        }
        if(this.state.Spot13 == "Full"){
          overlay2 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay2 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot14 == "Full"){
          overlay3 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay3 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot15 == "Full"){
          overlay4 = <View style={{paddingLeft: 36, paddingTop: 144, width: 77}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay4 = <View style={{paddingLeft: 36, paddingTop: 144, width: 77, height: 82}}></View>;
        }
        if(this.state.Spot16 == "Full"){
          overlay5 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay5 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot17 == "Full"){
          overlay6 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay6 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot18 == "Full"){
          overlay7 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay7 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot19 == "Full"){
          overlay8 = <View style={{paddingLeft: 36, paddingTop: 70, width: 77}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay8 = <View style={{paddingLeft: 36, paddingTop: 70, width: 77, height: 82}}></View>;
        }
        if(this.state.Spot20 == "Full"){
          overlay9 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay9 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot21 == "Full"){
          overlay10 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay10 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot22 == "Full"){
          overlay11 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay11 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88, height: 82}}></View>;
        }
    } else {
       floorText = floor3Spots;
       if(this.state.Spot23 == "Full"){
        overlay = <View style={{paddingLeft: 36, paddingTop: 40, width: 77}}>
          <Badge containerStyle={{ backgroundColor: 'red'}}>
            <Text style={{color: 'white', fontSize: 30}}>X</Text>
          </Badge>
        </View>;
        } else {
          overlay = <View style={{paddingLeft: 36, paddingTop: 40, width: 77, height: 82}}></View>;
        }
        if(this.state.Spot24 == "Full"){
          overlay2 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay2 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot25 == "Full"){
          overlay3 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay3 = <View style={{paddingLeft: 47, paddingTop: 40, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot26 == "Full"){
          overlay4 = <View style={{paddingLeft: 36, paddingTop: 144, width: 77}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay4 = <View style={{paddingLeft: 36, paddingTop: 144, width: 77, height: 162}}></View>;
        }
        if(this.state.Spot27 == "Full"){
          overlay5 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay5 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot28 == "Full"){
          overlay6 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay6 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot29 == "Full"){
          overlay7 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay7 = <View style={{paddingLeft: 47, paddingTop: 144, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot30 == "Full"){
          overlay8 = <View style={{paddingLeft: 36, paddingTop: 70, width: 77}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay8 = <View style={{paddingLeft: 36, paddingTop: 70, width: 77, height: 82}}></View>;
        }
        if(this.state.Spot31 == "Full"){
          overlay9 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay9 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot32 == "Full"){
          overlay10 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay10 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88, height: 82}}></View>;
        }
        if(this.state.Spot33 == "Full"){
          overlay11 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text style={{color: 'white', fontSize: 30}}>X</Text>
            </Badge>
          </View>;
        } else {
          overlay11 = <View style={{paddingLeft: 47, paddingTop: 70, width: 88, height: 82}}></View>;
        }
    }
    return (
      <ScrollView>
        <View>
        <Text style= {{ fontSize: 18, fontWeight : 'bold' , color: 'black' , textAlign: 'center', paddingVertical: 20}}>
        Please select your desired floor:</Text>\
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{height: 50}}/>
        <Text></Text>
        <View>
          <Image 
            style={{position: 'absolute', width: 374, height: 430}}
            source={this.state.selectedImage}
          />
        </View>
        <View style={{flexDirection: "row"}}>
          {overlay}
          {overlay2}
          {overlay3}
        </View>
        <View style={{flexDirection: "row"}}>
          {overlay4}
          {overlay5}
          {overlay6}
          {overlay7}
        </View>
        <View style={{flexDirection: "row"}}>
          {overlay8}
          {overlay9}
          {overlay10}
          {overlay11}
        </View>
        {/* {floorText} */}
        </View>
        </ScrollView>
    )
  }
};

export default IthanGarage;