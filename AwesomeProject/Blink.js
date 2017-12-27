import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

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
    color: 'white',
  },
});

const propTypes = {
  text: PropTypes.string,
};

const defaultProps = {
  text: undefined,
};

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => (
        { showText: !previousState.showText }
      ));
    }, 1000);
  }

  render() {
    const display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.white}>{display}</Text>
    );
  }
}

Blink.propTypes = propTypes;
Blink.defaultProps = defaultProps;
export default Blink;
