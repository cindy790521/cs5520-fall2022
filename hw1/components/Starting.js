import { StyleSheet, Text, View ,TextInput, Button,Alert} from 'react-native';
import React,{useState} from 'react';
import { Card } from 'react-native-elements';
import {Colors} from '../helpers/Colors.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function Starting({
    text,
    setText,
    isStarting,
    setIsStarting,
    isGame,
    setIsGame}) {
    const createAlert = () =>
  Alert.alert(
    "Invalid number!",
    "Number has to be a number between 1020 and 1029.",
    [
      { text: "OK" }
    ]
  );

const check=function(newText){
  console.log(newText);
  const parsed = parseInt(newText, 10);
  if (isNaN(parsed) || parsed<1020 ||parsed>1029 ) { 
    createAlert(); 
  }else{
    setText(parsed.toString());
    setIsStarting(false);
    setIsGame(true);
  }
  return ;
  
}
    
    return (
      <View style={styles.startingContainer}>
        {/* <View> */}
        {/* <LinearGradient
        // Background Linear Gradient
        colors={['white','transparent','rgba(0,0,0,0.5)', ]}
        style={styles.background}
      /> */}
       <Text style={styles.guess}>Guess my number</Text>
        <View style={{flex:0.1}}/>
        
        <Card containerStyle={styles.enter}>
        
        <Card.Title style={styles.enterTitle}>Enter a number</Card.Title>
        
        
        <TextInput 
        value={text}
        onChangeText={(newText)=>{setText(newText)}}
        placeholder="        "
        keyboardType="numeric"
        style={styles.input}
        />
        
        <View style={styles.button}>
        <Button
        title="reset"
        color='darkviolet'
        onPress={()=>{
            setText("");
        }}
        // if onAdd not in a function, will render repeatedly
        />
        
        <Button
        title="confirm"
        color="red"
        onPress={()=>{
            check(text);
            
        }}
        // if onAdd not in a function, will render repeatedly
        />
        </View>
        
        
        </Card>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    startingContainer:{
        borderColor:"black"
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
        position:"relative",
        textAlign: 'center',

      },
    
      enter:{
        // flex:0.1,
        backgroundColor:Colors.gray,
        top:"5%",
        bottom:"5%",
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
      input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth:"1",
        borderBottomColor:Colors.yellow
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
      },
  });
  