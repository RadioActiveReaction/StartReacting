import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image} from 'react-native';

export default class WelcomeScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const remote = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg';
    return(
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
        <View style={{flexDirection:'row', backgroundColor: 'rgba(0,0,0,0.7)', height: 100,
        alignItems: 'center',
        justifyContent: 'center'}}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}> Welcome, {this.props.navigation.state.params.UserName} </Text>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
});
