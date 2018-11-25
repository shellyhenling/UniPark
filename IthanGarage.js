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
  Spot1Ref = db.ref('/Floor1/Spot1')
  Spot2Ref = db.ref('/Floor1/Spot2')
  Spot3Ref = db.ref('/Floor1/Spot3')
  Spot4Ref = db.ref('/Floor1/Spot4')
  Spot5Ref = db.ref('/Floor1/Spot5')
  Spot6Ref = db.ref('/Floor1/Spot6')
  Spot7Ref = db.ref('/Floor1/Spot7')
  Spot8Ref = db.ref('/Floor1/Spot8')
  Spot9Ref = db.ref('/Floor2/Spot9')
  Spot10Ref = db.ref('/Floor2/Spot10')
  Spot11Ref = db.ref('/Floor2/Spot11')
  Spot12Ref = db.ref('/Floor2/Spot12')
  Spot13Ref = db.ref('/Floor2/Spot13')
  Spot14Ref = db.ref('/Floor2/Spot14')
  Spot15Ref = db.ref('/Floor2/Spot15')
  Spot16Ref = db.ref('/Floor2/Spot16')
  Spot17Ref = db.ref('/Floor3/Spot17')
  Spot18Ref = db.ref('/Floor3/Spot18')
  Spot19Ref = db.ref('/Floor3/Spot19')
  Spot20Ref = db.ref('/Floor3/Spot20')
  Spot21Ref = db.ref('/Floor3/Spot21')
  Spot22Ref = db.ref('/Floor3/Spot22')
  Spot23Ref = db.ref('/Floor3/Spot23')
  Spot24Ref = db.ref('/Floor3/Spot24')


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
    let floorText;
    if(selectedIndex == 0){
       floorText = floor1Spots;
       if(this.state.Spot1 == "Full"){
        overlay = <View style={{paddingLeft: 20, paddingTop: 40, width: 94}}>
          <Badge containerStyle={{ backgroundColor: 'red'}}>
            <Text>Full</Text>
          </Badge>
        </View>;
        } else {
          overlay = <View style={{paddingLeft: 20, paddingTop: 40, width: 94}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot2 == "Full"){
          overlay2 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay2 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot3 == "Full"){
          overlay3 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay3 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot4 == "Full"){
          overlay4 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay4 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot5 == "Full"){
          overlay5 = <View style={{paddingLeft: 20, paddingTop: 75, width: 94}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay5 = <View style={{paddingLeft: 20, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot6 == "Full"){
          overlay6 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay6 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot7 == "Full"){
          overlay7 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay7 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot8 == "Full"){
          overlay8 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay8 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
    } else if (selectedIndex == 1){
       floorText = floor2Spots;
       if(this.state.Spot9 == "Full"){
        overlay = <View style={{paddingLeft: 20, paddingTop: 40, width: 94}}>
          <Badge containerStyle={{ backgroundColor: 'red'}}>
            <Text>Full</Text>
          </Badge>
        </View>;
        } else {
          overlay = <View style={{paddingLeft: 20, paddingTop: 40, width: 94}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot10 == "Full"){
          overlay2 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay2 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot11 == "Full"){
          overlay3 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay3 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot12 == "Full"){
          overlay4 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay4 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot13 == "Full"){
          overlay5 = <View style={{paddingLeft: 20, paddingTop: 75, width: 94}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay5 = <View style={{paddingLeft: 20, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot14 == "Full"){
          overlay6 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay6 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot15 == "Full"){
          overlay7 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay7 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot16 == "Full"){
          overlay8 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay8 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
    } else {
       floorText = floor3Spots;
       if(this.state.Spot17 == "Full"){
        overlay = <View style={{paddingLeft: 20, paddingTop: 40, width: 94}}>
          <Badge containerStyle={{ backgroundColor: 'red'}}>
            <Text>Full</Text>
          </Badge>
        </View>;
        } else {
          overlay = <View style={{paddingLeft: 20, paddingTop: 40, width: 94}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot118 == "Full"){
          overlay2 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay2 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot19 == "Full"){
          overlay3 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay3 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot20 == "Full"){
          overlay4 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay4 = <View style={{paddingLeft: 13, paddingTop: 40, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot21 == "Full"){
          overlay5 = <View style={{paddingLeft: 20, paddingTop: 75, width: 94}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay5 = <View style={{paddingLeft: 20, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot22 == "Full"){
          overlay6 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay6 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot23 == "Full"){
          overlay7 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay7 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
        }
        if(this.state.Spot24 == "Full"){
          overlay8 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
            <Badge containerStyle={{ backgroundColor: 'red'}}>
              <Text>Full</Text>
            </Badge>
          </View>;
        } else {
          overlay8 = <View style={{paddingLeft: 13, paddingTop: 75, width: 87}}>
          <Badge containerStyle={{ backgroundColor: 'green'}}>
            <Text>Open</Text>
          </Badge>
        </View>;
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
            style={{position: 'absolute', width: 374, height: 200}}
            source={this.state.selectedImage}
          />
        </View>
        <View style={{flexDirection: "row"}}>
          {overlay}
          {overlay2}
          {overlay3}
          {overlay4}
        </View>
        <View style={{flexDirection: "row"}}>
          {overlay5}
          {overlay6}
          {overlay7}
          {overlay8}
        </View>
        {floorText}
        </View>
        </ScrollView>
    )
  }
};

export default IthanGarage;