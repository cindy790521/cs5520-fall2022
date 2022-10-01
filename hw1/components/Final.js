import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import { Colors } from '../helpers/Colors.js';

export default function Final({
  text,
  setText,
  isStarting,
  setIsStarting,
  lose,
  setLose,
  win,
  setWin,
  target,
  setTarget }) {


  return (
    <View style={styles.finalContainer}>
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>Game is over</Text>
      </View>
      <View style={styles.cardContainer}>
        <Card containerStyle={styles.enter}>
          <Card.Title style={styles.enterTitle}>Here's your picture</Card.Title>
          {lose &&
            <View>
              <Card.Image source={require('../images/unamused-face-emoji.png')} />
              <Button
                title="Start again"
                color="red"
                onPress={() => {
                  setLose(false);
                  setIsStarting(true);
                  setText("");
                  setTarget(1020 + Math.floor(Math.random() * 10));
                }} />
            </View>
          }

          {win &&
            <View>
              <Card.Image source={{ uri: `https://picsum.photos/id/${text}/100/100` }} />
              <Button
                title="Start again"
                color="red"
                onPress={() => {
                  setWin(false);
                  setIsStarting(true);
                  setText("");
                  setTarget(1020 + Math.floor(Math.random() * 10));
                }} />
            </View>
          }
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  finalContainer: {
    flex: 1,
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
});
