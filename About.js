import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';



const showAlert = () => {
      Alert.alert(
         "Now we show the Location!"
      )
   }

export class About extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <View style={{alignItems: 'center', paddingTop: 20, paddingBottom: 10}}>
              <Text style={{fontSize: 35}}>Our Mission</Text>
            </View>
            <View style={{alignItems: 'center', paddingBottom: 20}}>
              <Text style={{textAlign: 'center', fontSize: 20, color:'grey'}}>To create an app that shows users where the closest available parking spot is located.</Text>
            </View>
            <View style={{alignItems: 'center', flexDirection: 'column'}}>
              <Tile
              imageSrc={require('./ParkingLotTile2.jpg')}
              title="''UniPark is a complete innovation in the parking industry.''"
              featured caption="-Elon Musk, 2018"
              height={200}
              width={356}
              />
            </View>
            <Text style= {{ flexDirection: 'row', textAlign: 'center', fontSize: 20, padding: 20, color:'grey'}}>
              Originally a senior design project, three engineering students from Villanova University have created a technology that has changed the lives of hundreds of ordinary people.
            {/* We would accomplish this by placing a device on each spot to detect the presence of a car. This data would be communicated to the app in real time for the users to view open parking spots. */}
            </Text>
            <View style={{alignItems: 'center', flexDirection: 'column'}}>
              <Tile
              imageSrc={require('./ParkingLotTile.jpg')}
              title="''Wow! I love UniPark!''"
              featured caption="- Jay Wright"
              height={160}
              width={356}
              />
            </View>
            <View style={{alignItems: 'center', paddingBottom: 10}}>
              <Text style= {{ flexDirection: 'row', textAlign: 'center', fontSize: 20, padding: 20, color:'grey'}}>
              UniPark is driven by its goal to create a faster, more efficient driving experience for all users.
              {/* For this project, the current plan is to create and test the technology on the smaller lot near Klekotka Hall to ensure success. Ideally, this will be able to be implemented on a larger scale on West Campus and in the University. */}
              </Text>
            </View>
            <View style={{alignItems: 'center', flexDirection: 'column', paddingBottom: 20}}>
              <Tile
              imageSrc={require('./ParkingLotTile3.jpg')}
              title="''Hopefully, through the invention of UniPark, we will be able to make a positive impact of the world of finding a parking spot.''"
              featured caption="-UniPark Founders, 2018"
              height={280}
              width={356}
              />
            </View>
            <View style={{alignItems: 'center', paddingBottom: 20}}>
              <Text style= {{ flexDirection: 'row', textAlign: 'center', fontSize: 20, padding: 20, color:'grey'}}>
              For this project, the current plan is to create and test the technology on the smaller lot near Klekotka Hall to ensure success. Ideally, this will be able to be implemented on a larger scale on West Campus and in the University.
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20, color:'grey'}}>Watch the Video:</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Tile
              imageSrc={require('./VideoPic.jpg')}
              icon={{name: 'play-circle', type: 'font-awesome', size: 60 }}
              image
              height={280}
              width={356}
              />
            </View>
          </View>
         </ScrollView>
      </View>
    )
  }
};

export default About;