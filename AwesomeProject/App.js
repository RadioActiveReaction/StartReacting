import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, Name, TextInput } from 'react-native';

export default class App extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 30}}> Login here </Text>
        <NameForm />
      </View>
    );
  }
}

/**
 * Form control input
 * Ref- React Forms
 */
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    this.setState({value: value});
  }

  handleSubmit(value) {
    alert('A name was submitted: ' + this.state.value);
  }

  render() {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', margin: 10, paddingTop: 20}}>
          <View style={{ }}></View>
          <View style={{flexWrap: 'nowrap'}}>
            <Text>
              Name:
            </Text> 
            <TextInput 
              value={this.state.value} 
              onChangeText={this.handleChange} 
              placeholder="Type your name here!" />
          </View>
          <View style={{}} >    
            <Button onPress={this.handleSubmit} title="Submit" />
          </View>
        </View>
    );
  }
}

/**
 * Floating-label component
 * https://goshakkk.name/floating-label-input-rn-animated/
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  }
  });