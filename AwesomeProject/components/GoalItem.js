import { StyleSheet,View, Text,Button } from 'react-native'
import React from 'react'

export default function GoalItem({goal,onDelete}) {
    
  return (
    <View style={styles.goalTextContainer}>
             <Text style={styles.goaltext}>{goal.text}</Text>
             <View style={styles.button}>
             <Button title='X' onPress={()=>{onDelete(goal.key)}} color='red'/>
             </View>
             </View> 
  )
}
const styles = StyleSheet.create({
    
    goalTextContainer: {
      margin:8,
      borderRadius: 5,
      backgroundColor: "#aaa",
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center'
      
    },
    goaltext:{
      fontSize: 80,
    color: "#929",
    // backgroundColor:'#aaa',
    padding: 8,
    }
  });