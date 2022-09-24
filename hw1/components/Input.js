import { StyleSheet, Text, View ,TextInput, Button} from 'react-native';
import React,{useState} from 'react';

export default function Input({onAdd}) {
    
    const [text,setText]=useState("");
    return (
      <View style={styles.container}>

        <Button
        title="confirm"
        onPress={()=>{
            onAdd(text);
            setText("");
        }}
        // if onAdd not in a function, will render repeatedly
        />
        
        <TextInput 
        value={text}
        onChangeText={(newText)=>{setText(newText)}}
        placeHolder="type sth"
        />
        
        <Text>inputed:{text}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  