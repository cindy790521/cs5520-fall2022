import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';
import React,{useState} from 'react';
import { Card } from 'react-native-elements';
import {Colors} from '../helpers/Colors.js';

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
    setWin}) {
    
    
    return (
        
      <View style={styles1.gameContainer}>
{/* <View style={{flex:0.5}}/> */}
       {parseInt(text, 10)!=target && 
        <Card containerStyle={styles1.enter}>
        <Card.Title style={styles1.enterTitle}>
            You have chosen {text}{"\n"}
            This's not my number!{"\n"}
            {parseInt(text, 10)<target && <Text>Guess higher!</Text>}
            {parseInt(text, 10)>target && <Text>Guess lower!</Text>}
        </Card.Title>
        
        <Button
        title="I am done"
        color='darkviolet'
        onPress={()=>{
            setIsGame(false);
            setLose(true);
        }}
        // if onAdd not in a function, will render repeatedly
        />
        
        <Button
        title="Let me guess again"
        color="red"
        onPress={()=>{
            setIsGame(false);
            setIsStarting(true);
        }}
        />
        
        </Card>
    }
    {parseInt(text, 10)==target && 
    <Card containerStyle={styles1.enter}>
    <Card.Title style={styles1.enterTitle}>
        Congrats!You won!
    </Card.Title>
    
    <Button
    title="Thank you!"
    color="red"
    onPress={()=>{
        setIsGame(false);
        setWin(true);
    }}
    />
    </Card>
    }
    
      </View>
    );
  }
  
  const styles1 = StyleSheet.create({
    gameContainer:{
        flex:1,
        justifyContent: 'center',
        // backgroundColor: Colors.pink,
        alignItems: 'center',
        
    },
    guess: {
        // flex: 0.1,
        borderColor:Colors.blue,
        borderWidth:1,
        color:Colors.blue,
        borderBottomWidth:"10%",
        borderTopWidth:"10%",
        borderLeftWidth:"20%",
        borderRightWidth:"20%",
        top: "5%",
        bottom:"5%",
        position:"relative"

      },
    
      enter:{
        // flex:1,
        backgroundColor:Colors.gray,
        // top:"5%",
        // bottom:"5%",
        position:"relative",
        padding:30,
        alignItems: 'center',
        borderWidth: 0,
        borderRadius:10,
        shadowColor: Colors.gray,
    shadowOffset: {width: -5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    
      },
      enterTitle:{
        color:Colors.yellow
      },
      button:{
        flexDirection:"row",
        alignItems: 'center',
        alignContent:"center"
      },
      
  });
  