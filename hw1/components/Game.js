import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import React, { useState } from 'react';
import { Card } from 'react-native-elements';
import { Colors } from '../helpers/Colors.js';

export default function Game({
  text,
  target,
  isStarting,
  setIsStarting,
  isGame,
  setIsGame,
  lose,
  setLose,
  win,
  setWin,
  modalVisible,
  setModalVisible }) {

  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles1.modalContainer}>
          {parseInt(text, 10) != target &&
            <Card containerStyle={styles1.enter}>
              <Card.Title style={styles1.enterTitle}>
                You have chosen {text}{"\n"}
                This's not my number!{"\n"}
                {parseInt(text, 10) < target && <Text>Guess higher!</Text>}
                {parseInt(text, 10) > target && <Text>Guess lower!</Text>}
              </Card.Title>
              <Button
                title="I am done"
                color='darkviolet'
                onPress={() => {
                  setIsGame(false);
                  setLose(true);
                  setModalVisible(false);
                }} />
              <Button
                title="Let me guess again"
                color="red"
                onPress={() => {
                  setIsGame(false);
                  setIsStarting(true);
                  setModalVisible(false);
                }} />
            </Card>
          }
          {parseInt(text, 10) == target &&
            <Card containerStyle={styles1.enter}>
              <Card.Title style={styles1.enterTitle}>
                Congrats!You won!
              </Card.Title>
              <Button
                title="Thank you!"
                color="red"
                onPress={() => {
                  setIsGame(false);
                  setWin(true);
                  setModalVisible(false);
                }} />
            </Card>
          }
        </View>
      </Modal>
    </View>
  );
}

const styles1 = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enter: {
    backgroundColor: Colors.gray,
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
