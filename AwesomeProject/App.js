import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView style={{backgroundColor: 'steelblue'}}>
          <Text style={{fontSize:50}}>keep scrolling to see fish</Text>
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Text style={{fontSize:50}}>If you like these fish</Text>
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Text style={{fontSize:50}}>Scroll down even more</Text>
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Text style={{fontSize:50}}>What's the best</Text>
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Text style={{fontSize:50}}>fish around?</Text>
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Image source={require('./fish.png')} style={{width: 200, height: 200}} />
          <Text style={{fontSize:50}}>React Native is a big fish to fry. lol</Text>
        </ScrollView>
    );
  }
}
