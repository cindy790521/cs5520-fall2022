import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import { Colors } from '../helpers/Colors.js';

export default function Starting({
  text,
  setText,
  isStarting,
  setIsStarting,
  isGame,
  setIsGame,
  modalVisible,
  setModalVisible }) {

  const createAlert = () =>
    Alert.alert(
      "Invalid number!",
      "Number has to be a number between 1020 and 1029.",
      [
        { text: "OK" }
      ]
    );

  const check = function (newText) {
    const parsed = parseInt(newText, 10);
    if (isNaN(parsed) || parsed < 1020 || parsed > 1029) {
      createAlert();
    } else {
      setText(parsed.toString());
      setIsStarting(false);
      setIsGame(true);
      setModalVisible(true);
    }
    return;
  }

  return (
    <View style={styles.startingContainer}>
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>Guess my number</Text>
      </View>
      <View style={styles.cardContainer}>
        <Card containerStyle={styles.enter}>
          <Card.Title style={styles.enterTitle}>Enter a number</Card.Title>
          <TextInput
            value={text}
            onChangeText={(newText) => { setText(newText) }}
            placeholder="        "
            keyboardType="numeric"
            style={styles.input}
          />

          <View style={styles.button}>
            <Button
              title="reset"
              color='darkviolet'
              onPress={() => {
                setText("");
              }} />

            <Button
              title="confirm"
              color="red"
              onPress={() => {
                check(text);
              }} />
          </View>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  startingContainer: {
    flex: 1
  },
  guessContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cardContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  guess: {
    borderColor: Colors.blue,
    borderWidth: 1,
    color: Colors.blue,
    borderBottomWidth: 20,
    borderTopWidth: 20,
    borderLeftWidth: 20,
    borderRightWidth: 20,
    position: "relative",
    textAlign: 'center',
  },
  enter: {
    backgroundColor: Colors.gray,
    top: "3%",
    position: "relative",
    padding: 30,
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: Colors.gray,
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  enterTitle: {
    color: Colors.yellow
  },
  button: {
    flexDirection: "row",
    alignItems: 'center',
    alignContent: "center"
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderBottomWidth: "1",
    borderBottomColor: Colors.yellow
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
