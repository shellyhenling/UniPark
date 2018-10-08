
import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SpotsComponent from './SpotsComponent';

import { db } from './db';

let SpotsRef = db.ref('/Spots');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    }
  })

export default class ListSpots extends Component {

    state = {
        Spots: []
    }

    componentDidMount() {
        SpotsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let Spots = Object.values(data);
            this.setState({Spots});
         });
    }
    
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.Spots.length > 0
                    ? <SpotsComponent items={this.state.Spots} />
                    : <Text>No Spots</Text>
                }
            </View>
        )
    }
}