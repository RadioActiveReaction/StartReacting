import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {UserName: '', Password: ''};
    this.validate = this.validate.bind(this);
    this.clearDetails = this.clearDetails.bind(this);
  }

  validate() {
    if(this.state.UserName === 'Dinesh' && this.state.Password === 'Baba') {
      return <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 30}}> Hello, $(this.state.UserName) </Text>;
    } else {
      return <Text style={{fontWeight: 'bold', color: 'red', fontSize: 30}}> Sorry Wrong UserName and Password </Text>;
    }
    // if(this.state.UserName === 'Dinesh' && this.state.Password === 'Baba') {
    //   const welcomeMessage = 'Hello ' + this.state.UserName;
    //   Alert.alert(welcomeMessage);
    // } else {
    //   Alert.alert('Wrong UserName and Password');
    // }
  }

  clearDetails() {
    this.setState({UserName: '', Password: ''});
  }
  render() {
    const remote = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg';
    return (
      <View style={styles.container}>
        <Image
          style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
          source={{ uri: remote }}
        />
        <View style={{flexDirection: 'row', width: 300, height: 50, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15 }}> UserName </Text>
          <TextInput
            style={{height: 20, fontSize: 15, color: 'white'}}
            placeholder="Enter UserName"
            onChangeText={(UserName) => this.setState({UserName})}
          />
        </View>
        <View style={{flexDirection: 'row', width: 300, height: 50, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}> Password </Text>
          <TextInput
            style={{height: 20, fontSize: 15, color: 'white'}}
            placeholder="Enter Password"
            secureTextEntry={true}
            onChangeText={(Password) => this.setState({Password})}
          />
        </View>
        <View style={{flexDirection: 'row',width: 300, height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Button
            onPress={this.validate}
            title="Login"
            color="#841584"
            accessibilityLabel="Login"
            />
          <Button
            onPress={this.clearDetails}
            title="Cancel"
            color="#841584"
            accessibilityLabel="Cancel"
          />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
