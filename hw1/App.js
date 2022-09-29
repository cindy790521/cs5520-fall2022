import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Alert} from 'react-native';
import React,{useState} from 'react';
import Starting from './components/Starting.js';
import Game from './components/Game.js';
import Final from './components/Final.js';
import {Colors} from './helpers/Colors.js';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {

  
  
  const [target,setTarget]=useState(1020+Math.floor(Math.random() * 10));
  const [text,setText]=useState("");
  const [isStarting,setIsStarting]=useState(true);
  const [isGame,setIsGame]=useState(false);
  const [win,setWin]=useState(false);
  const [lose,setLose]=useState(false);
  return (
    <View style={styles.container}>
      
      <LinearGradient
        // Background Linear Gradient
        colors={[Colors.white,Colors.transparent,Colors.lightBlack]}
        style={styles.background}
      />
      {isStarting &&
      <Starting 
      text={text}
      setText={setText}
      isStarting={isStarting}
      setIsStarting={setIsStarting}
      isGame={isGame}
      setIsGame={setIsGame}
      />}

      {isGame&&
      <Game
      text={text}
      target={target}
      isStarting={isStarting}
      setIsStarting={setIsStarting}
      isGame={isGame}
      setIsGame={setIsGame}
      lose={lose}
      setLose={setLose}
      win={win}
      setWin={setWin}
      />}

    {(win ||lose)&&
      <Final
      text={text}
      setText={setText}
      isStarting={isStarting}
      setIsStarting={setIsStarting}
      lose={lose}
      setLose={setLose}
      win={win}
      setWin={setWin}
      target={target}
      setTarget={setTarget}
      />}    
       <Text>target:{target} inputed:{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pink,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
