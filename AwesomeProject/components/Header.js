import { View, Text,StyleSheet,Dimensions,useWindowDimensions, Platform } from 'react-native'
import React from 'react';

//not update when rotating
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

// export default function Header(props) {
  export default function Header({appName}) {
    //updatw when orientation changes
    const {width,height}=useWindowDimensions();
    const paddingVerticalDyn=height<415? 0:10;//landscape:0
  return (

    <View style={styles.headerContainer}>
      {/* <Text>Open up App.js to start working on {props.name}!</Text> */}
      <Text style={[styles.headerText,{paddingVertical:paddingVerticalDyn}]}>welcome to {appName}!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer:{
    justifyContent:'center',
    // alignItems:'center',
    width:350,
    maxWdith:'90%'
  },
  headerText:{
    color:'rebeccapurple',
    fontWeight:'bold',
    borderStyle:'dotted',
    borderColor:'slateblue',
    // borderWidth:2,
    borderWidth:Platform.OS==='android'?4:0,
    // borderWidth:Platform.select({ios:0,android:4}),
    fontsize:windowWidth<380? 18:22,
    paddingHoriziontal:windowWidth<380? 10: 20,
    paddingVertical:10,
    borderRadius:5,
    textAlign:'center'

  }
})