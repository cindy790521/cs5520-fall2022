import React,{useState,useEffect} from 'react';
import Home from './components/Home.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails.js';
import { Button} from 'react-native';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import{onAuthStateChanged,signOut} from 'firebase/auth';
import {auth} from './firebase/firebase-setup.js';
import Profile from './components/Profile.js';
import Map from './components/Map.js';


const Stack=createNativeStackNavigator()
function rightButtonPressed(){console.log("rightButtonPressed");}
function rightButton(){
  return(
    <Button
    title="Urgent"
    onPress={rightButtonPressed}
    />
  )
}



export default function App() {
  const [isUserAuthenticated,setIsUserAuthenticated]=useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
      // User is signed in, see docs for a list of available properties // https://firebase.google.com/docs/reference/js/firebase.User
      setIsUserAuthenticated(true);  
    } else {
      // User is signed out
      setIsUserAuthenticated(false);
      }
  })})

  const AuthStack=()=>{return(
    <Stack.Navigator 
          // initialRouteName='Signup'
          screenOptions={{ 
            headerStyle:{backgroundColor:"#995099"},
            headerTintColor:"#fff",
            headerTitleAlign:"center"
            }}>
    <Stack.Screen 
            name="Login" 
            component={Login} 
            />
    
    <Stack.Screen 
            name="Signup" 
            component={Signup} 
            />
            </Stack.Navigator>
            
    )}
    
    const AppStack=()=>{return(
    <Stack.Navigator 
          // initialRouteName='Signup'
          screenOptions={{ 
            headerStyle:{backgroundColor:"#995099"},
            headerTintColor:"#fff",
            headerTitleAlign:"center"
            }}>
      <Stack.Screen 
            name="Home" 
            component={Home} 
            options=
            {({navigation})=>{return{
              title:"All my goals",
              headerRight:()=>{
                return (
                <Button 
                title='Profile' 
                onPress={()=>navigation.navigate('Profile')}
                />
                );
              }
            }}}
            // {{title:"All my goals", 
            // // headerStyle:{backgroundColor:"#995099"},
            // // headerTintColor:"#fff"
            // }}
            />
            <Stack.Screen 
            name="GoalDetails" 
            component={GoalDetails}
            options={({route,navigation})=>{
              return {
                title:route.params.goalObject.text, 
                headerRight:rightButton}}}
            />

          <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options={
              ({navigation})=>{
               return{
                headerRight:()=>{
                  return <Button title='Logout' onPress={()=>signOut(auth)}/>;
                }
               }
              }
            }
            />

          <Stack.Screen 
            name="Map" 
            component={Map} 
            />
    
            
            </Stack.Navigator>
              
      )}
console.log("logged",isUserAuthenticated)
  return (
    <NavigationContainer>
         {isUserAuthenticated?AppStack():AuthStack()}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
  

// })
