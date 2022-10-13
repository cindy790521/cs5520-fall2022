import { StyleSheet, Text, View ,TextInput, Button,Modal,Image} from 'react-native';
import React,{useState} from 'react';

export default function Input({onAdd,modal,onCancel}) {
    
    const [text,setText]=useState("");
    return (
      <Modal visible={modal}>
      <View style={styles.container}>
        <Image 
        
        source={{uri:'https://cdn-icons-png.flaticon.com/512/2617/2617812.png'}}
        style={styles.image}
        />
      <TextInput 
        value={text}
        onChangeText={(newText)=>{setText(newText)}}
        placeholder="type sth"
        style={styles.input}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button
        title="confirm"
        onPress={()=>{
            onAdd(text);
            setText("");
        }}
        disabled={text.length?false:true}
        // if onAdd not in a function, will render repeatedly
        />
        </View>
        <View style={styles.button}>
        <Button title="cancel" onPress={onCancel}/>
        </View>
        </View>
        <Text>inputed:{text}</Text>
      </View>
      </Modal>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      color:'red',
      borderBottomWidth:2,
      borderBottomColor:'purple',
      margin:5,
      // padding:10
    },
    button:{
      margin:5,
      width:'30%'
    },
    image:{
      width:100,
      height:100
    },
    buttonContainer:{
flexDirection:'row'
    }
  });
  