import React from 'react';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';
import SignUpScreen from './SignUpScreen';

const propTypes = {
  UserName: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  isUserBeingFetched: PropTypes.bool.isRequired,
  hasUserFetchedSuccessful: PropTypes.bool.isRequired,
};

const Navigation = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  WelcomeScreen: { screen: WelcomeScreen },
  SignUpScreen: { screen: SignUpScreen },
});

class NavigationController extends React.PureComponent {
  render() {
    const props = {
      UserName: this.props.UserName,
      Password: this.props.Password,
      isUserBeingFetched: this.props.isUserBeingFetched,
      hasUserFetchedSuccessful: this.props.hasUserFetchedSuccessful,
    };
    return (
      <Navigation screenProps={props} />
    );
  }
}

NavigationController.propTypes = propTypes;

export default NavigationController;
