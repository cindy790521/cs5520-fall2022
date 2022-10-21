import { StyleSheet,View, Text,Button,Pressable } from 'react-native'
import React from 'react'
import DeleteButton from './DeleteButton';

export default function GoalItem({goal,onDelete,onItemPress}) {
    function deletePressed(){
      onDelete(goal.key)
    }
  return (
    
    <View style={styles.goalTextContainer}>
      <Pressable 
    onPress={()=>{
      onItemPress(goal)
    }} 
    android_ripple={{color:'#555',  foreground:true}}
    // style={({pressed})=>{
    //   return pressed && styles.pressedItem;
    // }}
    style={(obj)=>{
      return obj.pressed && styles.pressedItem;
    }}
    >
             <Text style={styles.goaltext}>{goal.text}</Text>
             </Pressable>
              <DeleteButton
              onDeletePressed={deletePressed}/>
             {/* <Button 
               title='X' 
               onPress={()=>{onDelete(goal.key)}} 
               color='red'/> */}
             </View>
              
  )
}
const styles = StyleSheet.create({
  pressedItem:{
    backgroundColor:"blue"
  },
  button:{
    // backgroundColor:"black"
  },
    
    goalTextContainer: {
      margin:8,
      borderRadius: 5,
      padding:5,
      backgroundColor: "#aaa",
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center'
      
    },
    goaltext:{
      fontSize: 20,
    color: "#929",
    // backgroundColor:'#aaa',
    padding: 8,
    },
    pressedItem:{
      backgroundColor: "#222",
    opacity: 0.5,
    }
  });