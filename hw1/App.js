import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import Header from './components/Header.js';
import React,{useState} from 'react';
import Input from './components/Input.js';

export default function App() {
const onTextAdd=function(newText){
  console.log(newText);
}

  const name="my app";
  const [text,setText]=useState("");
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on {name}!</Text> */}
      <Header appName={name}/>
      <Input onAdd={onTextAdd}/>
      <Text>inputed:{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
