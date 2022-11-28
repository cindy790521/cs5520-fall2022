import { View, Text ,Button,Image} from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';

export default function ImageManager({imageHandler}) {
    const [permissionInfo, requestPermission] = ImagePicker.useCameraPermissions();
    const [imageUri,setImageUri]=useState('');
    const verifyPermission=async()=>{
    //check the permission info, if the permission is granted...,else requestPermission
        console.log(permissionInfo)
    if (permissionInfo.granted){
        return true;
    }
    const requestPermissionResponse=await requestPermission();
    console.log(requestPermissionResponse);
    return requestPermissionResponse.granted;
}

    const takeImageHandler = async () => { 
        try {
        const hasPermission=await verifyPermission();
        if(!hasPermission){
          return;
        }
        //only if permission is true, proceed
        const result = await ImagePicker.launchCameraAsync(); 
        console.log('res',result);
        // if(!result.canceled){
        //     setImageUri(result.asset[0].uri)
            
        // }
        
        setImageUri(result.uri);
        imageHandler(result.uri);
    }catch (err) {
        console.log('image taking error ',err)
    } }; 

  return (
    <View>
      <Button title='take an image' onPress={takeImageHandler}/>
      {imageUri? <Image source={{uri:imageUri}} style={{width:200, height:200}}/> : <Text>no image yet</Text>}
    </View>
  )
}