import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import Header from './components/Header.js';
import React, { useState } from 'react';
import Input from './components/Input.js';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const onTextAdd = function (newText) {
    console.log(newText);
    setModalVisible(false);
  }

  const name = "my app";
  const [text, setText] = useState("");
  const makeModalVisible = () => { setModalVisible(true) }
  const makeModalInvisible = () => { setModalVisible(false) }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        {/* <Text>Open up App.js to start working on {name}!</Text> */}
        <Header appName={name} />
        <Button title="add a goal" onPress={makeModalVisible} />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>you typed...{text}</Text>
        </View>
      </View>
      <Input modal={modalVisible} onAdd={onTextAdd} onCancel={makeModalInvisible} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // flexDirection:'row'
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    color: 'blue'
  },
  text: {


  }
});
