import { View, Text, Button, Image } from 'react-native'
import React, {useState,useEffect}from 'react';
import {MAPSAPI_KEY} from "@env";
import * as Location from 'expo-location'; 
// import{getCurrentPositionAsync} from 'expo-location';
import { useNavigation ,useRoute } from '@react-navigation/native';
import { saveUser, getUser } from "../firebase/firestore";

export default function LocationManager() {
    const [permissionResponse, requestPermission] = Location.useForegroundPermissions();
    const [location,setLocation]=useState(null);
    const navigation = useNavigation();
    const route = useRoute();
    
    useEffect(() => {
        async function getUserLocation() {
          try {
            const storedLocation = await getUser();
            setLocation(storedLocation);
            // console.log(storedLocation);
          } catch (err) {
            console.log("get user ", err);
          }
        }
        getUserLocation();
      }, []);

      useEffect(() => {
        if (route.params) {
          console.log('route.params:',route.params);
          setLocation({
            latitude: route.params.currentLocation.latitude,
            longitude: route.params.currentLocation.longitude,
          });
        }
      }, [route]);

    const verifyPermission=async()=>{
        //check the permission info, if the permission is granted...,else requestPermission
            
        if (permissionResponse.granted){
            return true;
        }
        const requestPermissionResponse=await requestPermission();
        // console.log(requestPermissionResponse);
        return requestPermissionResponse.granted;
    }

    const locateUserHandler = async () => {
        try {
            const hasPermission=await verifyPermission();
            if(!hasPermission){
              return;
            }
        const currentPosition = await Location. getCurrentPositionAsync(); 
        console.log(currentPosition);
        setLocation({latitude:currentPosition.coords.latitude,longitude:currentPosition.coords.longitude});
    }catch (err) {
        console.log('locate user',err)
    } };

    const locationPickerHandler=()=>{
        navigation.navigate('Map',{initialLocation:location});

    }

    const saveUserLocation = async () => {
        await saveUser(location);
      };

  return (
    <View>
      <Button title='Locate me!' onPress={locateUserHandler}/>
      <Button title='Location pick!' onPress={locationPickerHandler}/>
      <Text>LocationManager</Text>
      {location&&(
      <Image 
      source={{uri:`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.long}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.lat},${ location.long}&key=${MAPSAPI_KEY}`
}} style={{width:'100%',height:200}}/>
)}
<Button title="Save Location" onPress={saveUserLocation} />
    </View>
  )
}