import React from 'react';
import Home from './components/Home.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails.js';
import { Button} from 'react-native'


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
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle:{backgroundColor:"#995099"},
        headerTintColor:"#fff",
        headerTitleAlign:"center"
        }}>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options=
        {{title:"All my goals", 
        // headerStyle:{backgroundColor:"#995099"},
        // headerTintColor:"#fff"
        }}
        />
        <Stack.Screen 
        name="GoalDetails" 
        component={GoalDetails}
        options={({route,navigation})=>{
          return {
            title:route.params.goalObject.text, 
            headerRight:rightButton}}}
        />
    {/* <Home/> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
  

// });
