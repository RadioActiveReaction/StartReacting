import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPressPlus = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  onPressMinus = () => {
    this.setState({
      count: this.state.count <= 0 ? 0: this.state.count-1
    })
  }
 render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.button}
         pressRetentionOffset={{top: 50, left: 5, bottom: 6, right: 8}} 
         //The button will remain active if you press and drag up to above given length
         //https://stackoverflow.com/questions/38206621/react-native-what-does-pressretentionoffset-do
         onPress={this.onPressPlus}
        >
         <Text> Eat Button </Text>
        </TouchableHighlight>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
        <View>
        <TouchableOpacity 
         activeOpacity={0.1} 
         style={styles.button}
         pressRetentionOffset={{top: 5, left: 5, bottom: 500, right: 8}}
         onPress={this.onPressMinus}
        >
         <Text> Drain Button</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10, 
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})