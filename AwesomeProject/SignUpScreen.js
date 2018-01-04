import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const remote = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* eslint-disable react/prop-types */
const SignUpScreen = ({ navigation }) => (
  <View style={styles.container}>
    { /* TODO Add SignUP Logic. */ }
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
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.7)',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 15 }}> UserName:  {navigation.state.params.UserName} was not found, Please SignUp</Text>
    </View>
  </View>
);

export default SignUpScreen;
