import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import PropTypes from 'prop-types';
import { getUserDetails } from './actions';

const propTypes = {
  screenProps: PropTypes.shape(
    PropTypes.string,
    PropTypes.string,
  ),
};

const defaultProps = {
  screenProps: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.clearDetails = this.clearDetails.bind(this);
    this.state = {
      UserName: this.props.screenProps.UserName,
    };
  }

  validate() {
    /* eslint-disable react/prop-types */
    const { navigate } = this.props.navigation;
    /* eslint-enable react/prop-types */
    // Check if UserName and Password are not blank

    const fetchedDetails = getUserDetails(this.state.UserName);

    if ((this.state.UserName === fetchedDetails.UserName) &&
      (this.state.Password === fetchedDetails.Password)) {
      navigate('WelcomeScreen', { UserName: this.state.UserName });
    } else {
      navigate('SignUpScreen', { UserName: this.state.UserName });
    }
  }

  clearDetails() {
    this.setState({ UserName: '', Password: '' });
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
        <View style={
          {
            flexDirection: 'row',
            width: 300,
            height: 50,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }
        }
        >
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}> UserName </Text>
          <TextInput
            style={{ height: 25, fontSize: 18, color: 'white' }}
            placeholder="Enter UserName"
            placeholderTextColor="rgba(0,255,255,0.7)"
            onChangeText={UserName => this.setState({ UserName })}
          />
        </View>
        <View
          style={{
              flexDirection: 'row',
              width: 300,
              height: 50,
              backgroundColor: 'rgba(0,0,0,0.5)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
        >
          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}> Password </Text>
          <TextInput
            style={{
              height: 25,
              fontSize: 18,
              color: 'white',
            }}
            placeholder="Enter Password"
            placeholderTextColor="rgba(0,255,255,0.7)"
            secureTextEntry
            onChangeText={Password => this.setState({ Password })}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: 300,
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <Button
            onPress={this.validate}
            title="Login"
            color="white"
            accessibilityLabel="Login"
          />
          <Button
            onPress={this.clearDetails}
            color="white"
            title="Cancel"
            accessibilityLabel="Cancel"
          />
        </View>
      </View>
    );
  }
}

LoginScreen.propTypes = propTypes;
LoginScreen.defaultProps = defaultProps;
