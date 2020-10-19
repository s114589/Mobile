import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

const Random0Tot10 = () =>
{
  return Math.random() * 10;
}

export default () => {
  return (
    <View style={styles.container}>
      <Text>Het getal is <Text style={styles.boldText}>{Random0Tot10()}</Text></Text>
      <StatusBar style="auto" hidden={true} />
      <View style={styles.subViewStyle}><Text>Subview</Text></View>
      <Image style={styles.image} source={require('./assets/pikachu.jpg')}/>
      <Image style={styles.image} source={{uri: "https://i.pinimg.com/564x/69/67/6e/69676eafeae10e6c3366bc9b1336b75d.jpg" }}/>
      <TextInput style={styles.textInput} secureTextEntry={true} placeholder={"  Enter password"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  boldText: {
    fontWeight: 'bold'
  },
  subViewStyle: {
    width: 100,
    padding: 10,
    borderWidth: 2,
    borderColor: 'red'
  },
  image: {
    width : 100,
    height : 100,
    resizeMode: 'contain'
  },
  textInput:{
    borderColor: 'black',
    borderWidth: 2
  }
});
