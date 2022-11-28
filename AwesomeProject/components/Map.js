import { View, Text, StyleSheet,Button } from 'react-native'
import React,{useState} from 'react';
import MapView ,{ Marker } from "react-native-maps";

export default function Map({route,navigation}) {
    console.log('initialLocation',route.params.initialLocation)
    const [currentLocation,setCurrentLocation]=useState(null);
    const mapPressed = (event) => {
        // console.log(event.nativeEvent.coordinte.latitude);
        setCurrentLocation({
          latitude: event.nativeEvent.coordinate.latitude,
          longitude: event.nativeEvent.coordinate.longitude,
        });
      };

      const confirmHandler = () => {
        navigation.navigate("Profile", { currentLocation: currentLocation });
      };
  return (
    <>
    <MapView 
    onPress={mapPressed}
    style={styles.map}
    initialRegion={{
        latitude: route.params.initialLocation
          ? route.params.initialLocation.latitude
          : 37.78825,
        longitude: route.params.initialLocation
          ? route.params.initialLocation.longitude
          : -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
    {currentLocation&&<Marker coordinate={currentLocation}/>}
    </MapView> 
    <Button
        disabled={!currentLocation}
        title="Confirm Selected Location"
        onPress={confirmHandler}
      />
    </>
  )
}
const styles=StyleSheet.create({
    map:{
        height:200
    }
})