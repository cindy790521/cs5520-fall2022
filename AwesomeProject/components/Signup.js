import { View, Text,Alert,TextInput,Button ,StyleSheet} from 'react-native';
import React ,{ useState }from 'react';
import {auth} from '../firebase/firebase-setup';
import {  createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup({navigation}) {
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [confirmedPassword,setConfirmedPassword]=useState(null);
    
    const handleSignup=async()=>{
        if(password.length<6){
            Alert.alert('password minimum 6 characters');
            return;
        }
        if (password!=confirmedPassword){
            Alert.alert("password and confirmedPassword don't match");
            return;
        }
try{
        const userCred=await createUserWithEmailAndPassword(auth,email,password)
        console.log(userCred);
    }catch(err){
    console.log(err);
}
    
    }
  return (
    <View style={styles.authContent}>
      <Text style={styles.label}>Email Address</Text>
      <TextInput 
        placeholder="Email"
        style={styles.input}
        onChangeText={(newEmail)=>{setEmail(newEmail)}}
        value={email}
        keyboardType='email-address'
        />

<Text style={styles.label}>password</Text>
      <TextInput 
        value={password}
        onChangeText={(newPass)=>{setPassword(newPass)}}
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        />

<Text style={styles.label}>confirm password</Text>
      <TextInput 
        value={confirmedPassword}
        onChangeText={(newPass)=>{setConfirmedPassword(newPass)}}
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        />

<Button
        title="Register"
        onPress={handleSignup}/>

<Button
        title="Already registered? Login"
        onPress={()=>navigation.replace("Login")}/>

    </View>
  )
}

const styles = StyleSheet.create({
    authContent:{
    padding:16,
    flex:1,
    justifyContent:'center',
    },
    label:{
        marginBottom:4
    },
    input:{
      paddingVertical:8,
      paddingHorizontal:6,
      borderRadiuis:4,
      fontSize:16,
      borderColor:'black',
      borderWidth:2,
    },
})