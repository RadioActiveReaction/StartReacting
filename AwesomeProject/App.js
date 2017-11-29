import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://i.pinimg.com/564x/fa/e8/f4/fae8f49da663d919fefe0250843c1979.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', color: 'red', fontSize: 30}}> Sasuke </Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.bigblue}>He Inspires </Text>
        <Blink text='Yes.. he is no great' />
        <Blink text='But he do not believe in this life and karma' />
        <Blink text='he dont give a fuck about this world' />
      </View>  
    );
  }
}


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.white}>{display}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
  white: {
    color: 'white'
  }
});
