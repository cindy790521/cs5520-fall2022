import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';
import React,{useState} from 'react';
import { Card } from 'react-native-elements';
import {Colors} from '../helpers/Colors.js';

export default function Final({
    text,  
    setText,
      isStarting,
      setIsStarting,
      lose,
      setLose,
      win,
      setWin}) {
    
    
    return (
      <View >
        
       <Text style={styles.guess}>Game is over</Text>
        <View style={{flex:0.05}}/>
        
        <Card containerStyle={styles.enter}>
        
        <Card.Title style={styles.enterTitle}>Here's your picture</Card.Title>
        
        {lose&&
        <View>
        <Card.Image source={require('../images/unamused-face-emoji.png')}/>
        <Button
        title="Start again"
        color="red"
        onPress={()=>{
            setLose(false);
            setIsStarting(true);
            setText("");
        }}
        />
        </View>
    }

{win&&
        <View>
        <Card.Image source={{ uri: `https://picsum.photos/id/${text}/100/100` }}/>
        <Button
        title="Start again"
        color="red"
        onPress={()=>{
            setWin(false);
            setIsStarting(true);
            setText("");
        }}
        />
        </View>
    }

        
        </Card>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.pink,
      alignItems: 'center',
    //   justifyContent: 'flex-start',
    //   margin: "5%" 

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
  });
  